const form = document.querySelector("#film-form")
const titleElement = document.querySelector("#film-title");
const scoreElement = document.querySelector("#film-score");
const filmPosterUrl = document.querySelector("#film-poster-url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clear-all")
// UI Object
const ui = new UI();

// Storage object

const storage = new Storage();

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })

    secondCardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearFilms)
    
}

function addFilm(e){
    const title = titleElement.value;
    const score = scoreElement.value;
    const url = filmPosterUrl.value;

    if(title === "" || score === "" ||  url === ""){
        //Xeta
        ui.displayMessages("danger", "Xaiş olunur boş xanaları doldurun.")
    }
    else{
        //New Film
        const newFilm = new Film(title, score, url);
        console.log("Film elave olundu")
        ui.addFilmToUI(newFilm); //UI elave et
        storage.addFilmToStorage(newFilm); //Storage elave et

        ui.displayMessages("success", "Film əlavə olundu!");

    }

    ui.clearInput(titleElement, scoreElement, filmPosterUrl);

    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("primary", "Film silindi!")
    }
    e.preventDefault();
}

function clearFilms(){
    if(confirm("Bütün filmləri silmək istəyirsiniz?")){
        ui.clearAllFilmsUI();
        storage.clearAllFilmsStorage();
        ui.displayMessages("warning", "Bütün filmlər silindi!")
    }
    
}