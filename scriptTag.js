/* this file will be inserted as a <script> tag into hacker news */

import { onDown } from './keypressHandlers/down.js';
import { enter } from './keypressHandlers/enter.js';
import { onLeft } from './keypressHandlers/left.js';
import { onRight } from './keypressHandlers/right.js';
import { onUp } from './keypressHandlers/up.js';

document.addEventListener('keydown', (event) => {
  if (event.isComposing) return; // if current keypress is in an input method, don't mess with it.
  switch (event.code) {
    case 'ArrowDown':
      event.preventDefault();
      onDown();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onUp();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      onLeft();
      break;
    case 'ArrowRight':
      event.preventDefault();
      onRight();
      break;
    case 'Enter':
      event.preventDefault();
      enter();
      break;
    default:
      break;
  }
});
