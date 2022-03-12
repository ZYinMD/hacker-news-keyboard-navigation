import { focus, getId, currentFocus } from './utils.js';

export function onUp() {
  const previous = findPrevious();
  focus(previous);
}

function findPrevious() {
  const allTitles = document.querySelectorAll('.titlelink');
  const last = allTitles[allTitles.length - 1];
  if (!currentFocus.id) return last;
  const currentIndex = Array.from(allTitles).findIndex((a) => getId(a) == currentFocus.id);
  if (currentIndex === -1) return last;
  return allTitles[currentIndex - 1] || currentFocus.anchor; // if -1 doesn't exist, it's already top
}
