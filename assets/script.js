// Bar progress
const scrollline = document.querySelector('.scroll-line');

    function fillscrollline(){
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    scrollline.style.width = percentScrolled + '%';
    };

window.addEventListener('scroll', fillscrollline);

//Header 
let nav = document.getElementById('nav');
document.addEventListener('scroll', (event)=>{
    if(window.scrollY > 1000 ){
        nav.classList.add('changeHeader');
    }
    else {
        nav.classList.remove('changeHeader');
    }
})

//Button to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
