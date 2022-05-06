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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./src/modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/plansRepairModal */ \"./src/modules/plansRepairModal.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ \"./src/modules/mask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formula */ \"./src/modules/formula.js\");\n/* harmony import */ var _modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/plansRepairSlaider */ \"./src/modules/plansRepairSlaider.js\");\n/* harmony import */ var _modules_documentsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/documentsModal */ \"./src/modules/documentsModal.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_privacyPolice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/privacyPolice */ \"./src/modules/privacyPolice.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./src/modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_portfolioModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/portfolioModal */ \"./src/modules/portfolioModal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_mask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_formula__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_documentsModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_modules_privacyPolice__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n;(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\r\n;(0,_modules_portfolioModal__WEBPACK_IMPORTED_MODULE_12__[\"default\"])()\r\n\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId: 'feedback1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'feedback-input1'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId: 'feedback2',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'feedback-input2'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId: 'feedback3',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'feedback-input3'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId: 'feedback4',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'feedback-input4'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formId: 'feedback5',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'feedback-input5'\r\n        }\r\n    ]\r\n});\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\r\n    const accordion = document.querySelector('.accordion'),\r\n      titleBlocks = accordion.querySelectorAll('.title_block');\r\n\r\n    accordion.addEventListener('click', event => {\r\n      if (event.target.closest('.title_block').classList.contains('msg-active')) {\r\n        event.target.classList.remove('msg-active');\r\n      } else {\r\n        titleBlocks.forEach(item => {\r\n          item.classList.remove('msg-active');\r\n        });\r\n        event.target.closest('.title_block').classList.add('msg-active');\r\n      }\r\n    });\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://layout/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/contacts.js":
/*!*********************************!*\
  !*** ./src/modules/contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow')\r\n    const phone = document.querySelector('.header-contacts__phone-number-accord a')\r\n    let count = 0\r\n    \r\n    arrow.addEventListener('click', () => {\r\n        if (count == 0) {\r\n            count = 1\r\n            phone.style.opacity = 1\r\n            phone.style.marginTop = 20 + 'px'\r\n            arrow.style.transform = `rotate(180deg)`\r\n        } else if (count == 1) {\r\n            count = 0\r\n            phone.style.opacity = 0\r\n            phone.style.marginTop = 0\r\n            arrow.style.transform = `rotate(0deg)`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack://layout/./src/modules/contacts.js?");

/***/ }),

/***/ "./src/modules/documentsModal.js":
/*!***************************************!*\
  !*** ./src/modules/documentsModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documents = () => {\r\n    const modal = document.querySelector('.popup-transparency')\r\n    const slides = document.querySelectorAll('.transparency-item')\r\n    const transSlider = document.querySelector('.popup-transparency-slider')\r\n    const transSlide = document.querySelectorAll('.popup-transparency-slider__slide')\r\n    const total = document.querySelector('.slider-counter-content__total')\r\n    const current = document.querySelector('.slider-counter-content__current')\r\n    let num = 0\r\n    let counter = 1\r\n    current.textContent = counter\r\n    \r\n    const div = document.createElement('div')\r\n    div.classList.add('documentSliderCustomWrap')\r\n    transSlider.append(div)\r\n    div.style.position = 'relative'\r\n    div.style.display = 'flex'\r\n    div.style.width = '100%'\r\n    div.style.height = '100%'\r\n    div.style.transition = 'transform 0.5s'\r\n    transSlide.forEach((val, key) => {\r\n        div.append(transSlide[key])\r\n        transSlide[key].style.minWidth = '432px'\r\n    })\r\n\r\n    total.textContent = transSlide.length\r\n\r\n    const arrowInit = () => {\r\n        document.querySelector('#transparency_left').style.display = 'flex'\r\n        document.querySelector('#transparency_right').style.display = 'flex'\r\n        if (num == -864) {\r\n            document.querySelector('#transparency_right').style.display = 'none'\r\n        }\r\n        if (num == 0) {\r\n            document.querySelector('#transparency_left').style.display = 'none'\r\n        }\r\n    }\r\n\r\n    slides.forEach((btn, key) => {\r\n        btn.addEventListener('click', (e) => {\r\n            if (key == 0) {\r\n                modal.style.visibility = 'visible'\r\n                num = 0\r\n                div.style.transform = `translateX(${num + 'px'})`\r\n                arrowInit()\r\n            } else\r\n            if (key == 1) {\r\n                modal.style.visibility = 'visible'\r\n                num = -432\r\n                div.style.transform = `translateX(${num + 'px'})`\r\n                arrowInit()\r\n            } else\r\n            if (key == 2) {\r\n                modal.style.visibility = 'visible'\r\n                num = -864\r\n                div.style.transform = `translateX(${num + 'px'})`\r\n                arrowInit()\r\n            }\r\n        })\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close') || e.target.classList.contains('popup-transparency')) {\r\n            modal.style.visibility = 'hidden'\r\n        }\r\n\r\n        if (e.target.closest('#transparency_left')) {\r\n            counter--\r\n            num += 432\r\n            div.style.transform = `translateX(${num + 'px'})`\r\n            current.textContent = counter\r\n            arrowInit()\r\n        }\r\n\r\n        if (e.target.closest('#transparency_right')) {\r\n            counter++\r\n            num += -432\r\n            div.style.transform = `translateX(${num + 'px'})`\r\n            current.textContent = counter\r\n            arrowInit()\r\n        }\r\n    })\r\n    arrowInit()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documents);\n\n//# sourceURL=webpack://layout/./src/modules/documentsModal.js?");

/***/ }),

