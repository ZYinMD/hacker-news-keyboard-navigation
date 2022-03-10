import { focus, getId, currentTitle } from './utils.js';

export function onDown() {
  const next = findNext();
  focus(next);
}

export function findNext() {
  const allTitles = document.querySelectorAll('.titlelink');
  const first = allTitles[0];
  if (!currentTitle.id) return first;
  const currentIndex = Array.from(allTitles).findIndex((a) => getId(a) == currentTitle.id);
  if (currentIndex === -1) return first;
  return allTitles[currentIndex + 1] || currentTitle.link; // if +1 doesn't exist, it's bottom
}
