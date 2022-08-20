const  carouselSlide = document.querySelector('.carousel-slid');
const  carouselSlideImage = document.querySelectorAll('.carousel-slid img');

//buttons
const  previousBtn = document.querySelector('#prev');
const  nextBtn  = document.querySelector('#next');

//counter
let counter = 1;
const size = carouselSlideImage[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 

// Button listeners

nextBtn.addEventListener("click", () => {
    if(counter <= 0) return;
    //if (counter >= carouselSlideImage.length -1) return
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 

})

 
previousBtn.addEventListener("click", () => {
    if (counter >= carouselSlideImage.length -1) return
    //if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
})



carouselSlide.addEventListener("transitionend", () => {
   if (carouselSlideImage[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none"
    counter = carouselSlideImage.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
   }

   if (carouselSlideImage[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none"
    counter = carouselSlideImage.length - counter;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 

   }


});





