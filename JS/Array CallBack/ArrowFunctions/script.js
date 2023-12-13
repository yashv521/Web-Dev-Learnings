// const add = function(x,y) {
//     return x+y;
// } regular type

// const add = (x,y) => {
//     return x+y;
// }

// const rollDie = () =>{
//     return Math.floor(Math.random() * 6) + 1 
// }

const rollDie = () =>(
  Math.floor(Math.random() * 6) + 1 
)

const add = (a,b) => a+b 



const movies = [
    {
        title:'RaOne',
        score:58
    },
    {
        title:'RRR',
        score:90
    },
    {
        title:'Jawaan',
        score:85
    },
    {
        title:'12th Fail',
        score:93
    }
]

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// const newMovies = movies.map((movie) =>{
//     return `${movie.title} - ${movie.score / 10}`
// })
//same as
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))