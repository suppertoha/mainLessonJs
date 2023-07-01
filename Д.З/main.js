const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {
    
  },
  genres: [],
  privat: false

}

const firstQuestionFilms = +prompt('сколько фильмов вы уже посмотрели', '')
const firstAssessmentFilms = +prompt('на сколько вы его оцениваете', '')
const secondQuestionFilms = +prompt('сколько фильмов вы уже посмотрели', '')
const secondAssessmentFilms = +prompt('на сколько вы его оцениваете', '')

personalMovieDB.movies[firstQuestionFilms] = firstAssessmentFilms
personalMovieDB.movies[secondQuestionFilms] = secondAssessmentFilms

console.log(personalMovieDB)