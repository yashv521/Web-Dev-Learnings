const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.forEach(function(el) {
    if(el % 2 === 0){
    console.log(el)
    }
})

//similar

for(let el of numbers) {
    console.log(el);
}

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

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})