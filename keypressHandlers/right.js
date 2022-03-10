import { states } from './utils.js';

export function onRight() {
  states.currentEntry.target = '_blank';
  states.currentEntry.click();
  states.currentEntry.target = '_self';
}
