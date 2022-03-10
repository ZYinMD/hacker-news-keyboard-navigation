import { focus, getId, states } from './utils.js';

export function onDown() {
  const nextEntry = findNext();
  focus(nextEntry);
}

export function findNext() {
  const allEntries = document.querySelectorAll('.titlelink');
  const first = allEntries[0];
  if (!states.currentEntryId) return first;
  const currentIndex = Array.from(allEntries).findIndex((a) => getId(a) == states.currentEntryId);
  if (currentIndex === -1) return first;
  return allEntries[currentIndex + 1] || first;
}
