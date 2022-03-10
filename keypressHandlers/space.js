import { currentFocus } from './utils.js';

const bc = new BroadcastChannel('hacker-news-keyboard-navigation');
export function onSpace() {
  bc.postMessage({ type: 'open_in_background_tab', url: currentFocus.link.href });
}
