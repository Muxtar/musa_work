// function backgroundImage(){
//     let header = document.getElementsByTagName('header')[0];
//     let image = header.getElementsByTagName('img')[0];
//     image.src = '../static/images/carusel.jpg';
// }

// backgroundImage()

let divRight = document.getElementsByClassName('right-border')[0];

let borderRigth = setTimeout(()=>{
    divRight.style.height = '100%';
}, 5000)

let changeImage = setTimeout(()=>{
    document.getElementById('image').src = '../static/images/carusel.jpg';
}, 10000)
