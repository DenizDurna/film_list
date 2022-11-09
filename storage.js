
//localStorage operations
class Storage {
    //Creating the object in memory on page first open
    storageload() {
        if (localStorage.getItem("films") !== null) {
            storagefilms = JSON.parse(localStorage.getItem("films"));
            storagefilms.map(obj => ui.addFilmToUI(obj))
        }
    }

    //send to localstorage when new movie is added
    addFilmToStorage(newFilm) {
        storagefilms.push(newFilm);
        localStorage.setItem("films", JSON.stringify(storagefilms));
    }
 
    // Delete film from localstorage
    deleteFilmToStorage(storage,parent) {
        storage.map((nv, index) => {
            if (nv.title == parent.children[1].textContent) {
                storage.splice(index, 1)
                localStorage.setItem("films", JSON.stringify(storage));
            }
        
        })
    }
}

