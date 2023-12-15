const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

numbers.filter(n =>{
    return n === 4
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

const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 80)
const movieTitles = movies.map(m => m.title)
movies.filter(m => m.score<80).map(m => m.title);


// function validUserNames(usernames) {
    
//     const names = usernames.filter((name) => {
//        return name.length < 10
//     })
//     return names;
//     }

//     validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);