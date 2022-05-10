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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./src/modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/plansRepairModal */ \"./src/modules/plansRepairModal.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ \"./src/modules/mask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formula */ \"./src/modules/formula.js\");\n/* harmony import */ var _modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/plansRepairSlaider */ \"./src/modules/plansRepairSlaider.js\");\n/* harmony import */ var _modules_documentsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/documentsModal */ \"./src/modules/documentsModal.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_privacyPolice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/privacyPolice */ \"./src/modules/privacyPolice.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./src/modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_portfolioModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/portfolioModal */ \"./src/modules/portfolioModal.js\");\n/* harmony import */ var _modules_sliderComment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sliderComment */ \"./src/modules/sliderComment.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_plansRepairModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_mask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_formula__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_plansRepairSlaider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_documentsModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n;(0,_modules_privacyPolice__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\n;(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\n;(0,_modules_portfolioModal__WEBPACK_IMPORTED_MODULE_12__[\"default\"])()\n;(0,_modules_sliderComment__WEBPACK_IMPORTED_MODULE_13__[\"default\"])()\n\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: 'feedback1',\n    someElem: [\n        {\n            type: 'block',\n            id: 'feedback-input1'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: 'feedback2',\n    someElem: [\n        {\n            type: 'block',\n            id: 'feedback-input2'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: 'feedback3',\n    someElem: [\n        {\n            type: 'block',\n            id: 'feedback-input3'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: 'feedback4',\n    someElem: [\n        {\n            type: 'block',\n            id: 'feedback-input4'\n        }\n    ]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    formId: 'feedback5',\n    someElem: [\n        {\n            type: 'block',\n            id: 'feedback-input5'\n        }\n    ]\n});\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\n    const accordion = document.querySelector('.accordion'),\n      titleBlocks = accordion.querySelectorAll('.title_block');\n\n    accordion.addEventListener('click', event => {\n      if (event.target.closest('.title_block').classList.contains('msg-active')) {\n        event.target.classList.remove('msg-active');\n      } else {\n        titleBlocks.forEach(item => {\n          item.classList.remove('msg-active');\n        });\n        event.target.closest('.title_block').classList.add('msg-active');\n      }\n    });\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://layout/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/contacts.js":
/*!*********************************!*\
  !*** ./src/modules/contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\n    const arrow = document.querySelector('.header-contacts__arrow')\n    const phone = document.querySelector('.header-contacts__phone-number-accord a')\n    let count = 0\n    \n    arrow.addEventListener('click', () => {\n        if (count == 0) {\n            count = 1\n            phone.style.opacity = 1\n            phone.style.marginTop = 20 + 'px'\n            arrow.style.transform = `rotate(180deg)`\n        } else if (count == 1) {\n            count = 0\n            phone.style.opacity = 0\n            phone.style.marginTop = 0\n            arrow.style.transform = `rotate(0deg)`\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack://layout/./src/modules/contacts.js?");

/***/ }),

