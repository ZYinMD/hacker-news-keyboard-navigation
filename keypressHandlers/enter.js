import { states } from './utils.js';

export function enter() {
  const commentsLink = document.querySelector(`a[href="item?id=${states.currentEntryId}"]`);
  commentsLink.target = '_blank';
  commentsLink.click();
  commentsLink.target = '_self';
}
