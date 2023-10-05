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

/***/ "./public/js/modules/functions.js":
/*!****************************************!*\
  !*** ./public/js/modules/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkInputs: () => (/* binding */ checkInputs),\n/* harmony export */   checkValid: () => (/* binding */ checkValid),\n/* harmony export */   deleteFleshMessage: () => (/* binding */ deleteFleshMessage),\n/* harmony export */   getCateg: () => (/* binding */ getCateg),\n/* harmony export */   getDomain: () => (/* binding */ getDomain),\n/* harmony export */   getFirstNameByChar: () => (/* binding */ getFirstNameByChar),\n/* harmony export */   getLiteralNum: () => (/* binding */ getLiteralNum),\n/* harmony export */   getSubCateg: () => (/* binding */ getSubCateg),\n/* harmony export */   getUniqFirstChar: () => (/* binding */ getUniqFirstChar),\n/* harmony export */   isValidUrl: () => (/* binding */ isValidUrl),\n/* harmony export */   sortSites: () => (/* binding */ sortSites),\n/* harmony export */   translater: () => (/* binding */ translater)\n/* harmony export */ });\n\r\nlet words = {\r\n    'news': 'новости',\r\n    'sport': 'спорт',\r\n    'hobby': 'хобби',\r\n    'learning': 'обучение',\r\n    'politic': 'политика',\r\n    'economic': 'экономика',\r\n    'technology': 'технологии',\r\n    'criminal': 'криминал',\r\n    'football': 'футбол',\r\n    'ice_hockey': 'хоккей',\r\n    'basketball': 'баскетбол',\r\n    'fighting': 'боевые искусства',\r\n    'another': 'другое',\r\n    'computer_games': 'компьютерные игры',\r\n    'table_games': 'настольные игры',\r\n    'creativity': 'творчество',\r\n    'traveling': 'путешествия',\r\n    'programming': 'кодинг',\r\n    'school': 'школьная программа',\r\n    'music': 'музыка',\r\n    'drawing': 'рисование',\r\n}\r\n\r\n\r\nfunction translater (word) {\r\n    let word1;\r\n    if ( /[a-zA-Z]/.test(word) ) {\r\n       word1 = words[word];\r\n    } else {\r\n       word1 = Object.keys(words).find(key => words[key] === word);\r\n    }\r\n    return word1;\r\n}\r\n\r\n\r\nfunction getCateg(arr) {\r\n    let arr1 = [];\r\n    for(let elem of arr){\r\n      if( !arr1.includes(elem.category) ) {\r\n         arr1.push(elem.category);\r\n        }\r\n     }\r\n     return arr1;\r\n } \r\n\r\n\r\nfunction getSubCateg(arr) {\r\n       let arr1 = [];\r\n       for (let elem of arr) {\r\n         if( !arr1.includes(elem.subCategory) ) {\r\n            arr1.push(elem.subCategory);\r\n           }\r\n        }\r\n        return arr1;\r\n  } \r\n\r\n\r\nfunction getDomain(url) {\r\n    let a = new URL(url);\r\n    let domain = a.hostname;\r\n    return domain;\r\n}\r\n\r\n\r\nfunction checkInputs (val1, val2, elem){\r\n    if (val1.length && val2) {\r\n      elem.classList.remove('disable-button');\r\n    } else {\r\n      elem.classList.add('disable-button');\r\n    }\r\n  }\r\n\r\n  \r\nfunction checkValid(obj, elem) {\r\n  \r\n      if ( Object.keys(obj).length === 4 ) {\r\n          elem.classList.remove('disable-button');\r\n      } else {\r\n          elem.classList.add('disable-button');\r\n      }\r\n  }\r\n\r\n  \r\n function isValidUrl(url) {\r\n    var obj = /^https?:\\/\\//i;\r\n    return obj.test(url);\r\n  }\r\n\r\n\r\n\r\nfunction getLiteralNum (num) {\r\n\r\n  let str;\r\n\r\n  if (num == 1){\r\n    str = 'first-';\r\n  }\r\n  if (num == 2){\r\n    str = 'second-';\r\n  }\r\n  if (num == 3){\r\n    str = 'third-';\r\n  }\r\n  if (num == 4){\r\n    str = 'fourth-';\r\n  }\r\n  return str;\r\n}\r\n\r\n\r\nfunction getFirstNameByChar(arr, char) {\r\n  let result;\r\n  for (let elem of arr) {\r\n    if (elem[0] === char) {\r\n      result = elem;\r\n      break;\r\n    } \r\n  }\r\n  return result;\r\n}\r\n\r\n\r\nfunction getUniqFirstChar(arr) {\r\n  let arr1 = [];\r\n\r\n  for (let elem of arr) {\r\n    if (arr1.indexOf(elem[0]) == -1){\r\n      arr1.push(elem[0])\r\n    }\r\n  } return arr1;\r\n}\r\n\r\n\r\nfunction deleteFleshMessage() {\r\n  let messageDiv = document.querySelector('#login-message') ||\r\n       document.querySelector('#edit-site-message');\r\n  let num;\r\n  if (messageDiv) {\r\n    if(messageDiv.textContent === \"для завершения регистрации добавьте сайт!\"){\r\n      num = 10000;\r\n    } else {\r\n      num = 5000;\r\n    }\r\n      setTimeout( function() {\r\n          messageDiv.parentElement.removeChild(messageDiv)\r\n      }, num)\r\n  }\r\n}\r\n\r\n\r\nfunction sortSites (arr) {\r\n  let arrNums = [];\r\n  let arrCyrrillic = [];\r\n  let arrLatin = [];\r\n      for ( let obj of arr) {\r\n      if (!isNaN(parseInt(obj.name))){\r\n         arrNums.push(obj);\r\n      }\r\n      if (/[а-яА-ЯЁё]/.test(obj.name)) {\r\n          arrCyrrillic.push(obj);\r\n      }\r\n      \r\n      if (/[a-zA-Z]/.test(obj.name)) {\r\n          arrLatin.push(obj);\r\n      } \r\n      \r\n  }\r\n  arrNums.sort((a,b) => Number(a.name[0]) - Number(b.name[0]));\r\n  arrLatin.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));\r\n  arrCyrrillic.sort((a, b) => a.name[0].toLowerCase().localeCompare(b.name[0].toLowerCase()));\r\n\r\n  let result = arrNums.concat(arrCyrrillic, arrLatin);\r\n\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://website-catalog/./public/js/modules/functions.js?");

/***/ }),

