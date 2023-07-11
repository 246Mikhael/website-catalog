/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/client.js":
/*!*****************************!*\
  !*** ./public/js/client.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _translater_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translater.js */ \"./translater.js\");\n\r\n\r\n\r\nlet categSelect = document.querySelector(\"#categ\");\r\nlet subCategSelect = document.querySelector(\"#subCateg\");\r\n\r\nlet categories = [\r\n    {name: 'news', values:['политика', 'криминал', 'экономика', 'технологии']},\r\n    {name:'sport',values: ['футбол', 'хоккей', 'баскетбол', 'боевые искусства','другое']},\r\n    {name:'hobby', values: ['компьютерные игры', 'настольные игры', 'творчество', 'путешествия']},\r\n    {name:'learning',values: ['программирование', 'школьная программа', 'музыка', 'рисование']},\r\n];\r\n\r\n\r\nfor(categ of categories){\r\n    let opt = document.createElement('option');\r\n    opt.value = (0,_translater_js__WEBPACK_IMPORTED_MODULE_0__.translater)(categ.name);\r\n    opt.innerHTML = (0,_translater_js__WEBPACK_IMPORTED_MODULE_0__.translater)(categ.name);\r\n    categSelect.appendChild(opt);\r\n};\r\n\r\nfor(subCateg of categories[0].values){\r\n    let opt = document.createElement('option');\r\n    opt.value = subCateg;\r\n    opt.innerHTML = subCateg;\r\n    subCategSelect.appendChild(opt);\r\n};\r\n\r\ncategSelect.addEventListener('change', function () {\r\n    subCategSelect.innerHTML = \"\";\r\n\r\n    let index = categories.findIndex( item => item.name ===  (0,_translater_js__WEBPACK_IMPORTED_MODULE_0__.translater)(this.value));\r\n     \r\n    for(subCateg of categories[index].values){\r\n        let opt = document.createElement('option');\r\n        opt.value = subCateg;\r\n        opt.innerHTML = subCateg;\r\n        subCategSelect.appendChild(opt);\r\n    }\r\n});\r\n\r\n/*\r\nfunction translater (word){\r\n    if(/[a-zA-Z]/.test(word)){\r\n       if (word == 'news'){\r\n           word = 'новости'\r\n       }\r\n       if (word == 'sport'){\r\n           word = 'спорт'\r\n       }if (word == 'hobby'){\r\n           word = 'хобби'\r\n       }if (word == 'learning'){\r\n           word = 'обучение'\r\n       }\r\n    } else {\r\n        if (word == 'новости'){\r\n            word = 'news'\r\n        }\r\n        if (word == 'спорт'){\r\n            word = 'sport'\r\n        }if (word == 'хобби'){\r\n            word = 'hobby'\r\n        }if (word == 'обучение'){\r\n            word = 'learning'\r\n        }\r\n    }\r\n    return word;\r\n}\r\n\r\n*/\r\n\r\n\n\n//# sourceURL=webpack://website-catalog/./public/js/client.js?");

/***/ }),

/***/ "./translater.js":
/*!***********************!*\
  !*** ./translater.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   translater: () => (/* binding */ translater)\n/* harmony export */ });\n\r\n\r\nlet words = {\r\n    'news': 'новости',\r\n    'sport': 'спорт',\r\n    'hobby': 'хобби',\r\n    'learning': 'обучение',\r\n    'politic': 'политика',\r\n    'economic': 'экономика',\r\n    'technology': 'технологии',\r\n    'football': 'футбол',\r\n    'ice_hockey': 'хоккей',\r\n    'basketball': 'баскетбол',\r\n    'fighting': 'боевые искусства',\r\n    'another': 'другое',\r\n    'computer_games': 'компьютерные игры',\r\n    'table_games': 'настольные игры',\r\n    'creativity': 'творчество',\r\n    'traveling': 'путешествия',\r\n    'programming': 'программирование',\r\n    'school': 'школьная программа',\r\n    'music': 'музыка',\r\n    'drawing': 'рисование',\r\n}\r\n\r\nfunction translater (word){\r\n    if(/[a-zA-Z]/.test(word)){\r\n        word = words.word\r\n    } else {\r\n        word = Object.keys(words).find(key => words[key] === word);\r\n    }\r\n    return word;\r\n}\n\n//# sourceURL=webpack://website-catalog/./translater.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/client.js");
/******/ 	
/******/ })()
;