/***/ "./src/modules/documentsModal.js":
/*!***************************************!*\
  !*** ./src/modules/documentsModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documents = () => {\n    const modal = document.querySelector('.popup-transparency')\n    const slides = document.querySelectorAll('.transparency-item')\n    const transSlider = document.querySelector('.popup-transparency-slider')\n    const transSlide = document.querySelectorAll('.popup-transparency-slider__slide')\n    const counter = document.querySelector('#transparency-popup-counter')\n    const total = counter.querySelector('.slider-counter-content__total')\n    const current = counter.querySelector('.slider-counter-content__current')\n    let num = 0\n    let count = 1\n    current.textContent = count\n    \n    const div = document.createElement('div')\n    div.classList.add('documentSliderCustomWrap')\n    transSlider.append(div)\n    div.style.position = 'relative'\n    div.style.display = 'flex'\n    div.style.width = '100%'\n    div.style.height = '100%'\n    div.style.transition = 'transform 0.5s'\n    transSlide.forEach((val, key) => {\n        div.append(transSlide[key])\n        transSlide[key].style.minWidth = '432px'\n    })\n\n    total.textContent = transSlide.length\n\n    const numSlider = () => {\n        div.style.transform = `translateX(${num + 'px'})`\n        current.textContent = count\n    }\n\n    const arrowInit = () => {\n        document.querySelector('#transparency_left').style.display = 'flex'\n        document.querySelector('#transparency_right').style.display = 'flex'\n        if (num == -864) {\n            document.querySelector('#transparency_right').style.display = 'none'\n        }\n        if (num == 0) {\n            document.querySelector('#transparency_left').style.display = 'none'\n        }\n    }\n\n    slides.forEach((btn, key) => {\n        btn.addEventListener('click', () => {\n            modal.style.visibility = 'visible'\n            count = key + 1\n            num = -432 * key\n            numSlider()\n            arrowInit()\n        })\n    })\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.close') || e.target.classList.contains('popup-transparency')) {\n            modal.style.visibility = 'hidden'\n        }\n\n        if (e.target.closest('#transparency_left')) {\n            count--\n            num += 432\n            numSlider()\n            arrowInit()\n        }\n\n        if (e.target.closest('#transparency_right')) {\n            count++\n            num += -432\n            numSlider()\n            arrowInit()\n        }\n    })\n    arrowInit()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documents);\n\n//# sourceURL=webpack://layout/./src/modules/documentsModal.js?");

/***/ }),

/***/ "./src/modules/formula.js":
/*!********************************!*\
  !*** ./src/modules/formula.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formula = () => {\n\n    const formula = document.getElementById('formula')\n     const elem = []\n   \n   \n   \n     formula.addEventListener('mouseover', (e) =>{\n       if (window.innerWidth < 1024) { \n        return\n       }\n       if (e.target.closest('.formula-item__icon')) {\n         const item = e.target.closest('.formula-item')\n         item.style.zIndex = '1'\n   \n         item.classList.add('active-item')\n   \n         elem[0] = item\n   \n         const formulaItem = item.querySelector('.formula-item-popup')\n   \n         openFormula(formulaItem, item)\n       }\n     })\n   \n     formula.addEventListener('mouseout', (e) =>{\n       if (window.innerWidth < 1024) { \n        return\n       }\n   \n       if (elem[0]) {\n   \n         const item = elem[0]\n         item.style.zIndex = 0\n         item.classList.remove('active-item')\n         const itemIcon = e.target.closest('.formula-item__icon')\n   \n         if (!itemIcon) {\n           return\n         }\n   \n         const formulaItem  = itemIcon.querySelector('.formula-item-popup')\n         closeFormula(formulaItem)\n       }\n     })\n   \n     const openFormula = (formulaItem, item) =>{\n   \n       let y = formulaItem.getBoundingClientRect().y\n   \n       let indent = +item.getBoundingClientRect().height\n   \n       window.addEventListener('scroll', function() {\n       });\n       if (y < 0) {\n   \n         formulaItem.style.cssText = `\n         bottom: 0px;\n         top: ${indent*1.1}px;\n         `\n         formulaItem.classList.add('flipTo')\n       }\n     }\n   \n     const closeFormula = (formulaItem) =>{\n       formulaItem.style.cssText = `\n         bottom: 90px;`\n         formulaItem.classList.remove('flipTo')\n     }\n   \n   }\n   \n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);   \n\n//# sourceURL=webpack://layout/./src/modules/formula.js?");

/***/ }),

