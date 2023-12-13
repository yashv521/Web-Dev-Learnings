// console.log('HELLO!!!')
// setTimeout(() => {
//     console.log('... are you still there??')
// }, 3000)
// console.log('OK BYE!!!') 


const id = setInterval(() => {
    console.log(Math.floor((Math.random() * 10)+1))
},2000);

//clearInterval(id);