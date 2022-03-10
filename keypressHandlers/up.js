import { focus, getId, currentTitle } from './utils.js';

export function onUp() {
  const previous = findPrevious();
  focus(previous);
}

function findPrevious() {
  const allTitles = document.querySelectorAll('.titlelink');
  const last = allTitles[allTitles.length - 1];
  if (!currentTitle.id) return last;
  const currentIndex = Array.from(allTitles).findIndex((a) => getId(a) == currentTitle.id);
  if (currentIndex === -1) return last;
  return allTitles[currentIndex - 1] || currentTitle.node; // if -1 doesn't exist, it's already top
}
