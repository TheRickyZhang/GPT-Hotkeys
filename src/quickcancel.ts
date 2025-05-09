const stopButton = document.querySelector<HTMLButtonElement>(
  'button[aria-label="Stop streaming"],button[data-testid="stop-button"]'
);

console.log(
stopButton
    ? "Stop button found. Clicking to stop streaming."
    : "Stop button not found."
);
stopButton?.click();
