if (document.readyState === "complete") {
    runScript();
  } else {
    window.addEventListener("load", runScript);
  }
  
  function runScript() {
    console.log("HERE");
    const editButton = document.querySelector('button[aria-label="Edit message"]');
    if (editButton) {
      console.log("Button clicked! Yay!");
      editButton.click();
    } else {
      console.log("Edit button not found!");
    }
  }
  