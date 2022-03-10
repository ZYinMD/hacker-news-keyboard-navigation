export const currentTitle = {
  id: '',
  node: null,
};

export function focus(a) {
  a.focus();
  currentTitle.node = a;
  currentTitle.id = getId(a);
}

export function getId(a) {
  return a.parentNode.parentNode.id;
}
