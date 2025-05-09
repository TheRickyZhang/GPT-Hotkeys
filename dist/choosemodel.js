/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/choosemodel.ts":
/*!****************************!*\
  !*** ./src/choosemodel.ts ***!
  \****************************/
/***/ (function() {


// choosemodel.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let currentModel = 1;
let modelCount = 5; // 1-indexed
function findToggle() {
    return document.querySelector('button[data-testid="model-switcher-dropdown-button"]');
}
function openDropdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const btn = findToggle();
        if (!btn)
            return false;
        btn.focus();
        for (const ev of ["pointerdown", "mousedown", "pointerup", "click"])
            btn.dispatchEvent(new MouseEvent(ev, { bubbles: true, cancelable: true }));
        yield new Promise((r) => setTimeout(r, 50));
        return true;
    });
}
function chooseModel(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield openDropdown()))
            return;
        const items = Array.from(document.querySelectorAll('[role="menuitem"],[role="menuitemradio"]'));
        const t = items[n - 1];
        if (t)
            t.click();
    });
}
window.addEventListener("keydown", (ev) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(ev.ctrlKey && ev.shiftKey))
        return;
    ev.preventDefault();
    if (/^Digit[1-9]$/.test(ev.code)) {
        const idx = Number(ev.code.slice(5));
        yield chooseModel(idx);
        currentModel = idx;
    }
    else if (ev.code === "ArrowLeft" || ev.code === "ArrowUp") {
        const next = Math.min(currentModel - 1, modelCount);
        yield chooseModel(next);
        currentModel = next;
    }
    else if (ev.code === "ArrowRight" || ev.code === "ArrowDown") {
        const prev = Math.max(currentModel + 1, 1);
        yield chooseModel(prev);
        currentModel = prev;
    }
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/choosemodel.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=choosemodel.js.map