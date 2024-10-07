import { defineBackground } from 'wxt/sandbox';

export default defineBackground(() => {
  chrome.runtime.onMessage.addListener((message, sender) => {
    console.log("Background script received message: ", message); // Debugging
    if (message.action === 'openPopup') {
      console.log('Opening popup...'); // Debugging
      chrome.windows.create({
        url: chrome.runtime.getURL('popup.html'), // Ensure the URL is correctly generated
        type: 'popup',
        width: 400,
        height: 500,
        left: 100,
        top: 100
      }, (window) => {
        if (chrome.runtime.lastError) {
          console.error("Error creating popup:", chrome.runtime.lastError.message); // Error handling
        } else {
          console.log("Popup created successfully:", window); // Debugging
        }
      });
    }
  });
});