/***/ "./src/modules/formula.js":
/*!********************************!*\
  !*** ./src/modules/formula.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formula = () => {\r\n\r\n    const formula = document.getElementById('formula')\r\n     const elem = []\r\n   \r\n   \r\n   \r\n     formula.addEventListener('mouseover', (e) =>{\r\n       if (window.innerWidth < 1024) { \r\n        return\r\n       }\r\n       if (e.target.closest('.formula-item__icon')) {\r\n         const item = e.target.closest('.formula-item')\r\n         item.style.zIndex = '1'\r\n   \r\n         item.classList.add('active-item')\r\n   \r\n         elem[0] = item\r\n   \r\n         const formulaItem = item.querySelector('.formula-item-popup')\r\n   \r\n         openFormula(formulaItem, item)\r\n       }\r\n     })\r\n   \r\n     formula.addEventListener('mouseout', (e) =>{\r\n       if (window.innerWidth < 1024) { \r\n        return\r\n       }\r\n   \r\n       if (elem[0]) {\r\n   \r\n         const item = elem[0]\r\n         item.style.zIndex = 0\r\n         item.classList.remove('active-item')\r\n         const itemIcon = e.target.closest('.formula-item__icon')\r\n   \r\n         if (!itemIcon) {\r\n           return\r\n         }\r\n   \r\n         const formulaItem  = itemIcon.querySelector('.formula-item-popup')\r\n         closeFormula(formulaItem)\r\n       }\r\n     })\r\n   \r\n     const openFormula = (formulaItem, item) =>{\r\n   \r\n       let y = formulaItem.getBoundingClientRect().y\r\n   \r\n       let indent = +item.getBoundingClientRect().height\r\n   \r\n       window.addEventListener('scroll', function() {\r\n       });\r\n       if (y < 0) {\r\n   \r\n         formulaItem.style.cssText = `\r\n         bottom: 0px;\r\n         top: ${indent*1.1}px;\r\n         `\r\n         formulaItem.classList.add('flipTo')\r\n       }\r\n     }\r\n   \r\n     const closeFormula = (formulaItem) =>{\r\n       formulaItem.style.cssText = `\r\n         bottom: 90px;`\r\n         formulaItem.classList.remove('flipTo')\r\n     }\r\n   \r\n   }\r\n   \r\n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);   \n\n//# sourceURL=webpack://layout/./src/modules/formula.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlaider = () => {\r\n    const navList = document.querySelector('.nav-list-repair')\r\n    const repairNavs = document.querySelectorAll('.repair-types-nav__item')\r\n    const slideCount = document.querySelector('.slider-counter-content__current')\r\n    const slideTotal = document.querySelector('.slider-counter-content__total')\r\n    const repairSlides1 = document.querySelector('.types-repair1')\r\n    const repairSlides2 = document.querySelector('.types-repair2')\r\n    const repairSlides3 = document.querySelector('.types-repair3')\r\n    const repairSlides4 = document.querySelector('.types-repair4')\r\n    const repairSlides5 = document.querySelector('.types-repair5')\r\n    let numSlides = repairSlides1\r\n    let count = 1\r\n    let indexSlaid = 0\r\n    slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\r\n\r\n    repairNavs.forEach((btn, key) => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            const elem = navList.querySelector('.active')\r\n            elem.classList.remove('active')\r\n            e.target.classList.add('active')\r\n            slideOff()\r\n            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}\r\n            slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\r\n            slideOn()\r\n            slideCount.textContent = 1\r\n            count = 1\r\n        })\r\n    })\r\n\r\n    const slideOff = () => {\r\n        numSlides.style.display = 'none'\r\n        numSlides.style.transform = 'translateY(0px)'\r\n    }\r\n\r\n    const slideOn = () => {\r\n        numSlides.style.display = 'block'\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#repair-types-arrow_right')) {\r\n            count++\r\n            indexSlaid += -547\r\n            if (count > slideTotal.textContent) {\r\n                count = 5\r\n                return\r\n            }\r\n            slideCount.textContent = count\r\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\r\n            numSlides.style.display = 'block'\r\n        }\r\n\r\n        if (e.target.closest('#repair-types-arrow_left')) {\r\n            count--\r\n            indexSlaid += 547\r\n            if (count < 1) {\r\n                count = 1\r\n                return\r\n            }\r\n            slideCount.textContent = count\r\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlaider);\n\n//# sourceURL=webpack://layout/./src/modules/plansRepairSlaider.js?");

/***/ }),

