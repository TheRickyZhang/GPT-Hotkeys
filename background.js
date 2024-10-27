// background.js

// Handle keyboard shortcuts
chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command received: ${command}`);
    
    if (command === "gpt-quickedit") { 
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["quickedit.js"]
          }, () => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              console.log("quickedit successful");
            }
          });
        }
      });
    } else if(command === "gpt-quickinsert") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["quickinsert.js"]
                }, () => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                } else {
                    console.log("quickedit successful");
                }
                });
            }
        });
    } else if(command === "gpt-quicksend") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["quicksend.js"]
                }, () => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                } else {
                    console.log("quickedit successful");
                }
                });
            }
        });

    } else if(command === "gpt-quickcancel") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["quickcancel.js"]
                }, () => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                } else {
                    console.log("quickedit successful");
                }
                });
            }
        });
    }
  });
  