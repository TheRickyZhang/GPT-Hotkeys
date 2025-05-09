// content.ts
const runScript = () => {
  const btns = document.querySelectorAll<HTMLButtonElement>(
    'button[aria-label="Edit message"]'
  );
  const last = btns[btns.length - 1];
  last ? last.click() : console.log("Edit button not found!");
};

document.readyState === "complete"
  ? runScript()
  : window.addEventListener("load", runScript);
