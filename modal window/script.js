'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const switcher = [closeModalBtn, overlay];

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
}

for (let i = 0; i < switcher.length; i++) {
  switcher[i].addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
}
