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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./src/modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/plansRepairModal */ \"./src/modules/plansRepairModal.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ \"./src/modules/mask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formula */ \"./src/modules/formula.js\");\n/* harmony import */ var _modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/plansRepairSlaider */ \"./src/modules/plansRepairSlaider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_mask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_formula__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/contacts.js":
/*!*********************************!*\
  !*** ./src/modules/contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow')\r\n    const phone = document.querySelector('.header-contacts__phone-number-accord a')\r\n    let count = 0\r\n    \r\n    arrow.addEventListener('click', () => {\r\n        if (count == 0) {\r\n            count = 1\r\n            phone.style.opacity = 1\r\n            phone.style.marginTop = 20 + 'px'\r\n            arrow.style.transform = `rotate(180deg)`\r\n        } else if (count == 1) {\r\n            count = 0\r\n            phone.style.opacity = 0\r\n            phone.style.marginTop = 0\r\n            arrow.style.transform = `rotate(0deg)`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack://layout/./src/modules/contacts.js?");

/***/ }),

/***/ "./src/modules/formula.js":
/*!********************************!*\
  !*** ./src/modules/formula.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formula = () => {\r\n\r\n    const itemActive = document.querySelectorAll('.formula-item')\r\n\r\n    itemActive.forEach(function (item) {\r\n        item.addEventListener('mouseover', function() {\r\n            this.classList.add('active-item')\r\n        })\r\n        item.addEventListener(\"mouseout\",function() {\r\n            this.classList.remove('active-item')\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);\n\n//# sourceURL=webpack://layout/./src/modules/formula.js?");

/***/ }),

/***/ "./src/modules/mask.js":
/*!*****************************!*\
  !*** ./src/modules/mask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mask = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n \r\n        var eventCalllback = function (e) {\r\n     \r\n            var el = e.target,\r\n            clearVal = el.dataset.phoneClear,\r\n            pattern = el.dataset.phonePattern,\r\n            matrix_def = \"+7(___) ___-__-__\",\r\n            matrix = pattern ? pattern : matrix_def,\r\n            i = 0,\r\n            def = matrix.replace(/\\D/g, \"\"),\r\n            val = e.target.value.replace(/\\D/g, \"\");\r\n             \r\n            if (clearVal !== 'false' && e.type === 'blur') {\r\n                if (val.length < matrix.match(/([\\_\\d])/g).length) {\r\n                    e.target.value = '';\r\n                    return;\r\n                }\r\n            }\r\n            if (def.length >= val.length) val = def;\r\n            e.target.value = matrix.replace(/./g, function (a) {\r\n                return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\r\n            });\r\n        }\r\n     \r\n        var phone_inputs = document.querySelectorAll('[data-phone-pattern]');\r\n        for (let elem of phone_inputs) {\r\n            for (let ev of ['input', 'blur', 'focus']) {\r\n                elem.addEventListener(ev, eventCalllback);\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);\n\n//# sourceURL=webpack://layout/./src/modules/mask.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuOpen = document.querySelector('.menu')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    menuOpen.addEventListener('click', () => {\r\n        menuModal.style.marginRight = 645 + 'px'\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-menu')) {\r\n            menuModal.style.marginRight = 0\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://layout/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/plansRepairModal.js":
/*!*****************************************!*\
  !*** ./src/modules/plansRepairModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairModal = () => {\r\n    const modal = document.querySelector('.popup-repair-types')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.no-overflow')) {\r\n            modal.style.visibility = 'visible'\r\n            menuModal.style.marginRight = 0\r\n        }\r\n        if (e.target.closest('.link-list-repair')) {\r\n            modal.style.visibility = 'visible'\r\n        }\r\n    })\r\n\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close') || e.target.classList.contains('popup-repair-types')) {\r\n            modal.style.visibility = 'hidden'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairModal);\n\n//# sourceURL=webpack://layout/./src/modules/plansRepairModal.js?");

/***/ }),

/***/ "./src/modules/plansRepairSlaider.js":
/*!*******************************************!*\
  !*** ./src/modules/plansRepairSlaider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlaider = () => {\r\n    const navList = document.querySelector('.nav-list-repair')\r\n    const repairNavs = document.querySelectorAll('.repair-types-nav__item')\r\n    const slideCount = document.querySelector('.slider-counter-content__current')\r\n    const slideTotal = document.querySelector('.slider-counter-content__total')\r\n    const repairSlides1 = document.querySelectorAll('.types-repair1 > .repair-types-slider__slide')\r\n    const repairSlides2 = document.querySelectorAll('.types-repair2 > .repair-types-slider__slide')\r\n    const repairSlides3 = document.querySelectorAll('.types-repair3 > .repair-types-slider__slide')\r\n    const repairSlides4 = document.querySelectorAll('.types-repair4 > .repair-types-slider__slide')\r\n    const repairSlides5 = document.querySelectorAll('.types-repair5 > .repair-types-slider__slide')\r\n    let numSlides = repairSlides1\r\n    let count = 1\r\n    let indexSlaid = 0\r\n    slideTotal.textContent = numSlides.length\r\n\r\n    repairNavs.forEach((btn, key) => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            const elem = navList.querySelector('.active')\r\n            elem.classList.remove('active')\r\n            e.target.classList.add('active')\r\n            slideOff()\r\n            console.log(numSlides);\r\n            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}\r\n            slideTotal.textContent = numSlides.length\r\n            console.log(numSlides);\r\n            slideOn()\r\n            slideCount.textContent = 1\r\n            count = 1\r\n        })\r\n    })\r\n\r\n    const slideOff = () => {\r\n        numSlides.forEach((btn, key) => {\r\n            numSlides[key].style.display = 'none'\r\n        })\r\n    }\r\n\r\n    const slideOn = () => {\r\n        numSlides[0].style.display = 'block'\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#repair-types-arrow_right')) {\r\n            if (count == slideTotal.textContent) {\r\n                count = 0\r\n            }\r\n            count++\r\n            slideCount.textContent = count\r\n            numSlides[indexSlaid].style.display = 'none'\r\n            indexSlaid++\r\n            if (indexSlaid == numSlides.length - 1) {\r\n                indexSlaid = 0\r\n            }\r\n            numSlides[indexSlaid].style.display = 'block'\r\n        }\r\n\r\n        if (e.target.closest('#repair-types-arrow_left')) {\r\n            count--\r\n            if (count == 0) {\r\n                count = slideTotal.textContent\r\n            }\r\n            slideCount.textContent = count\r\n            numSlides[indexSlaid].style.display = 'none'\r\n            if (indexSlaid == 0) {\r\n                indexSlaid = numSlides.length - 1\r\n            }\r\n            indexSlaid--\r\n            numSlides[indexSlaid].style.display = 'block'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlaider);\n\n//# sourceURL=webpack://layout/./src/modules/plansRepairSlaider.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const menuNav = document.querySelector('.popup-menu-nav')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n    const anchors = menuNav.querySelectorAll('.popup-menu-nav__item > a')\r\n    const a = document.querySelector('.button-footer > a')\r\n\r\n    a.addEventListener('click', function (e) {\r\n        e.preventDefault()\r\n        \r\n        const blockID = a.getAttribute('href')\r\n        \r\n        document.querySelector(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n        })\r\n    })\r\n\r\n    for (let anchor of anchors) {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault()\r\n            menuModal.style.marginRight = 0\r\n\r\n            const blockID = anchor.getAttribute('href')\r\n\r\n            document.querySelector(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://layout/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://layout/./src/modules/sendForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;