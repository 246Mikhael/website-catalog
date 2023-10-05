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

/***/ "./public/js/modules/arrsOfData.js":
/*!*****************************************!*\
  !*** ./public/js/modules/arrsOfData.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categories: () => (/* binding */ categories),\n/* harmony export */   categsImages: () => (/* binding */ categsImages),\n/* harmony export */   subcategsImages: () => (/* binding */ subcategsImages)\n/* harmony export */ });\nlet categsImages = [\r\n    \"../images/icons/news.png\",\r\n    \"../images/icons/sport.png\",\r\n    \"../images/icons/hobby.png\",\r\n    \"../images/icons/learning.png\"\r\n  ];\r\n  \r\n  let subcategsImages = {\r\n    1: [\r\n      \"../images/icons/politic.png\",\r\n      \"../images/icons/criminal.png\",\r\n      \"../images/icons/economic.png\",\r\n      \"../images/icons/technology.png\"\r\n    ],\r\n    2: [\r\n      \"../images/icons/football.png\",\r\n      \"../images/icons/ice_hockey.png\",\r\n      \"../images/icons/basketball.png\",\r\n      \"../images/icons/fighting.png\"\r\n    ],\r\n    3: [\r\n      \"../images/icons/computer_games.png\",\r\n      \"../images/icons/table_games.png\",\r\n      \"../images/icons/creativity.png\",\r\n      \"../images/icons/traveling.png\"\r\n    ],\r\n    4: [\r\n      \"../images/icons/programming.png\",\r\n      \"../images/icons/school.png\",\r\n      \"../images/icons/music.png\",\r\n      \"../images/icons/drawing.png\"\r\n    ]\r\n  };\r\n\r\n  let categories = [\r\n    { name:'news',\r\n      values: [ \r\n        'политика', \r\n        'криминал', \r\n        'экономика', \r\n        'технологии' \r\n      ] \r\n    },\r\n    { name:'sport',\r\n      values: [ \r\n        'футбол', \r\n        'хоккей', \r\n        'баскетбол', \r\n        'боевые искусства',\r\n        'другое' \r\n      ] \r\n    },\r\n    { name:'hobby',\r\n      values: [ \r\n        'компьютерные игры', \r\n        'настольные игры', \r\n        'творчество', \r\n        'путешествия' \r\n      ] \r\n    },\r\n    { name:'learning',\r\n      values: [ \r\n        'кодинг', \r\n        'школьная программа', \r\n        'музыка', \r\n        'рисование' \r\n      ] \r\n    }\r\n];\r\n\r\n\n\n//# sourceURL=webpack://website-catalog/./public/js/modules/arrsOfData.js?");

/***/ }),

