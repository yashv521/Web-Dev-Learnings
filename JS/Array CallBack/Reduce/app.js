const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total =0
// for(let price of prices){
//      total += price
// }
// console.log(total)

const total = prices.reduce((total,price) => {
    return total + price
})

const minPrice = prices.reduce((min,price) => {
    if(price < min){
        return price;
    }
    return min;
})

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
    },
    {
        title:'Animal',
        score:95
    },
    {
        title:'Tiger 3',
        score:81
    }
]

const BestMovie = movies.reduce((bestMovie,currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

const evens = [2,6,14,18];

const startdiff = evens.reduce((sum, num) => sum+ num, 100)
