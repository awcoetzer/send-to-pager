'use strict';

// the displays
const pagerDisplayTextEl = document.querySelector('.pager-display-text');
const phoneDisplayTextEl = document.querySelector('.phone-display-text');

// the buttons
const keypadBtnEls = document.querySelectorAll('.phone-keypad--btn');
const resetBtnEl = document.querySelector('.reset--btn');
const sendBtnEl = document.querySelector('.send--btn');

// the audio
const audioPager = new Audio('./resources/sounds/pager.wav');
const audioKeypad = new Audio('./resources/sounds/click.wav');
let phoneInput;

const playAudio = function (type) {
  if (type === 'pager') {
    audioPager.play()
  } else if (type === 'keypad') {
    audioKeypad.play()
  }

  setTimeout(() => {
    audioPager.pause()
    audioKeypad.pause()
  }, 2000)

}

// const playKeypad = function () {
//   audioKeypad.play()
// }


const init = function() {
  phoneInput = [];
  phoneDisplayTextEl.textContent = phoneInput;
}

init()

for (let i = 0; i < keypadBtnEls.length; i++) {
  keypadBtnEls[i].addEventListener('click', function (evt) {
    phoneInput.push(evt.target.textContent);
    phoneDisplayTextEl.textContent = phoneInput.toString().replaceAll(',', '');
    playAudio('keypad')
  })
}

resetBtnEl.addEventListener('click', init)

sendBtnEl.addEventListener('click', function (evt) {
  pagerDisplayTextEl.textContent = 'incoming message'
  pagerDisplayTextEl.style.fontSize = 'var(--font-18)'

  setTimeout(() => {
    pagerDisplayTextEl.style.fontSize = '5rem'
    pagerDisplayTextEl.textContent = phoneInput.toString().replaceAll(',', '');
    playAudio('pager')
    document.querySelector('.pager-display').classList.add('flash')
  }, 7000)

  document.querySelector('.pager-display').classList.remove('flash')
})