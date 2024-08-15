import { alert, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const btn = document.getElementById('btn');
const key = document.getElementById('key');

const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let currentKeyIndex = 0;

key.textContent = keys[currentKeyIndex];

document.addEventListener('keydown', ckeckPressedKey);
document.addEventListener('keypress', e => {
  e.preventDefault();
});
btn.addEventListener('click', startNewGame);

function ckeckPressedKey(e) {
  if (e.key === keys[currentKeyIndex]) {
    success({
      text: 'You guessed!',
      delay: 500,
    });
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      key.textContent = keys[currentKeyIndex];
    } else {
      alert({
        text: 'You win!',
        delay: 500,
      });
    }
  } else {
    error({
      text: 'You failed!',
      delay: 500,
    });
  }
}

function startNewGame() {
  currentKeyIndex = 0;
  key.textContent = keys[currentKeyIndex];
  alert({
    text: 'Let the game begin!',
    delay: 500,
  });
}

startNewGame();
