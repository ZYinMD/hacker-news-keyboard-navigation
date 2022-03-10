import { focus, states } from './utils.js';

export function onDown() {
  const nextEntry = findNext();
  focus(nextEntry);
}

function findNext() {
  const allEntries = document.querySelectorAll('.titlelink');
  if (!states.currentEntryId) return allEntries[0];
  const currentIndex = Array.from(allEntries).findIndex((a) =>
    a.href?.endsWith?.(states.currentEntryId),
  );
  if (currentIndex === -1) return allEntries[0];
  return allEntries[currentIndex + 1] || allEntries[0];
}
