class UI {
    constructor(name, age) {

    }

    addFilmToUI(newFilm){

        console.log(newFilm)
        const filmList = document.getElementById("film-list");
        filmList.innerHTML += `
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" alt="film-poster"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.score}</td>
        <td><a href="" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>

        `;

        
    }

    clearInput(e1, e2, e3){
        e1.value = "";
        e2.value = "";
        e3.value = "";
    }

    displayMessages(type, message){
        const cardBody = document.querySelectorAll(".card-body")[0];
        const div = document.createElement("div");
        div.className = `alert alert-${type}`
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    loadAllFilms(films){
        const filmList = document.getElementById("film-list"); 
        films.forEach(film => {
            filmList.innerHTML += `
            <td><img src="${film.url}" class="img-fluid img-thumbnail" alt="film-poster"></td>
            <td>${film.title}</td>
            <td>${film.score}</td>
            <td><a href="" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
            </tr>
    
            `;
            })
    }

    deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }

    clearAllFilmsUI(){
        const filmList = document.getElementById("film-list"); 
        
        while(filmList.firstElementChild != null){
            filmList.firstElementChild.remove();
        }
    }
}


/*<td><img src="" class="img-fluid img-thumbnail" alt="film-poster"></td>
<td></td>
<td></td>
<td><a href="" id="delete-film" class="btn btn-dark"></a></td>
</tr>-->*/