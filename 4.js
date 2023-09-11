var pictures = ["images/1.jpg", "images/2.jpg", "images/3.jpg","images/4.jpeg","images/5.jpg"];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function change(n){
    var images = document.getElementsByTagName('img');
    var image = images[0];
    var src = image.src
    var p = src.indexOf('images/')
    var pic = src.substring(p);
    p = pictures.indexOf(pic);
    p = p+n
    // p += n
    console.log(p);
    if(p==-1){
        p=pictures.length-1
        // p+=pictures.length
    }
    else{
        p = p%pictures.length;
    }
    for(var i=100 ; i>0 ; i--){
        image.style.opacity=i/100;
        await sleep(0.01);
    }
    // for(var i=100 ; i>0 ; i--){
    //     image.style.height=i+"%";
    //     await sleep(0.01);
    // }
    image.src = pictures[p];
    for(var i=0 ; i<=100 ; i++){
        image.style.opacity=i/100;
        await sleep(0.01);
    }
    // for(var i=0 ; i<=100 ; i++){
    //     image.style.height=i+"%";
    //     await sleep(0.01);
    // }
}


