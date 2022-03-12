import { currentFocus } from './utils.js';

export function onEnter() {
  currentFocus.anchor.target = '_blank';
  currentFocus.anchor.click();
  currentFocus.anchor.target = '_self';
}
