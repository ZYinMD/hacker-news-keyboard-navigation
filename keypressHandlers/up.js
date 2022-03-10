import { focus, getId, states } from './utils.js';

export function onUp() {
  const previousEntry = findPrevious();
  focus(previousEntry);
}

function findPrevious() {
  const allEntries = document.querySelectorAll('.titlelink');
  const last = allEntries[allEntries.length - 1];
  if (!states.currentEntryId) return last;
  const currentIndex = Array.from(allEntries).findIndex((a) => getId(a) == states.currentEntryId);
  if (currentIndex === -1) return last;
  return allEntries[currentIndex - 1] || last;
}
