## Background:

Hacker News has a unique feature that reddit and other forums don't have - the "hide" button.

In theory, this enables such a workflow - scan through the titles, click "hide" on the ones you won't read. The benefit is when you come back later next time, you won't have to scan through those titles again.

This sounds great, except nobody does it, because it's too many clicks.

We aim to solve this with keyboard:

## Use:

[Install](https://chrome.google.com/webstore/detail/hacker-news-keyboard-navi/minojogeicmpnoahlmaihajdgkojnjdn) this chrome extension, then on Hacker News:

`↑` `↓` : go up and down the list

`←` : not interested / hide

`→` : open link (background new tab)

`Enter` : open link (foreground new tab)

`Space` : open comments

## Customize / fork:

You don't need to know anything about chrome extensions to change the code. All you need is to read `src/scriptTag.js`.

There's no compiling / bundling, all files in `src` are used by the browser as is.

After reading `src/scriptTag.js`, if you feel like changing something, here's what you need to do:

1. Clone this repo.

1. Visit `chrome://extensions/`.

1. Uninstall this extension (assuming you have installed it).

1. Turn on "Developer mode" on the top right.

1. Click "Load unpacked" on the top left, go the repo you just cloned, select the `/src` folder.

1. Now you're running a local version of the extension. All code changes will reflect.

> Note: in most cases, changes take effect on reloading Hacker News, because the script tag is injected on page load. If you changed things outside of the script tag (i.e. extension related file), you may need to click the ⟳ button on `chrome://extensions/` to make it effective.
