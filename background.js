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
