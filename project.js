const formslct = document.querySelector("#film-form");
const flmLst = document.querySelector("#films");
const ui = new UI();
const storage = new Storage();

// 
flmLst.addEventListener("click", filmdlt)

// Post form submission process
const sbmt = (e) => {
    e.preventDefault();
    const title = e.target.title;
    const director = e.target.director;
    const cs = storagefilms.filter(ttl=>ttl.title.toLowerCase()==title.value.toLowerCase());
    if(cs.length!==0){
        ui.message("success", "Film already added");
        [title.value, director.value, url.value] = ["", "", ""];
    }else{   
        const newFilm = new film(title.value, director.value, url.value)
        ui.addFilmToUI(newFilm);
        [title.value, director.value, url.value] = ["", "", ""];
        storage.addFilmToStorage(newFilm)
        ui.message("success", "Film successfully added")
        
    }


/*
    
*/
}

// Film delete button action
function filmdlt(e) {
    const prnt = e.target.parentElement.parentElement;
    if (e.target.id == "delete-film") {
        ui.deleteFilmToUI(prnt)
        ui.message("danger", "The Film was deleted from the recordings")
        storage.deleteFilmToStorage(storagefilms,prnt)
    }
}

//Claear all button click action
function alldell() {
    if (confirm("Delete all films?")) {
        storagefilms = [];
        localStorage.removeItem("films")
        flmLst.innerHTML = ""
        ui.message("warning", "All Films Deleted!!!")

    }
}
