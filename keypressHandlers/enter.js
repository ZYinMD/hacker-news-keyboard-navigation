import { currentTitle } from './utils.js';

export function enter() {
  const commentsLink = document.querySelector(`a[href="item?id=${currentTitle.id}"]`);
  commentsLink.target = '_blank';
  commentsLink.click();
  commentsLink.target = '_self';
}
