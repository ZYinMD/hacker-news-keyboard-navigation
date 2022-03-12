import { currentFocus } from './utils.js';

export function onSpace() {
  const theCommentsLink = document.querySelector(`a[href="item?id=${currentFocus.id}"]`);
  theCommentsLink.target = '_blank';
  theCommentsLink.click();
  theCommentsLink.target = '_self';
}
