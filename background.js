chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.tabs.create({ url: 'https://foo.com' });
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://foo.com' });
});
