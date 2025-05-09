// choosemodel.ts

let currentModel = 1;
let modelCount = 5; // 1-indexed

function findToggle(): HTMLButtonElement | null {
  return document.querySelector(
    'button[data-testid="model-switcher-dropdown-button"]'
  );
}

async function openDropdown(): Promise<boolean> {
  const btn = findToggle();
  if (!btn) return false;
  btn.focus();
  for (const ev of ["pointerdown", "mousedown", "pointerup", "click"] as const)
    btn.dispatchEvent(new MouseEvent(ev, { bubbles: true, cancelable: true }));
  await new Promise((r) => setTimeout(r, 50));
  return true;
}

async function chooseModel(n: number) {
  if (!(await openDropdown())) return;
  const items = Array.from<HTMLElement>(
    document.querySelectorAll('[role="menuitem"],[role="menuitemradio"]')
  );
  const t = items[n - 1];
  if (t) t.click();
}

window.addEventListener("keydown", async (ev) => {
  if (!(ev.ctrlKey && ev.shiftKey)) return;
  ev.preventDefault();
  if (/^Digit[1-9]$/.test(ev.code)) {
    const idx = Number(ev.code.slice(5));
    await chooseModel(idx);
    currentModel = idx;
  } else if (ev.code === "ArrowLeft" || ev.code === "ArrowUp") {
    const next = Math.min(currentModel - 1, modelCount);
    await chooseModel(next);
    currentModel = next;
  } else if (ev.code === "ArrowRight" || ev.code === "ArrowDown") {
    const prev = Math.max(currentModel + 1, 1);
    await chooseModel(prev);
    currentModel = prev;
  }
});
