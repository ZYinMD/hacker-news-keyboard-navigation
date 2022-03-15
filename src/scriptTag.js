/* this file will be inserted as a <script> tag into the hacker news site*/

import { onDown } from './keypressHandlers/down.js';
import { onEnter } from './keypressHandlers/enter.js';
import { onLeft } from './keypressHandlers/left.js';
import { onRight } from './keypressHandlers/right.js';
import { onSpace } from './keypressHandlers/space.js';
import { onUp } from './keypressHandlers/up.js';

document.addEventListener('keydown', (event) => {
  if (event.isComposing) return; // if current keypress is in an input method
  if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return; // if modifier keys are pressed
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
    case 'NumpadEnter':
      event.preventDefault();
      onEnter();
      break;
    case 'Space':
      event.preventDefault();
      onSpace();
      break;
    default:
      break;
  }
});
