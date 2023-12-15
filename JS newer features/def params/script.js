function rollDie(Numsides = 6) {
    return Math.floor(Math.random() * Numsides) + 1
}

//SpREAD]
const cats = ['billo','rani','putputi'];
const dogs = ['raja','Rio','Kullu'];

const AllPets  = [...cats, ...dogs];

const feline = { legs: 4 , famile:'felidae'};
const canine = { isFurry:true, family: 'Caninae'}

const catDog = {...feline, ...canine};

//RestParams
function sum(...nums) {
    return nums.reduce((total,el) => total+el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKX TO ALL: ${everyoneElse}`)
}

//Destructuring Arrays
const Numbers = [987456,890657,765093,745093,567809];

//normal way
const HighestNum = Numbers[0];
const SecondHighestNum = Numbers[1];
//Eay way
const [gold,silver, ...everyoneElse]  = Numbers;

//Object Literals
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const {firstName,lastName,bio,died} = user;

const {born: birthYear, died: DeathYear} = user;

const {born, died = 'N/A'} = user2

//Destructuring Params
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.map(movie => {
    return `${movie.title} (${movie.year} is rated ${movie.score})`
 })

 //both are same

 movies.map(({title,year,score}) => {
    return `${title} (${year}) is rated ${score}`
 })






















