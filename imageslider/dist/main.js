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

/***/ "./src/index2.js":
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator */ \"./src/indicator.js\");\n\n\n\n\nlet track = document.querySelector('.carousel__track');\nlet slides = Array.from(track.children);\nlet currentImageIndex = 0;\n\nwindow.addEventListener('load', e => {\n    slides[0].classList.add('visible');\n    (0,_indicator__WEBPACK_IMPORTED_MODULE_1__.fillIndicator)(currentImageIndex);\n});\n\nlet leftButton = document.querySelector('.carousel__button--left');\nleftButton.addEventListener('click', e => {\n    setTimeout((0,_slider__WEBPACK_IMPORTED_MODULE_0__.previous)(), 5000);\n});\n\nlet rightButton = document.querySelector('.carousel__button--right');\nrightButton.addEventListener('click', e => {\n    setTimeout((0,_slider__WEBPACK_IMPORTED_MODULE_0__.next)(), 5000);\n});\n\n//# sourceURL=webpack://imageslider/./src/index2.js?");

/***/ }),

/***/ "./src/indicator.js":
/*!**************************!*\
  !*** ./src/indicator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillIndicator\": () => (/* binding */ fillIndicator),\n/* harmony export */   \"removeIndicator\": () => (/* binding */ removeIndicator)\n/* harmony export */ });\nconst fillIndicator = (imageIndex) => {\n    let nav = document.querySelector('.nav');\n    let indicators = Array.from(nav.children);\n    indicators[imageIndex].classList.add('filled');\n};\n\nconst removeIndicator = () => {\n    let visibleIndicator = document.querySelector('.filled');\n    visibleIndicator.classList.remove('filled');\n};\n\n\n\n//# sourceURL=webpack://imageslider/./src/indicator.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"next\": () => (/* binding */ next),\n/* harmony export */   \"previous\": () => (/* binding */ previous)\n/* harmony export */ });\n/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator */ \"./src/indicator.js\");\n\n\nlet track = document.querySelector('.carousel__track');\nlet slides = Array.from(track.children);\nlet currentImageIndex = 0;\n\nconst next = () => {\n    const arrayLength = slides.length;\n    let visibleImage = document.querySelector('.visible');\n    visibleImage.classList.toggle('visible');\n    (0,_indicator__WEBPACK_IMPORTED_MODULE_0__.removeIndicator)();\n    currentImageIndex = (currentImageIndex + 1) % arrayLength;\n    let currentImage = slides[currentImageIndex];\n    currentImage.classList.toggle('visible');\n    (0,_indicator__WEBPACK_IMPORTED_MODULE_0__.fillIndicator)(currentImageIndex);\n};\n\nconst previous = () => {\n    const arrayLength = slides.length;\n    let visibleImage = document.querySelector('.visible');\n    visibleImage.classList.toggle('visible');\n    (0,_indicator__WEBPACK_IMPORTED_MODULE_0__.removeIndicator)();\n    currentImageIndex = (currentImageIndex - 1 + arrayLength) % arrayLength;\n    let currentImage = slides[currentImageIndex];\n    currentImage.classList.add('visible');\n    (0,_indicator__WEBPACK_IMPORTED_MODULE_0__.fillIndicator)(currentImageIndex);\n};\n\n\n\n//# sourceURL=webpack://imageslider/./src/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index2.js");
/******/ 	
/******/ })()
;