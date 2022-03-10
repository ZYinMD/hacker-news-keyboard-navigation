const scriptTag = document.createElement('script');
scriptTag.src = chrome.runtime.getURL('scriptTag.js');
scriptTag.type = 'module';
document.head.appendChild(scriptTag);
