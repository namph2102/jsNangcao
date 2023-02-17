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
// const header=document.querySelector('.header');
// message.classList.add('.cookie-message');
// message.innerHTML=`We learn about JavaScript With Jossna   <button class="btn btn--close-cookie" data-id="4"> Got it!</button>`;
// header.before(message);
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
session1.style.backgroundColor = '#333';
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
document.querySelectorAll('.nav__link')
  .forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      console.log(this);
      console.log(document.querySelector(this.getAttribute('href')))
      document.querySelector(this.getAttribute('href')).scrollIntoView();
    })
  })

// tabbed compoment
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
function handleOver(e){

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const parentNav=link.closest('.nav');
    parentNav.querySelectorAll('.nav__link').forEach(e => {
      if (e != link) e.style.opacity = this;
    });
    parentNav.querySelector('img').style.opacity = this;
  } 
}
const nav=document.querySelector('.header nav');
nav.addEventListener('mouseover',handleOver.bind(0.5))
nav.addEventListener('mouseout',handleOver.bind(1))
// stick menu

window.onscroll=()=>{
 const box=document.querySelector('.header__title').getBoundingClientRect();

 if(box.bottom<=0 && !nav.classList.contains('sticky')){
  nav.classList.add('sticky');
  
 }else if((box.bottom>0 && nav.classList.contains('sticky'))){
  nav.classList.remove('sticky');
 }
}