export const currentFocus = {
  id: '',
  anchor: null,
};

export function focus(anchor) {
  anchor.focus();
  currentFocus.anchor = anchor;
  currentFocus.id = getId(anchor);
}

export function getId(anchor) {
  return anchor.parentNode.parentNode.id;
}
