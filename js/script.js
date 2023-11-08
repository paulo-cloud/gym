const slides= document.querySelectorAll(".slide")
const esquerdaBTN= document.getElementById("esquerda")
const direitaBTN=  document.getElementById("direita")

let activeSlide=0
esquerdaBTN.addEventListener('click', ()=>{
    activeSlide++
    if(activeSlide >slides.length-1){
        activeSlide=0
    }
    setActiveSlides()
})

direitaBTN.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide= slides.length - 1
    }
    setActiveSlides()
})



function setActiveSlides(){
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
        
    
}