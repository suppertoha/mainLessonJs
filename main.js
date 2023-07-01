
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
let logan  = +prompt('На сколько оцениваете фильм?', '')

let personalMovieDB = {
  count: numberOfFilms,
  movies: {
    
  },
  actors: {
    
  },
  privat: false
}

personalMovieDB.movies.logan = `${logan}`

console.log(personalMovieDB)
