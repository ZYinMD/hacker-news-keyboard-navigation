/* inject our script tag unless currently in a page with comments */
if (
  !location.search.includes('id=') &&
  !location.pathname.includes('comments') && // this includes /newcomments and /bestcomments /noobcomments
  !location.pathname.includes('submit') &&
  !location.pathname.includes('leaders')
) {
  const scriptTag = document.createElement('script');
  scriptTag.src = chrome.runtime.getURL('scriptTag.js');
  scriptTag.type = 'module';
  document.head.appendChild(scriptTag);
}

const bc = new BroadcastChannel('hacker-news-keyboard-navigation');
bc.onmessage = (message) => {
  chrome.runtime.sendMessage(message.data);
};
