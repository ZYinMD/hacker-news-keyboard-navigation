import { findNext } from './down.js';
import { focus, states } from './utils.js';

export function onLeft() {
  const nextEntry = findNext();
  const hideButton = document.querySelector(`a[href^="hide?id=${states.currentEntryId}"]`);
  hideButton.click();
  focus(nextEntry);
}