/***/ "./src/modules/mask.js":
/*!*****************************!*\
  !*** ./src/modules/mask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mask = () => {\n    document.addEventListener(\"DOMContentLoaded\", function () {\n \n        var eventCalllback = function (e) {\n     \n            var el = e.target,\n            clearVal = el.dataset.phoneClear,\n            pattern = el.dataset.phonePattern,\n            matrix_def = \"+7(___) ___-__-__\",\n            matrix = pattern ? pattern : matrix_def,\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = e.target.value.replace(/\\D/g, \"\");\n             \n            if (clearVal !== 'false' && e.type === 'blur') {\n                if (val.length < matrix.match(/([\\_\\d])/g).length) {\n                    e.target.value = '';\n                    return;\n                }\n            }\n            if (def.length >= val.length) val = def;\n            e.target.value = matrix.replace(/./g, function (a) {\n                return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n            });\n        }\n     \n        var phone_inputs = document.querySelectorAll('[data-phone-pattern]');\n        for (let elem of phone_inputs) {\n            for (let ev of ['input', 'blur', 'focus']) {\n                elem.addEventListener(ev, eventCalllback);\n            }\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);\n\n//# sourceURL=webpack://layout/./src/modules/mask.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuOpen = document.querySelector('.menu')\n    const menuModal = document.querySelector('.popup-dialog-menu')\n\n    menuOpen.addEventListener('click', () => {\n        menuModal.style.marginRight = 645 + 'px'\n    })\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.close-menu')) {\n            menuModal.style.marginRight = 0\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://layout/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/plansRepairModal.js":
/*!*****************************************!*\
  !*** ./src/modules/plansRepairModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairModal = () => {\n    const modal = document.querySelector('.popup-repair-types')\n    const menuModal = document.querySelector('.popup-dialog-menu')\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.no-overflow')) {\n            modal.style.visibility = 'visible'\n            menuModal.style.marginRight = 0\n        }\n        if (e.target.closest('.link-list-repair')) {\n            modal.style.visibility = 'visible'\n        }\n    })\n\n\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.close') || e.target.classList.contains('popup-repair-types')) {\n            modal.style.visibility = 'hidden'\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairModal);\n\n//# sourceURL=webpack://layout/./src/modules/plansRepairModal.js?");

/***/ }),

/***/ "./src/modules/plansRepairSlaider.js":
/*!*******************************************!*\
  !*** ./src/modules/plansRepairSlaider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlaider = () => {\n    const navList = document.querySelector('.nav-list-repair')\n    const repairNavs = document.querySelectorAll('.repair-types-nav__item')\n    const slideCount = document.querySelector('.slider-counter-content__current')\n    const slideTotal = document.querySelector('.slider-counter-content__total')\n    const repairSlides1 = document.querySelector('.types-repair1')\n    const repairSlides2 = document.querySelector('.types-repair2')\n    const repairSlides3 = document.querySelector('.types-repair3')\n    const repairSlides4 = document.querySelector('.types-repair4')\n    const repairSlides5 = document.querySelector('.types-repair5')\n    let numSlides = repairSlides1\n    let count = 1\n    let indexSlaid = 0\n    slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\n\n    repairNavs.forEach((btn, key) => {\n        btn.addEventListener('click', (e) => {\n            e.preventDefault()\n            const elem = navList.querySelector('.active')\n            elem.classList.remove('active')\n            e.target.classList.add('active')\n            slideOff()\n            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}\n            slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\n            slideOn()\n            slideCount.textContent = 1\n            count = 1\n        })\n    })\n\n    const slideOff = () => {\n        numSlides.style.display = 'none'\n        numSlides.style.transform = 'translateY(0px)'\n    }\n\n    const slideOn = () => {\n        numSlides.style.display = 'block'\n    }\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('#repair-types-arrow_right')) {\n            count++\n            indexSlaid += -547\n            if (count > slideTotal.textContent) {\n                count = 5\n                return\n            }\n            slideCount.textContent = count\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\n            numSlides.style.display = 'block'\n        }\n\n        if (e.target.closest('#repair-types-arrow_left')) {\n            count--\n            indexSlaid += 547\n            if (count < 1) {\n                count = 1\n                return\n            }\n            slideCount.textContent = count\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlaider);\n\n//# sourceURL=webpack://layout/./src/modules/plansRepairSlaider.js?");

/***/ }),

