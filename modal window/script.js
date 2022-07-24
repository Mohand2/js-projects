'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const colseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', colseModal);
overlay.addEventListener('click', colseModal);
