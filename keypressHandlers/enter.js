import { currentFocus } from './utils.js';

export function onEnter() {
  currentFocus.link.target = '_blank';
  currentFocus.link.click();
  currentFocus.link.target = '_self';
}
