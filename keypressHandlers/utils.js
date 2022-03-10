export const states = {
  currentEntryId: '',
  currentEntry: null,
};

export function focus(a) {
  a.focus();
  states.currentEntryId = a.parentNode.parentNode.id;
  states.currentEntry = a;
}

function parseNumber(string) {
  return string.match(/\d+/)[0];
}
