function backgroundImage(){
    let header = document.getElementsByTagName('header')[0];
    let image = header.getElementsByTagName('img')[0];
    image.src = '../static/images/carusel.jpg';
}

backgroundImage()