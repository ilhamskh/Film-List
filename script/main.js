const ui = new UI();


eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
}