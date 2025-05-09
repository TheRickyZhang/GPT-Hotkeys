/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!****************************!*\
  !*** ./src/quickcancel.ts ***!
  \****************************/

const stopButton = document.querySelector('button[aria-label="Stop streaming"],button[data-testid="stop-button"]');
console.log(stopButton
    ? "Stop button found. Clicking to stop streaming."
    : "Stop button not found.");
stopButton === null || stopButton === void 0 ? void 0 : stopButton.click();

/******/ })()
;
//# sourceMappingURL=quickcancel.js.map