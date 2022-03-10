export const states = {
  currentEntryId: '',
  currentEntry: null,
};

export function focus(a) {
  a.focus();
  states.currentEntry = a;
  states.currentEntryId = getId(a);
}

export function getId(a) {
  return a.parentNode.parentNode.id;
}
