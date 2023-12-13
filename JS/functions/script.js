function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// function greet(person) {
//     console.log(`firstName is: ${person}`)
// }

function greet(firstName, lastname) {
    console.log(`Hey There, ${firstName} ${lastname[0]}.`);
}

function repeat(text, num) {
    let newtext = '';
    for(let i=0; i < num ; i++)
    {
     newtext+= text; 
    }
    console.log(newtext);
}

// function isSnakeEyes(dice1,dice2)
// {
//     if(dice1 === dice2 && dice1 === 1 )
//     {
//         return 'Snake Eyes';
//     }
//     else{
//         console.log('Not Snake Eyes!')
//     }
// }
function add(x, y) {
    let sum = x+y;
    return sum;
}

function lastElement(arr = [] )
{
    if(arr.length === 0)
    {
        return null;
    }
    else{
        return(arr[arr.length-1]);
    }
    
}

function capitalize(str){

    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

