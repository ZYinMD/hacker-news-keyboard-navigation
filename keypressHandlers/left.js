import { findNext } from './down.js';
import { focus, currentTitle } from './utils.js';

export function onLeft() {
  const next = findNext();
  const theHideButton = document.querySelector(`a[href^="hide?id=${currentTitle.id}"]`);
  theHideButton.click();
  focus(next);
}
