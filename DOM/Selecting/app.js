// const images = document.getElementsByTagName('img');

// for(let img of images) {
//     console.log(img.src);
// }

const squareImages = document.getElementsByClassName('square');

for(let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

//querySelector

const firstpara = document.querySelector('p') ;
const paras = document.querySelectorAll('p') ;

const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href)
}

