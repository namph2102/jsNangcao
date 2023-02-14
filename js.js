const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const modal=$('.modal');
const overlay=$('.overlay')

function openModal(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// open modal
const btnOpenAccounts=$$(".btn--open-modal");
btnOpenAccounts.forEach(btn =>btn.onclick=openModal );
$('.btn--close-modal').onclick=closeModal

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
const btnScrollTo=$('.btn--scroll-to');
const session1=document.getElementById('section--1');
session1.style.backgroundColor='#333';
btnScrollTo.addEventListener('click',(e)=>{
 const boxs1=session1.getBoundingClientRect();
//  console.log('windown  height/width' ,window.scrollX,window.scrollY);
session1.scrollIntoView({behavior:'smooth'});
//  window.scrollTo(0,boxs1.top+window.scrollY);
})
session1.addEventListener('mouseenter',()=>{
  console.log('hey mouseenter');
  console.log(this);
})
document.getElementsByClassName('.btn--scroll-to').onclick=()=>{
  console.log(this);
}
session1.addEventListener('mouseout',()=>{
  console.log('hey mouseout');
})

  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), false);
    // elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
