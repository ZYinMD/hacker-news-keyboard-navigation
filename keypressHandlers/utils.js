export const currentTitle = {
  id: '',
  link: null,
};

export function focus(titleLink) {
  titleLink.focus();
  currentTitle.link = titleLink;
  currentTitle.id = getId(titleLink);
}

export function getId(titleLink) {
  return titleLink.parentNode.parentNode.id;
}
