if (document.readyState === "complete") {
  runScript();
} else {
  window.addEventListener("load", runScript);
}

function runScript() {
  const editButtons = document.querySelectorAll('button[aria-label="Edit message"]');
  if (editButtons.length > 0) {
    editButtons[editButtons.length - 1].click();
  } else {
    console.log("Edit button not found!");
  }
}
