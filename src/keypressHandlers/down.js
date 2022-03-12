import { focus, getId, currentFocus } from './utils.js';

export function onDown() {
  const next = findNext();
  focus(next);
}

export function findNext() {
  const allTitles = document.querySelectorAll('.titlelink');
  const first = allTitles[0];
  if (!currentFocus.id) return first;
  const currentIndex = Array.from(allTitles).findIndex((a) => getId(a) == currentFocus.id);
  if (currentIndex === -1) return first;
  return allTitles[currentIndex + 1] || currentFocus.anchor; // if +1 doesn't exist, it's bottom
}
