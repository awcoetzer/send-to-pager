'use strict';

const sendBtnEl = document.querySelector('.send--btn');

const audio = new Audio('../sounds/pager.wav');

const playAudio = function () {
  audio.play();
}

sendBtnEl.addEventListener('click', playAudio)