
const filmList = document.querySelector("#films");
const alrt = document.querySelector("#alert")
let storagefilms =[];

// UI operations
class UI{
    // Render films in ui
    addFilmToUI = (newFilm) => {
        let nwtr = document.createElement("tr");
        nwtr.innerHTML = `
    <td><a href=${newFilm.url} target="_blank"><img src=${newFilm.url} alt=${newFilm.url} width="200" " class="img-fluid img-thumbnail"></a></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>`
        filmList.appendChild(nwtr)
    }

    // Remove film from ui
    deleteFilmToUI =(deleteFilm)=>{
        deleteFilm.remove();
    }

    // Information messages
    message = (type, message) => {
        const nwdv = document.createElement("div");
        nwdv.className = `alert alert-${type}`
        nwdv.role = "alert"
        nwdv.innerHTML = message
        alrt.appendChild(nwdv)
        setTimeout(() => {
            nwdv.remove()
        }, 3000);
    }
    
}
