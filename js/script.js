/*Задание 1*/
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
/*Задание 2*/
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gerners: [],
    privat: false
};
/*Задание 3*/
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Какую оценку вы ему поставите?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Какую оценку вы ему поставите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);