// let count =0;
// while(count< 10){
//     count++;
//     console.log(count)  
// }

// let SECRET = 'BabyHippo'

// const guess = prompt('Enter the Secret Code');
// while(guess !== SECRET)
// {
//     guess = prompt('Enter the Secret Code');
// }
// console.log('YAY You cracked the code')
// let input = prompt('Hey, Say Something!')
// while (true) {
//     input = prompt(input);
//     if (input === 'stop copying me') {
//         break;
//     }
// }
// console.log('OK YOU WIN!')

let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    guess= parseInt(guess);
    // attempts++;
    if( guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:');
        attempts++;
    }
    else if(guess < targetNum) {
        guess = prompt('Too low! Enter a new guess:');
        attempts++;
    }else {
        guess = prompt('Invalid Guess. Please enter a number or "q" to quit');
    }
}
if(guess === 'q') {
    console.log('OK, YOU QUIT!')
} else {
console.log('CONGRATS YOU WIN !')
console.log(`You got it! It took you ${attempts} guesses`)
}