/* this file will be inserted as a <script> tag into hacker news */

import { onDown } from './keypressHandlers/down.js';
import { onRight } from './keypressHandlers/right.js';

document.addEventListener('keydown', (event) => {
  if (event.isComposing) return; // if current keypress is in an input method, don't mess with it.
  switch (event.code) {
    case 'ArrowDown':
      event.preventDefault();
      onDown();
      break;
    case 'ArrowUp':
      event.preventDefault();
      console.log('up');
      break;
    case 'ArrowLeft':
      event.preventDefault();
      console.log('left');
      break;
    case 'ArrowRight':
      event.preventDefault();
      onRight();
      break;
    case 'Enter':
      event.preventDefault();
      console.log('enter');
      break;
    case 'Space':
      event.preventDefault();
      console.log('space');
      break;
    default:
      break;
  }
});
