
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.slider-carousel').children;
const totalImages = images.length;
let currentIndex = 0;
// const txt = document.getElementById('search');
// const bt  = document.getElementById('btn');
//const ot  = document.getElementById('demo');


// Event Listeners to previous and next buttons
previous.addEventListener('click', () => {
    previousImage()
})

next.addEventListener('click', () => {
    nextImage();
})


// Function to go to next Image
function nextImage() {

    images[currentIndex].classList.remove('main');
    if (currentIndex == totalImages - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }

    images[currentIndex].classList.add('main');

}

// Function to go to previous Image
function previousImage() {

    images[currentIndex].classList.remove('main');
    if (currentIndex == 0) {
        currentIndex = totalImages - 1;
    }
    else {
        currentIndex--;
    }

    images[currentIndex].classList.add('main');

}

//search
// const h1=document.querySelectorAll('div.agent_name')[0];
// const text = h1.firstElementChild.textContent;
const txt = document.getElementById('search');
const bt = document.getElementById('btn');
//var val = txt.value.toUpperCase();
function srch() {
    let val = txt.value.toUpperCase();
    for (let i = 0; i < 21; i++) {
        let h1 = document.querySelectorAll('div.agent_name')[i];
        let text = h1.innerText;
        let j = i;

        if (val == text) {
           // images[z].classList.remove('images');
            for (z = 0; z < j + 1; z++) {
                images[z].classList.remove('main');
                if (z == 0) {
                    
                    z = j;
                }
                else {
                    //var elem=document.getElementsByClassName('images');
                    //elem.remove();
                    //classList.remove('abi');
                    z=j;
                }
                
                images[z].classList.add('main');

            }
            break;
        }


    }
}

btn.addEventListener('click', () => {
    srch();
});


// const val = txt.value.toUpperCase();
// for(let i;i<21;i++){
//     const h1=document.querySelectorAll('div.agent_name')[i];
//     const text = h1.firstElementChild.textContent;
// if(val==text){
//     document.getElementsByClassName('images')[i].style.display="block";
//     document.cookie=i;
// }
// else{
//     document.getElementsByClassName('images')[i].style.display="none";
//     //nextImage();
// }
// }