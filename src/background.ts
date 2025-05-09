const cmdToFile = {
  "gpt-quickedit": "quickedit.js",
  "gpt-quickinsert": "quickinsert.js",
  "gpt-quicksend": "quicksend.js",
  "gpt-quickcancel": "quickcancel.js",
} as const;

chrome.commands.onCommand.addListener(async (command) => {
  console.log("Command received:", command);

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  if (command in cmdToFile) {
    const file = cmdToFile[command as keyof typeof cmdToFile];
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [file],
      });
      console.log(`→ injected ${file}`);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.warn(`Unknown command: ${command}`);
  }
});
