import { findNext } from './down.js';
import { focus, currentFocus } from './utils.js';

export function onLeft() {
  const next = findNext();
  const theHideButton = document.querySelector(`a[href^="hide?id=${currentFocus.id}"]`);
  theHideButton.click();
  focus(next);
}
