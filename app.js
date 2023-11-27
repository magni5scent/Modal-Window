 'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const showModal = document.querySelectorAll('.show-modal');
 const closeModal = document.querySelector('.close-modal');


 showModal.forEach(shows => {
    shows.addEventListener('click', () => {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden')
    })
 })

 function closeModals() {
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
 }

 

 closeModal.addEventListener('click', () => {
   closeModals()
 });

 overlay.addEventListener('click', () => {
   closeModals()
 })

//  for(let i = 0; i < showModal.length; i++) {
//    console.log(showModal[i].textContent);
//  }