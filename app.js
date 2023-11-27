 'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const showModal = document.querySelectorAll('.show-modal');
 const closeModal = document.querySelector('.close-modal');

const openModal = function() {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden')
}
 showModal.forEach(shows => {
    shows.addEventListener('click', openModal)
 })

 function closeModals() {
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
 }
 closeModal.addEventListener('click', closeModals)

 overlay.addEventListener('click', closeModals)

//  for(let i = 0; i < showModal.length; i++) {
//    console.log(showModal[i].textContent);
//  }

document.addEventListener('keydown', (e)  => {
   if (e.key === "Escape") console.log('Escape key was pressed!');
})