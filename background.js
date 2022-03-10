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

chrome.runtime.onMessage.addListener((message, sender) => {
  if (sender.id !== chrome.runtime.id) return;
  const { type, url } = message;
  if (type === 'open_in_background_tab') {
    chrome.tabs.create({ url, active: false });
  }
});