/***/ "./src/modules/portfolioModal.js":
/*!***************************************!*\
  !*** ./src/modules/portfolioModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolioModal = () => {\n    const slideFrames = document.querySelectorAll('.portfolio-slider__slide-frame')\n    const modal = document.querySelector('.popup-portfolio')\n    const portText = document.querySelectorAll('.popup-portfolio-text')\n    const portSlider = document.querySelector('.popup-portfolio-slider')\n    const counter = document.querySelector('#popup-portfolio-counter')\n    const countTotal = counter.querySelector('.slider-counter-content__total')\n    const countCurrent = counter.querySelector('.slider-counter-content__current')\n\n    let num = 0\n    let count = 1\n\n    portSlider.style.transition = 'transform 0.5s'\n    counter.style.top = '8.5%'\n    countTotal.textContent = slideFrames.length - 10\n\n    const numSlider = () => {\n        portSlider.style.transform = `translateY(${num + 'px'})`\n        countCurrent.textContent = count\n    }\n\n    const Init = () => {\n        document.querySelector('#popup_portfolio_left').style.display = 'flex'\n        document.querySelector('#popup_portfolio_right').style.display = 'flex'\n        document.querySelector('#popup_portfolio_left').style.top = '5%'\n        document.querySelector('#popup_portfolio_right').style.top = '5%'\n        if (num == -5688) {\n            document.querySelector('#popup_portfolio_right').style.display = 'none'\n        }\n        if (num == 0) {\n            document.querySelector('#popup_portfolio_left').style.display = 'none'\n        }\n    }\n\n    slideFrames.forEach((btn, key) => {\n        btn.addEventListener('click', () => {\n            modal.style.visibility = 'visible'\n            num = -632 * (key - 10)\n            count = 1 * (key - 9)\n            numSlider()\n            Init()\n        })\n    })\n    \n    portText.forEach((val, key) => {\n        portText[key].style.display = 'block'\n    })\n\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.close') || e.target.classList.contains('popup-portfolio')) {\n            modal.style.visibility = 'hidden'\n        }\n        if (e.target.closest('#popup_portfolio_right')) {\n            count++\n            num += -632\n            numSlider()\n            Init()\n        }\n        if (e.target.closest('#popup_portfolio_left')) {\n            count--\n            num += 632\n            numSlider()\n            Init()\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioModal);\n\n//# sourceURL=webpack://layout/./src/modules/portfolioModal.js?");

/***/ }),

