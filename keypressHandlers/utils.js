export const states = {
  currentEntryId: '',
};

export function focus(a) {
  a.focus();
  states.currentEntryId = parseNumber(a.href);
}

function parseNumber(string) {
  return string.match(/\d+/)[0];
}
