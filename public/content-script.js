document.body.style.backgroundColor = 'orange';

window.chrome.action.onClicked.addListener((tab) => {
    window.chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
    });
  });
  