/***/ "./public/js/modules/functions.js":
/*!****************************************!*\
  !*** ./public/js/modules/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkInputs: () => (/* binding */ checkInputs),\n/* harmony export */   checkValid: () => (/* binding */ checkValid),\n/* harmony export */   deleteFleshMessage: () => (/* binding */ deleteFleshMessage),\n/* harmony export */   getCateg: () => (/* binding */ getCateg),\n/* harmony export */   getDomain: () => (/* binding */ getDomain),\n/* harmony export */   getFirstNameByChar: () => (/* binding */ getFirstNameByChar),\n/* harmony export */   getLiteralNum: () => (/* binding */ getLiteralNum),\n/* harmony export */   getSubCateg: () => (/* binding */ getSubCateg),\n/* harmony export */   getUniqFirstChar: () => (/* binding */ getUniqFirstChar),\n/* harmony export */   isValidUrl: () => (/* binding */ isValidUrl),\n/* harmony export */   sortSites: () => (/* binding */ sortSites),\n/* harmony export */   translater: () => (/* binding */ translater)\n/* harmony export */ });\n\r\nlet words = {\r\n    'news': 'новости',\r\n    'sport': 'спорт',\r\n    'hobby': 'хобби',\r\n    'learning': 'обучение',\r\n    'politic': 'политика',\r\n    'economic': 'экономика',\r\n    'technology': 'технологии',\r\n    'criminal': 'криминал',\r\n    'football': 'футбол',\r\n    'ice_hockey': 'хоккей',\r\n    'basketball': 'баскетбол',\r\n    'fighting': 'боевые искусства',\r\n    'another': 'другое',\r\n    'computer_games': 'компьютерные игры',\r\n    'table_games': 'настольные игры',\r\n    'creativity': 'творчество',\r\n    'traveling': 'путешествия',\r\n    'programming': 'кодинг',\r\n    'school': 'школьная программа',\r\n    'music': 'музыка',\r\n    'drawing': 'рисование',\r\n}\r\n\r\n\r\nfunction translater (word) {\r\n    let word1;\r\n    if ( /[a-zA-Z]/.test(word) ) {\r\n       word1 = words[word];\r\n    } else {\r\n       word1 = Object.keys(words).find(key => words[key] === word);\r\n    }\r\n    return word1;\r\n}\r\n\r\n\r\nfunction getCateg(arr) {\r\n    let arr1 = [];\r\n    for(let elem of arr){\r\n      if( !arr1.includes(elem.category) ) {\r\n         arr1.push(elem.category);\r\n        }\r\n     }\r\n     return arr1;\r\n } \r\n\r\n\r\nfunction getSubCateg(arr) {\r\n       let arr1 = [];\r\n       for (let elem of arr) {\r\n         if( !arr1.includes(elem.subCategory) ) {\r\n            arr1.push(elem.subCategory);\r\n           }\r\n        }\r\n        return arr1;\r\n  } \r\n\r\n\r\nfunction getDomain(url) {\r\n    let a = new URL(url);\r\n    let domain = a.hostname;\r\n    return domain;\r\n}\r\n\r\n\r\nfunction checkInputs (val1, val2, elem){\r\n    if (val1.length && val2) {\r\n      elem.classList.remove('disable-button');\r\n    } else {\r\n      elem.classList.add('disable-button');\r\n    }\r\n  }\r\n\r\n  \r\nfunction checkValid(obj, elem) {\r\n  \r\n      if ( Object.keys(obj).length === 4 ) {\r\n          elem.classList.remove('disable-button');\r\n      } else {\r\n          elem.classList.add('disable-button');\r\n      }\r\n  }\r\n\r\n  \r\n function isValidUrl(url) {\r\n    var obj = /^https?:\\/\\//i;\r\n    return obj.test(url);\r\n  }\r\n\r\n\r\n\r\nfunction getLiteralNum (num) {\r\n\r\n  let str;\r\n\r\n  if (num == 1){\r\n    str = 'first-';\r\n  }\r\n  if (num == 2){\r\n    str = 'second-';\r\n  }\r\n  if (num == 3){\r\n    str = 'third-';\r\n  }\r\n  if (num == 4){\r\n    str = 'fourth-';\r\n  }\r\n  return str;\r\n}\r\n\r\n\r\nfunction getFirstNameByChar(arr, char) {\r\n  let result;\r\n  for (let elem of arr) {\r\n    if (elem[0] === char) {\r\n      result = elem;\r\n      break;\r\n    } \r\n  }\r\n  return result;\r\n}\r\n\r\n\r\nfunction getUniqFirstChar(arr) {\r\n  let arr1 = [];\r\n\r\n  for (let elem of arr) {\r\n    if (arr1.indexOf(elem[0]) == -1){\r\n      arr1.push(elem[0])\r\n    }\r\n  } return arr1;\r\n}\r\n\r\n\r\nfunction deleteFleshMessage() {\r\n  let messageDiv = document.querySelector('#login-message') ||\r\n       document.querySelector('#edit-site-message');\r\n  let num;\r\n  if (messageDiv) {\r\n    if(messageDiv.textContent === \"для завершения регистрации добавьте сайт!\"){\r\n      num = 10000;\r\n    } else {\r\n      num = 5000;\r\n    }\r\n      setTimeout( function() {\r\n          messageDiv.parentElement.removeChild(messageDiv)\r\n      }, num)\r\n  }\r\n}\r\n\r\n\r\nfunction sortSites (arr) {\r\n  let arrNums = [];\r\n  let arrCyrrillic = [];\r\n  let arrLatin = [];\r\n      for ( let obj of arr) {\r\n      if (!isNaN(parseInt(obj.name))){\r\n         arrNums.push(obj);\r\n      }\r\n      if (/[а-яА-ЯЁё]/.test(obj.name)) {\r\n          arrCyrrillic.push(obj);\r\n      }\r\n      \r\n      if (/[a-zA-Z]/.test(obj.name)) {\r\n          arrLatin.push(obj);\r\n      } \r\n      \r\n  }\r\n  arrNums.sort((a,b) => Number(a.name[0]) - Number(b.name[0]));\r\n  arrLatin.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));\r\n  arrCyrrillic.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));\r\n\r\n  let result = arrNums.concat(arrCyrrillic, arrLatin);\r\n\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://website-catalog/./public/js/modules/functions.js?");

/***/ }),

