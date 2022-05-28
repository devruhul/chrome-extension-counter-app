const extensionIconClickListener = () => {
    chrome.tabs.create({ url: '/build/index.html' });
 };
         
 chrome.browserAction.onClicked.addListener(extensionIconClickListener);