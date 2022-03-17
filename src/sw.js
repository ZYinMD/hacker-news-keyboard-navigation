chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: 'https://zyinmd.github.io/hacker-news-keyboard-navigation/help.html',
    });
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://zyinmd.github.io/hacker-news-keyboard-navigation/help.html' });
});

let lastOpened = '';
chrome.runtime.onMessage.addListener((message, sender) => {
  if (sender.id !== chrome.runtime.id) return;
  const { type, url } = message;
  if (type === 'open_in_background_tab') {
    if (url === lastOpened) return; // avoid multiple fires, which happens when 2+ tabs of hacker news is open, because bc will send message to all contentScripts.
    chrome.tabs.create({ url, active: false });
    lastOpened = url;
  }
});
