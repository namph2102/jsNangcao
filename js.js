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