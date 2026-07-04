const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".card img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

/* Open Lightbox */

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.style.display="flex";

        lightboxImg.src=images[index].src;
    });

});

/* Close */

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";
});

/* Next */

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=images.length){
        currentIndex=0;
    }

    lightboxImg.src=images[currentIndex].src;
});

/* Prev */

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){
        currentIndex=images.length-1;
    }

    lightboxImg.src=images[currentIndex].src;
});

/* Keyboard Support */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){
        lightbox.style.display="none";
    }

    if(e.key==="ArrowRight"){
        nextBtn.click();
    }

    if(e.key==="ArrowLeft"){
        prevBtn.click();
    }
});

/* Filter */

function filterImages(category){

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        if(category==="all" ||
           card.classList.contains(category))
        {
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
}