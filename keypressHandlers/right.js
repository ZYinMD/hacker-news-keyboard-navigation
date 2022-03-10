import { currentTitle } from './utils.js';

export function onRight() {
  currentTitle.link.target = '_blank';
  currentTitle.link.click();
  currentTitle.link.target = '_self';
}
