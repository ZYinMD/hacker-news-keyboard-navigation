export const currentFocus = {
  id: '',
  link: null,
};

export function focus(titleLink) {
  titleLink.focus();
  currentFocus.link = titleLink;
  currentFocus.id = getId(titleLink);
}

export function getId(titleLink) {
  return titleLink.parentNode.parentNode.id;
}
