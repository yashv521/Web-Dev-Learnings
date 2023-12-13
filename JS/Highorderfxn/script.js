// function callTwice(func){
//     func(); 
//     func(); 
// }

// function callTenTimes(f) {
//     for(let i=0; i<10 ; i++) {
//         f()
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll);
// }

// callTwice(rollDie);
 function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function () {
            console.log('CONGRATS, I AM A GOOD FUNCTION!')
            console.log('YOU WIN A MILLION DOLLARS!!')
        }
    } else {
        return function () {
            alert("You are Infected with a Virus!!!")
            alert("Stop trying to close this window")
            alert("Stop trying to close this window")
            alert("Stop trying to close this window")
            alert("Stop trying to close this window")
            alert("Stop trying to close this window")
        }
    }
 }


 function makeBetweenFunc(min, max){
    return function(num) {
        return num >= min && num <= max;
    }
 }

// function isBetween(num) {
//     return num >=50 && num <=100
// } Tells us if num is between 50 and 100


















