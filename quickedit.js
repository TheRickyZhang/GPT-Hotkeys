if (document.readyState === "complete") {
  runScript();
} else {
  window.addEventListener("load", runScript);
}

function runScript() {
  const editButton = document.querySelector('button[aria-label="Edit message"]');
  if (editButton) {
    editButton.click();
  } else {
    console.log("Edit button not found!");
  }
}
  