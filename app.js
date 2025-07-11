const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

//PARALLAX
let xValue = 0,
  yValue = 0;

let rotateDegree=0;

function update(cursorPosition){
  parallax_el.forEach((el) => {
    let speedx= el.dataset.speedx;
    let speedy= el.dataset.speedy;
    let speedz= el.dataset.speedz;
    let rotateSpeed=el.dataset.rotation;

    let isInLeft=
      parseFloat(getComputedStyle(el).left) < window.innerWidth/2?1:-1;
    let zValue=
      (cursorPosition - parseFloat(getComputedStyle(el).left))*isInLeft*0.1;
    

    el.style.transform = `perspective(2300px) translateZ(${
      zValue*speedz
    }px)rotateY(${rotateDegree*rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue *speedx
    }px)) translateY(calc(-50% + ${yValue*speedy}px))`;
  });
}
update(0);

window.addEventListener("mousemove", (e) => {
  if(timeline.isActive()) return;  //Habilitar o parallax qd animação acabar


  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree=(xValue/(window.innerWidth/2))*20;

  update(e.clientX);
});
  

if(window.innerWidth>=725){
    main.style.maxHeight=`${window.innerWidth * 0.6}px`;
}else{
    main.style.maxHeight=`${window.innerWidth*1.6}px`;
}


//Animação----------------------------
let timeline = gsap.timeline();
//BG descendo
Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el)=>{
    timeline.from(el, {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 3.5,
      ease: "power3.out",
    }, "1");
    
  });
//Texto H2
timeline.from(".text h2",{
  y: 
    window.innerHeight - 
    document.querySelector(".text h2").getBoundingClientRect().top+200,
  duration:2,
 },
 "2.5"
)
//Texto H1
.from(
  ".text h1",
  {
    y: -150,
    opacity:0,
    duration:1.5,
  },
  "3"
);

//Header opaco conforme scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.style.position = (window.scrollY > 0) ? 'fixed' : 'absolute';
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const textSection = document.querySelector('#text-section');
  const bgImage = document.querySelector('.main-bg');
  
  const textSectionTop = textSection.getBoundingClientRect().top;

  if (textSectionTop <= 0) {
      header.classList.add('blurred-bg');
  } else {
      header.classList.remove('blurred-bg');
  }
});


const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');

// Adiciona um ouvinte de evento de clique a cada link
aboutLink.addEventListener('click', () => {
    aboutLink.classList.add('strikethrough');
    projectsLink.classList.remove('strikethrough');
});

projectsLink.addEventListener('click', () => {
    projectsLink.classList.add('strikethrough');
    aboutLink.classList.remove('strikethrough');
});

window.addEventListener('load', () => {
  // Rolando a página para o topo
  window.scrollTo(0, 0);
});

// Adicionando um evento que captura a mudança de URL (atualização da página)
window.addEventListener('beforeunload', () => {
  // Rolando a página para o topo antes da atualização
  window.scrollTo(0, 0);
});





// Blur scroll header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
      header.classList.add('blur');
  } else {
      header.classList.remove('blur');
  }
});

// Função para ocultar o loader quando a página estiver totalmente carregada
function hideLoader() {
  $('.loader').fadeOut(); // Usa jQuery para esconder o loader com fade-out
}

// Espera que todo o conteúdo da página esteja carregado
$(window).on('load', function() {
  hideLoader(); // Quando tudo estiver carregado, esconde o loader
});

// Se houver algum erro de carregamento, também esconda o loader após um tempo limite
setTimeout(hideLoader, 10000); // Tempo limite de 10 segundos para ocultar o loader mesmo se houver erro de carregamento

const textSection = document.querySelector('.text');

const observer = new IntersectionObserver(entries => {
  const entry = entries[0];
  const opacity = Math.max(0, 1 - entry.intersectionRatio);
  textSection.style.opacity = opacity;
}, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

observer.observe(textSection);