/***/ "./src/modules/privacyPolice.js":
/*!**************************************!*\
  !*** ./src/modules/privacyPolice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst privacyPolice = () => {\n    const linkPrivacy = document.querySelectorAll('.link-privacy')\n    const popupPrivacy = document.querySelector('.popup.popup-privacy')\n\n    const openPrivacy = () =>{\n    popupPrivacy.style.visibility = 'visible'\n    }\n    const closePrivacy = () =>{\n    popupPrivacy.style.visibility = 'hidden'\n    }\n\n    linkPrivacy.forEach(e => {\n    e.addEventListener('click', openPrivacy)\n    });\n\n    popupPrivacy.addEventListener('click', (e)=>{\n    if (e.target.closest('.close.mobile-hide') || !e.target.closest('.popup-dialog.popup-dialog-privacy')) {\n        closePrivacy()\n    }\n    })\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (privacyPolice);\n\n//# sourceURL=webpack://layout/./src/modules/privacyPolice.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const menuNav = document.querySelector('.popup-menu-nav')\n    const menuModal = document.querySelector('.popup-dialog-menu')\n    const anchors = menuNav.querySelectorAll('.popup-menu-nav__item > a')\n    const a = document.querySelector('.button-footer > a')\n\n    a.addEventListener('click', function (e) {\n        e.preventDefault()\n        \n        const blockID = a.getAttribute('href')\n        \n        document.querySelector(blockID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n        })\n    })\n\n    for (let anchor of anchors) {\n        anchor.addEventListener('click', function (e) {\n            e.preventDefault()\n            menuModal.style.marginRight = 0\n\n            const blockID = anchor.getAttribute('href')\n\n            document.querySelector(blockID).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n            })\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://layout/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n    const form = document.getElementById(formId)\n    const statusBlock = document.createElement('div')\n    const loadText = 'Загрузка...'\n    const errorText = 'Ошибка...'\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\n\n    const validate = (list) => {\n        let success = true\n\n        return success\n    }\n\n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(res => res.json())\n    }\n\n    const submitForm = () => {\n        const formElements = form.querySelectorAll('input')\n        const formData = new FormData(form)\n        const formBody = {}\n\n        statusBlock.textContent = loadText\n        form.append(statusBlock)\n\n        formData.forEach((val, key) => {\n            formBody[key] = val\n        })\n\n        someElem.forEach(elem => {\n            const element = document.getElementById(elem.id)\n\n            if(elem.type === 'block') {\n                formBody[elem.id] = element.textContent\n            } else if(elem.type === 'input') {\n                formBody[elem.id] = element.value\n            }\n        })\n\n        if(validate(formElements)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText\n\n                    formElements.forEach(input => {\n                        input.value = ''\n                    })\n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText\n                })\n        } else {\n            alert('Данные не валидны!!!')\n        }\n    }\n\n    try {\n        if(!form) {\n            throw new Error('Верните форму на место')\n        }\n\n\n        form.addEventListener('submit', (event) => {\n            event.preventDefault()\n    \n            submitForm()\n        })\n    } catch(error) {\n        console.log(error.message);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://layout/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderComment.js":
/*!**************************************!*\
  !*** ./src/modules/sliderComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst comment = () => {\r\n    const slider = document.querySelector('.reviews-slider')\r\n    const slides = document.querySelectorAll('.reviews-slider__slide')\r\n\r\n    let num = 0\r\n\r\n    const div = document.createElement('div')\r\n    div.classList.add('reviewSliderCustomWrap')\r\n    slider.append(div)\r\n    div.style.position = 'relative'\r\n    div.style.display = 'flex'\r\n    div.style.width = '100%'\r\n    div.style.height = '100%'\r\n    div.style.transition = 'transform 0.5s'\r\n    slides.forEach((val, key) => {\r\n        div.append(slides[key])\r\n    })\r\n\r\n    const init = () => {\r\n        div.style.transform = `translateX(${num + 'px'})`\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#reviews-arrow_right')) {\r\n            num += -494\r\n            init()\r\n        }\r\n        if (e.target.closest('#reviews-arrow_left')) {\r\n            num += 494\r\n            init()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comment);\n\n//# sourceURL=webpack://layout/./src/modules/sliderComment.js?");

/***/ }),

/***/ "./src/modules/sliderPortfolio.js":
/*!****************************************!*\
  !*** ./src/modules/sliderPortfolio.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolioSlider = () => {\n    const portSlider = document.querySelector('.portfolio-slider')\n    const portSlides = document.querySelectorAll('.portfolio-slider__slide')\n\n    let num = 0\n\n    const div = document.createElement('div')\n    div.classList.add('portfolioSliderCustomWrap')\n    portSlider.append(div)\n    div.style.position = 'relative'\n    div.style.display = 'flex'\n    div.style.width = '100%'\n    div.style.height = '100%'\n    div.style.transition = 'transform 0.5s'\n    portSlides.forEach((val, key) => {\n        div.append(portSlides[key])\n    })\n\n    const arrowInit = () => {\n        document.querySelector('#portfolio-arrow_left').style.display = 'flex'\n        document.querySelector('#portfolio-arrow_right').style.display = 'flex'\n        if (num == -704) {\n            document.querySelector('#portfolio-arrow_right').style.display = 'none'\n        }\n        if (num == 0) {\n            document.querySelector('#portfolio-arrow_left').style.display = 'none'\n        }\n    }\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('#portfolio-arrow_right')) {\n            num += -352\n            div.style.transform = `translateX(${num + 'px'})`\n            arrowInit()\n        }\n        if (e.target.closest('#portfolio-arrow_left')) {\n            num += 352\n            div.style.transform = `translateX(${num + 'px'})`\n            arrowInit()\n        }\n    })\n    arrowInit()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioSlider);\n\n//# sourceURL=webpack://layout/./src/modules/sliderPortfolio.js?");

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