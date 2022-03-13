class Storage {
    constructor() {

    }

    addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();

        films.push(newFilm);

        localStorage.setItem("films", JSON.stringify(films));

    }

    getFilmsFromStorage(){
        let films;

        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }

    deleteFilmFromStorage(element){
        let films = this.getFilmsFromStorage();

        films.forEach((film, index) => {
            if(film.title === element){
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    clearAllFilmsStorage(){
        localStorage.removeItem("films");
    }
}