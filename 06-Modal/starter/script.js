'use strict';

const $modal = document.querySelector('.modal');
const $overlay = document.querySelector('.overlay');
const $btnsOpenModal = document.querySelectorAll('.show-modal');
const $btnCloseModal = document.querySelector('.close-modal');

for (let i = 0; i < $btnsOpenModal.length; i++)
  $btnsOpenModal[i].addEventListener('click', function () {
    $modal.classList.remove('hidden');
    $overlay.classList.remove('hidden');
  });
