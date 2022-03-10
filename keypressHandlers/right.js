import { currentTitle } from './utils.js';

export function onRight() {
  currentTitle.node.target = '_blank';
  currentTitle.node.click();
  currentTitle.node.target = '_self';
}
