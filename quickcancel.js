const stopButton = document.querySelector('button[aria-label="Stop streaming"], button[data-testid="stop-button"]');

if (stopButton) {
    console.log("Stop button found. Clicking to stop streaming.");
    stopButton.click();
} else {
    console.log("Stop button not found.");
}