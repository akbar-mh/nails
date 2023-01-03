 const emailInp = document.getElementById("email-inp")
 const singMsg = document.getElementById("msg")
 const singBtn = document.getElementById("btn-up")


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);

}

/* function currentSlide(n) {
showSlides(slideIndex = n);
}
 */

 function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
   /*  let dots = document.getElementsByClassName("dot") */
    if (n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';

    }
    slides[slideIndex-1].style.display = 'block';
   // dots[slideIndex-1].className += " active";
 }

 //sig in 

 singBtn.addEventListener('click' , singIn);
  function singIn (event){
    event.preventDefault();
    singMsg.innerText = "";
   const emilValue = emailInp.value;
      

   if(emilValue.length === 0) {
       singMsg.innerText = "Please enter your email"
   }

  }