/***/ "./public/js/script1.js":
/*!******************************!*\
  !*** ./public/js/script1.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./public/js/modules/functions.js\");\n/* harmony import */ var _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/arrsOfData.js */ \"./public/js/modules/arrsOfData.js\");\n\r\n\r\n\r\n  \r\nlet imagesWrap = document.querySelector('#images-wrap');\r\nlet imagesWrapSubcateg = document.querySelector('#images-wrap-subcateg');\r\n  \r\n  \r\ncreateSubcategImages(\r\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.getLiteralNum,  \r\n  imagesWrapSubcateg, \r\n  _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.subcategsImages, \r\n  1,\r\n  _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.categories[0].values\r\n);\r\n  \r\nlet firstImageWrap;\r\nlet currentWrap;\r\nlet categNameElem;\r\nlet initialCategNameElem;\r\n  \r\nfor (let i = 1; i <= 4; i++) {\r\n    \r\n  let str = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.getLiteralNum)(i);\r\n  let wrap = document.createElement('div');\r\n  wrap.className = \"img-wrap\";\r\n    \r\n  if (i === 1) {\r\n    wrap.classList.add(\"initial-img-wrap\");\r\n    categNameElem = document.createElement('div');\r\n    categNameElem.innerHTML = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.translater)(_modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.categories[0].name);\r\n    categNameElem.id = 'initial-name';\r\n    wrap.appendChild(categNameElem);\r\n    firstImageWrap = wrap;\r\n    initialCategNameElem = categNameElem;\r\n  }\r\n  \r\n  wrap.id = `${str}img-wrap`;\r\n  wrap.dataset.num = i;\r\n    \r\n   \r\n  \r\n  wrap.addEventListener('mouseover', function(event) {\r\n      \r\n    if (currentWrap) {\r\n      currentWrap.classList.remove('increased-img-wrap');\r\n    }\r\n\r\n    currentWrap = event.target.closest('.img-wrap');\r\n    firstImageWrap.classList.remove('initial-img-wrap');\r\n    currentWrap.classList.add('increased-img-wrap');\r\n  \r\n      \r\n    if (initialCategNameElem) {\r\n      initialCategNameElem.remove();\r\n    }\r\n      \r\n    if (categNameElem) {\r\n      categNameElem.remove();\r\n    }\r\n  \r\n    categNameElem = document.createElement('div');\r\n    categNameElem.innerHTML = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.translater)(_modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.categories[i - 1].name);\r\n    categNameElem.className = 'categ-name';\r\n    wrap.appendChild(categNameElem);\r\n      \r\n    imagesWrapSubcateg.innerHTML = '';\r\n  \r\n    createSubcategImages(\r\n      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.getLiteralNum,\r\n      imagesWrapSubcateg, \r\n      _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.subcategsImages, \r\n      this.dataset.num,\r\n      _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.categories[i - 1].values\r\n      )\r\n    })\r\n  \r\n    wrap.addEventListener('mouseout', function(event) {\r\n      \r\n      if ( event.relatedTarget.classList.contains('img-wrap') ||\r\n          event.relatedTarget.classList.contains('login-image')) {\r\n         currentWrap.classList.remove('increased-img-wrap');\r\n         wrap.removeChild(categNameElem);\r\n      }   \r\n    })\r\n  \r\n    imagesWrap.appendChild(wrap);   \r\n  \r\n    let image = document.createElement('img');\r\n    image.className = 'login-image';\r\n    image.id = `${str}login-image`\r\n    image.src = _modules_arrsOfData_js__WEBPACK_IMPORTED_MODULE_1__.categsImages[i - 1];\r\n    wrap.appendChild(image);\r\n}  \r\n  \r\n  \r\nfunction createSubcategImages(\r\n  func1, \r\n  parent, \r\n  obj, \r\n  num, \r\n  subcategNamesArr) {\r\n    \r\n  for ( let i = 0; i < 4; i++) {\r\n      \r\n    let str = func1(i + 1)\r\n  \r\n    let wrap = document.createElement('div');\r\n    wrap.className = 'img-wrap-subcateg';\r\n    wrap.id = `${str}img-wrap-subcateg`;\r\n  \r\n    let nameSubcategElem;\r\n  \r\n    wrap.addEventListener('mouseover', function() {\r\n      wrap.classList.add('increased-img-wrap-subcateg');\r\n       nameSubcategElem = document.createElement('div');\r\n       nameSubcategElem.className = 'subcateg-name';\r\n       nameSubcategElem.innerHTML = subcategNamesArr[i];\r\n       wrap.appendChild(nameSubcategElem);\r\n    });\r\n  \r\n    wrap.addEventListener('mouseout', function() {\r\n      wrap.classList.remove('increased-img-wrap-subcateg');\r\n      wrap.removeChild(nameSubcategElem);\r\n    })\r\n\r\n    parent.appendChild(wrap);\r\n  \r\n    let image = document.createElement('img');\r\n    image.className = 'login-image-subcateg';\r\n    image.id = `${str}loginImage`;\r\n    let arr = obj[num]\r\n    image.src = arr[i];\r\n    wrap.appendChild(image);\r\n  }\r\n}\n\n//# sourceURL=webpack://website-catalog/./public/js/script1.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/script1.js");
/******/ 	
/******/ })()
;