/***/ "./src/modules/portfolioModal.js":
/*!***************************************!*\
  !*** ./src/modules/portfolioModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolioModal = () => {\r\n    const slideFrames = document.querySelectorAll('.portfolio-slider__slide-frame')\r\n    const modal = document.querySelector('.popup-portfolio')\r\n    const portText = document.querySelectorAll('.popup-portfolio-text')\r\n    const portSlider = document.querySelector('.popup-portfolio-slider')\r\n\r\n    let num = 0\r\n\r\n    slideFrames.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.visibility = 'visible'\r\n        })\r\n    })\r\n\r\n    portText.forEach((val, key) => {\r\n        portText[key].style.display = 'block'\r\n    })\r\n\r\n    const arrowInit = () => {\r\n        document.querySelector('#popup_portfolio_left').style.display = 'flex'\r\n        document.querySelector('#popup_portfolio_right').style.display = 'flex'\r\n        if (num == -864) {\r\n            document.querySelector('#popup_portfolio_right').style.display = 'none'\r\n        }\r\n        if (num == 0) {\r\n            document.querySelector('#popup_portfolio_left').style.display = 'none'\r\n        }\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close') || e.target.classList.contains('popup-portfolio')) {\r\n            modal.style.visibility = 'hidden'\r\n        }\r\n        if (e.target.closest('#popup_portfolio_right')) {\r\n            portSlider.style.transform = `translateY(${'-624px'})`\r\n        }\r\n    })\r\n    arrowInit()\r\n}\r\n// popup_portfolio_right\r\n// popup_portfolio_left\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioModal);\n\n//# sourceURL=webpack://layout/./src/modules/portfolioModal.js?");

/***/ }),

/***/ "./src/modules/privacyPolice.js":
/*!**************************************!*\
  !*** ./src/modules/privacyPolice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst privacyPolice = () => {\r\n    const linkPrivacy = document.querySelectorAll('.link-privacy')\r\n    const popupPrivacy = document.querySelector('.popup.popup-privacy')\r\n\r\n    const openPrivacy = () =>{\r\n    popupPrivacy.style.visibility = 'visible'\r\n    }\r\n    const closePrivacy = () =>{\r\n    popupPrivacy.style.visibility = 'hidden'\r\n    }\r\n\r\n    linkPrivacy.forEach(e => {\r\n    e.addEventListener('click', openPrivacy)\r\n    });\r\n\r\n    popupPrivacy.addEventListener('click', (e)=>{\r\n    if (e.target.closest('.close.mobile-hide') || !e.target.closest('.popup-dialog.popup-dialog-privacy')) {\r\n        closePrivacy()\r\n    }\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (privacyPolice);\n\n//# sourceURL=webpack://layout/./src/modules/privacyPolice.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    const validate = (list) => {\r\n        let success = true\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n\r\n            if(elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent\r\n            } else if(elem.type === 'input') {\r\n                formBody[elem.id] = element.value\r\n            }\r\n        })\r\n\r\n        console.log('submit')\r\n\r\n        if(validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n        } else {\r\n            alert('Данные не валидны!!!')\r\n        }\r\n    }\r\n\r\n    try {\r\n        if(!form) {\r\n            throw new Error('Верните форму на место')\r\n        }\r\n\r\n\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault()\r\n    \r\n            submitForm()\r\n        })\r\n    } catch(error) {\r\n        console.log(error.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://layout/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderPortfolio.js":
/*!****************************************!*\
  !*** ./src/modules/sliderPortfolio.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolioSlider = () => {\r\n    const portSlider = document.querySelector('.portfolio-slider')\r\n    const portSlides = document.querySelectorAll('.portfolio-slider__slide')\r\n\r\n    let num = 0\r\n\r\n    const div = document.createElement('div')\r\n    div.classList.add('portfolioSliderCustomWrap')\r\n    portSlider.append(div)\r\n    div.style.position = 'relative'\r\n    div.style.display = 'flex'\r\n    div.style.width = '100%'\r\n    div.style.height = '100%'\r\n    div.style.transition = 'transform 0.5s'\r\n    portSlides.forEach((val, key) => {\r\n        div.append(portSlides[key])\r\n    })\r\n\r\n    const arrowInit = () => {\r\n        document.querySelector('#portfolio-arrow_left').style.display = 'flex'\r\n        document.querySelector('#portfolio-arrow_right').style.display = 'flex'\r\n        if (num == -704) {\r\n            document.querySelector('#portfolio-arrow_right').style.display = 'none'\r\n        }\r\n        if (num == 0) {\r\n            document.querySelector('#portfolio-arrow_left').style.display = 'none'\r\n        }\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#portfolio-arrow_right')) {\r\n            num += -352\r\n            div.style.transform = `translateX(${num + 'px'})`\r\n            arrowInit()\r\n        }\r\n        if (e.target.closest('#portfolio-arrow_left')) {\r\n            num += 352\r\n            div.style.transform = `translateX(${num + 'px'})`\r\n            arrowInit()\r\n        }\r\n    })\r\n    arrowInit()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioSlider);\n\n//# sourceURL=webpack://layout/./src/modules/sliderPortfolio.js?");

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