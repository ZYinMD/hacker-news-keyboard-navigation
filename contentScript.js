/* inject our script tag unless currently in a page with comments */
if (!location.search.includes('id=')) {
  const scriptTag = document.createElement('script');
  scriptTag.src = chrome.runtime.getURL('scriptTag.js');
  scriptTag.type = 'module';
  document.head.appendChild(scriptTag);
}
