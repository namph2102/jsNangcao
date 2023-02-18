const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const overlay = $('.overlay')

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// open modal
const btnOpenAccounts = $$(".btn--open-modal");
btnOpenAccounts.forEach(btn => btn.onclick = openModal);
$('.btn--close-modal').onclick = closeModal

// const message=document.createElement('div');
// const headerBudding=document.querySelector('.header');
// message.classList.add('.cookie-message');
// message.innerHTML=`We learn about JavaScript With Jossna   <button class="btn btn--close-cookie" data-id="4"> Got it!</button>`;
// headerBudding.before(message);
// $('.btn--close-cookie').onclick=()=>{
//   message.parentElement.removeChild(message);
// }
// message.style.backgroundColor="#333";
// message.style.color="#fff";
// message.style.width='120%';
// message.style.textAlign='center';
// console.log(getComputedStyle(message).length);
// console.log($('.btn--close-cookie').dataset.id);
// message.style.height=parseFloat(getComputedStyle(message).height) + 50 +'px';


const btnScrollTo = $('.btn--scroll-to');
const session1 = document.getElementById('section--1');
session1.style.backgroundColor = 'white';
btnScrollTo.addEventListener('click', (e) => {
  const boxs1 = session1.getBoundingClientRect();
  //  console.log('windown  height/width' ,window.scrollX,window.scrollY);
  session1.scrollIntoView({ behavior: 'smooth' });
  //  window.scrollTo(0,boxs1.top+window.scrollY);
})

document.getElementsByClassName('.btn--scroll-to').onclick = () => {
  console.log(this);
}

const randomColor = (min = 0, max = 255) => Math.floor(Math.random() * (max - min) + 1) + min;
const creatRGB = () => `rgba(${randomColor()},${randomColor()},${randomColor()})`
document.querySelector('nav').addEventListener('click', function (e) {
  this.style.backgroundColor = creatRGB();
})
document.querySelector('.nav__item').addEventListener('click', function (e) {
  this.style.backgroundColor = creatRGB();
})
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = creatRGB();
})
//lab 5.2  IMPLEMENTING	SMOOTH	SCROLLING
document.querySelectorAll('.nav__link')
  .forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      console.log(document.querySelector(this.getAttribute('href')))
      document.querySelector(this.getAttribute('href')).scrollIntoView();
    })
  })
//lab 5.3  ADVANCED	DOM AND	EVENTS	> EVENT	PROPAGATION	IN	PRACTICE

document.querySelector('.overlay').addEventListener('click', closeModal)



// tabbed compoment  lab 6----------==================
const tabs = document.querySelectorAll('.operations__tab');
const tabContext = document.querySelectorAll('.operations__content ')
const tabContent = document.querySelector('.operations__tab-container');

tabContent.addEventListener('click', (e) => {
  const parentElement = e.target.closest('.operations__tab');
  if (!parentElement) return;
  /// remove tabs adn tabcontent active
  tabs.forEach(t => t.classList.remove("operations__tab--active"))
  tabContext.forEach(content => content.classList.remove("operations__content--active"))

  parentElement.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${parentElement.dataset.tab}`).classList.add('operations__content--active')
})
function handleOver(e) {

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const parentNav = link.closest('.nav');
    parentNav.querySelectorAll('.nav__link').forEach(e => {
      if (e != link) e.style.opacity = this;
    });
    parentNav.querySelector('img').style.opacity = this;
  }
}
const nav = document.querySelector('.header nav');
nav.addEventListener('mouseover', handleOver.bind(0.5))
nav.addEventListener('mouseout', handleOver.bind(1))
// stick menu

// window.onscroll=()=>{
//  const box=document.querySelector('.header__title').getBoundingClientRect();

//  if(box.bottom<=0 && !nav.classList.contains('sticky')){
//   nav.classList.add('sticky');

//  }else if((box.bottom>0 && nav.classList.contains('sticky'))){
//   nav.classList.remove('sticky');
//  }
// }


/// Sử lý giao nhau trong javaScript
function obsCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else nav.classList.remove('sticky');

  })

}
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-' + nav.clientHeight + 'px'
}
// const obsever=new  IntersectionObserver(obsCallback,obsOptions) Laze--image adn header sticky

const header = document.querySelector('header');
const headerObsever = new IntersectionObserver(obsCallback, obsOptions);
headerObsever.observe(header)

const sesOptions = {
  root: null,
  threshold: 0.1,

};
function sesCallbackObsserver(entries, obs) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    obs.unobserve(entry.target);
  }


}
const effectShowSesion = new IntersectionObserver(sesCallbackObsserver, sesOptions);

document.querySelectorAll('.section').forEach(sesion => {
  effectShowSesion.observe(sesion);
  sesion.classList.add("section--hidden");
})
function loadImg(entries, obsever) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    this.classList.remove('lazy-img');

  })
  obsever.unobserve(entry.target)
}
const imgOptions = {
  root: null,
  threshold: 0,
  rootMargin: '200px'
}
const imgObserve = new IntersectionObserver(loadImg, imgOptions);
const imgSRc = document.querySelectorAll('img[data-src]');
imgSRc.forEach(img => {
  imgObserve.observe(img);
})


// lab 6
const silder = () => {

  // sự kiện slider
  let curIndex = 0;
  const slides = document.querySelectorAll('.slide');

  // creat dots slide and inner html dots
  const dotsElement = document.querySelector('.dots')

  let html__dots = '';
  for (let i = 0; i < slides.length; i++) {
    html__dots += `<div class="dots__dot" data-index="${i}"></div>`;
  }
  dotsElement.innerHTML = html__dots;
  const dotListChild = [...dotsElement.childNodes];

  // gotoSlide (index) 
  const gotoSlide = (curIndex) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - curIndex) * 100}%)`;
      s.classList.add(`slide--${i + 1}`);
    })
    // show color slide dots
    creatActiveDots();
  }
  function creatActiveDots() {
    dotListChild.find(dot => dot.classList.contains('dots__dot--active'))?.classList.remove('dots__dot--active');
    dotListChild[curIndex].classList.add('dots__dot--active');
  }

  const nextSlide = () => {
    curIndex++;
    if (curIndex >= slides.length) curIndex = 0;
    gotoSlide(curIndex);
  }
  const perSlide = () => {
    curIndex--;
    if (curIndex < 0) curIndex = slides.length - 1;
    gotoSlide(curIndex);
  }
  $('.slider__btn--right').addEventListener('click', nextSlide);
  $('.slider__btn--left').addEventListener('click', perSlide);


  // default slider curent Index 
  gotoSlide(curIndex); // init slide


  dotsElement.addEventListener('click', function (e) {
    if (e.target.closest('.dots__dot')) {
      curIndex = (Number(e.target.dataset.index));
      gotoSlide(curIndex)
    }
  })

  // sự kiện án phím
  document.addEventListener('keydown', function (e) {
    e.key == 'ArrowRight' && nextSlide();
    e.key == 'ArrowLeft' && perSlide();

  })
}
silder();


document.addEventListener('DOMContentLoaded',function(){
  console.log('assaas');
})
window.addEventListener('load',function(){
  console.log('sdadas');
})
window.addEventListener('beforeunload',function(e){
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
})