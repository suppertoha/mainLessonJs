const numberOfFilms = +prompt(' Сколько фильмов вы уже посмотрели ', ''),
  a = lastFilmFirst = prompt(' Один из последних просмотренных фильмов', ''),
  b = assessmentFilmFirst = +prompt(' На сколько оцениет его ', ''),
  c = lastFilmSecond = prompt(' Один из последних просмотренных фильмов', ''),
  d = assessmentFilmSecond = +prompt(' На сколько оцениет его ', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)
