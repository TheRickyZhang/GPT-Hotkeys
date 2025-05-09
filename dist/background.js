/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cmdToFile = {
    "gpt-quickedit": "quickedit.js",
    "gpt-quickinsert": "quickinsert.js",
    "gpt-quicksend": "quicksend.js",
    "gpt-quickcancel": "quickcancel.js",
};
chrome.commands.onCommand.addListener((command) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Command received:", command);
    const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
    if (!(tab === null || tab === void 0 ? void 0 : tab.id))
        return;
    if (command in cmdToFile) {
        const file = cmdToFile[command];
        try {
            yield chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: [file],
            });
            console.log(`→ injected ${file}`);
        }
        catch (err) {
            console.error(err);
        }
    }
    else {
        console.warn(`Unknown command: ${command}`);
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
/******/ 	__webpack_modules__["./src/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map