/***/ "./public/js/script5.js":
/*!******************************!*\
  !*** ./public/js/script5.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./public/js/modules/functions.js\");\n\r\n\r\nlet nameEditingSite = document.querySelectorAll('.name-editing-site');\r\nlet descrEditingSite = document.querySelectorAll('.descr-editing-site');\r\nlet linkEditingSite = document.querySelectorAll('.link-editing-site');\r\nlet divWithId = document.querySelectorAll('.div-with-id');\r\n\r\neditFieldsOfSite (\r\n  nameEditingSite, \r\n  divWithId, \r\n  'name');\r\n\r\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.deleteFleshMessage)();\r\n\r\nlet sitesWrap = document.querySelector('#sites-wrap')\r\nlet siteWraps = document.querySelectorAll('.site-wrap');\r\nlet firstCharacterNav;\r\nlet main = document.querySelector('main');\r\nlet names = [];\r\n\r\nlet elem;\r\nlet targetWrap;\r\nlet targetElem;\r\nlet targetElemName;\r\nlet selectValue;\r\nlet select;\r\n\r\n\r\nfor (let elem of siteWraps) {\r\n    \r\n    let nameOfSite = elem.querySelector('.name-editing-site');\r\n    let linkAndImageWrap = elem.querySelector('.sites-page-link-and-img-wrap')\r\n    let tooltipName = document.querySelector('#edit-name-tooltip');\r\n    let descrTooltip = elem.querySelector('#descr-tooltip');\r\n    let childrenOfWrap = elem.children;\r\n    \r\n\r\n    names.push(nameOfSite.innerHTML);\r\n     \r\n    elem.addEventListener('mouseover', function() {\r\n        elem.classList.add('site-wrap-active')\r\n    })\r\n    elem.addEventListener('mouseout', function() {\r\n        elem.classList.remove('site-wrap-active')\r\n    })\r\n\r\n\r\n    let deleteButton = elem.querySelector('.delete-site');\r\n    \r\n\r\n    deleteButton.addEventListener('mouseenter', function() {\r\n    \r\n       elem.classList.add('is-delete-wrap');\r\n     \r\n       for (let child of childrenOfWrap) {\r\n         if (!child.classList.contains('delete-site')){\r\n           child.classList.add('is-delete');\r\n          }\r\n       }\r\n    })\r\n\r\n    deleteButton.addEventListener('mouseout', function(event) {\r\n      elem.classList.remove('is-delete-wrap');\r\n     \r\n       for (let child of childrenOfWrap) {\r\n           child.classList.remove('is-delete');\r\n       }\r\n    })\r\n\r\n    addToolip(nameOfSite, tooltipName)\r\n    addToolip(linkAndImageWrap, tooltipName)\r\n\r\n}\r\n\r\n\r\nlet width = document.documentElement.offsetWidth;\r\n\r\nif (width < 980) {\r\n\r\n  for (let i = 0; i < 6; i++) {\r\n\r\n    let emptyWrap = document.createElement('div');\r\n    emptyWrap.classList.add('empty-wrap');\r\n    sitesWrap.appendChild(emptyWrap);\r\n }\r\n\r\n  firstCharacterNav = document.createElement('div');\r\n  firstCharacterNav.id = \"first-character\";\r\n  main.insertAdjacentElement('afterBegin', firstCharacterNav);\r\n\r\n\r\n  setCharacter(600, firstCharacterNav); \r\n     \r\n  window.addEventListener('scroll', function (){\r\n      setCharacter(200, firstCharacterNav);\r\n  })\r\n  \r\n  firstCharacterNav.addEventListener('click', createSelect);\r\n  \r\n  \r\n  document.onclick = function(event) {\r\n      if (event.target.id !== 'first-character' && \r\n      event.target.id !== 'first-char-select' &&\r\n      firstCharacterNav.contains(select)) {\r\n          firstCharacterNav.removeChild(select);\r\n          firstCharacterNav.innerHTML = targetElemName[0];\r\n          firstCharacterNav.addEventListener('click', createSelect);\r\n      }\r\n  } \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n//----------------------------------------------\r\n\r\nfunction addToolip(targetElem, toolt) {\r\n  \r\n  targetElem.addEventListener('mouseover', function() {\r\n      if (targetElem.classList.contains('name-editing-site')) {\r\n        this.classList.add('over-name');\r\n      } \r\n      if (targetElem.classList.contains('sites-page-link-and-img-wrap')) {\r\n        let description = targetElem.parentElement.querySelector('#descr-tooltip');\r\n        toolt.textContent = description.textContent;\r\n      }\r\n   })\r\n  \r\n\r\n  targetElem.addEventListener('mousemove', function(event) {\r\n\r\n    toolt.classList.add('tooltip-visible');\r\n    let xCoord = event.clientX;\r\n    let yCoord = event.clientY;\r\n    let scrollX = window.scrollX;\r\n    let scrollY = window.scrollY;\r\n\r\n    let tooltCoords = toolt.getBoundingClientRect();\r\n    let tooltCenterX = (tooltCoords.right - tooltCoords.left) / 2;\r\n\r\n    toolt.style.left = xCoord + scrollX - tooltCenterX + 20 +'px';\r\n    toolt.style.top = yCoord + scrollY + 100 + 'px';\r\n\r\n  \r\n   })\r\n  \r\n   targetElem.addEventListener('mouseout', function() {\r\n    this.classList.remove('over-name');\r\n    toolt.classList.remove('tooltip-visible');\r\n    toolt.textContent = 'двойной клик для редактирования';\r\n   })\r\n}\r\n\r\n\r\nfunction editFieldsOfSite (\r\n  divs, \r\n  ids, \r\n  field, \r\n  names) {\r\n\r\n  for (let i = 0; i < divs.length; i++) {\r\n \r\n     divs[i].addEventListener('dblclick', function() {\r\n         \r\n         let input = document.createElement('input');\r\n         let valueOfInput = this.innerHTML\r\n         input.value = valueOfInput;\r\n         input.classList.add('editing-field-input')\r\n         this.innerHTML = '';\r\n         input.addEventListener('mouseout', function() {\r\n            divs[i].textContent = this.value;\r\n            this.parentElement.removeChild(this);\r\n\r\n            if (valueOfInput != this.value) { \r\n              if (names) {\r\n                 window.location.href = \r\n                `/edit/?id=${ids[i].innerHTML}&field=${field}&curr=${this.value}&name=${names[i].innerHTML}`;\r\n              } else {\r\n                window.location.href = \r\n                `/edit/?id=${ids[i].innerHTML}&field=${field}&curr=${this.value}&name=${this.value}`; \r\n              }\r\n              \r\n            }   \r\n         })\r\n         this.parentElement.insertBefore(input, this)\r\n      })\r\n   }\r\n}\r\n\r\n\r\nfunction setCharacter(yPoint, elemWithChar){\r\n  \r\n    elem = document.elementFromPoint(200, yPoint);\r\n    targetWrap = elem.closest('.site-wrap'); \r\n    \r\n   if (targetWrap) {\r\n        targetElem = targetWrap.querySelector('.name-editing-site');\r\n        targetElemName = targetElem.innerHTML;\r\n        elemWithChar.innerHTML = targetElemName[0];\r\n   }\r\n}\r\n\r\nfunction createSelect() {\r\n  \r\n    firstCharacterNav.innerHTML = \"\";\r\n    select = document.createElement('select');\r\n    select.id = \"first-char-select\"; \r\n\r\n    let uniqFirstChars = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.getUniqFirstChar)(names);\r\n\r\n    for ( let i = 0; i < uniqFirstChars.length; i++) {\r\n      \r\n      let option = document.createElement('option');\r\n      option.value = uniqFirstChars[i][0];\r\n      option.innerHTML = uniqFirstChars[i];\r\n\r\n      if (uniqFirstChars[i] === targetElemName[0]) {\r\n        option.selected = true;\r\n      }\r\n     \r\n      select.appendChild(option);\r\n    } \r\n\r\n     \r\n    select.addEventListener('change', function() {\r\n\r\n      firstCharacterNav.removeChild(select);\r\n      firstCharacterNav.innerHTML = this.value;\r\n        targetElemName = this.value;\r\n        selectValue = this.value;      \r\n        \r\n        let name =  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.getFirstNameByChar)(names, this.value);\r\n        let nodeListOfDivsName = document.querySelectorAll('.name-editing-site');\r\n\r\n       let yCoord;\r\n\r\n        for ( let elem of nodeListOfDivsName){\r\n\r\n          if (elem.innerHTML === name) {\r\n              yCoord = elem.getBoundingClientRect().top;\r\n              window.scrollBy({\r\n              top: yCoord - 100,\r\n              left: 0,\r\n              behavior: \"smooth\"\r\n            });\r\n          }\r\n        }\r\n        \r\n        firstCharacterNav.addEventListener('click', createSelect)\r\n    })\r\n    firstCharacterNav.appendChild(select);\r\n    firstCharacterNav.removeEventListener('click', createSelect);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://website-catalog/./public/js/script5.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/script5.js");
/******/ 	
/******/ })()
;