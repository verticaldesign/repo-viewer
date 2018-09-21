/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_repoContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/repoContainer.js */ \"./src/js/repoContainer.js\");\n\nObject(_js_repoContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dataFetcher.js":
/*!*******************************!*\
  !*** ./src/js/dataFetcher.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (search => {\n  const dataURL = \"https://api.github.com/users/\"; //verticaldesign/repos\";\n  //return fetch(`${dataURL}${search}/repos?authorization_request=${token}`)\n\n  return fetch(`${dataURL}${search}/repos`).then(data => data.json()).then(data => {\n    if (data.message) {\n      console.error(\"error\");\n    } else {\n      return data;\n    }\n  }).catch(e => console.error(\"error fetching data\"));\n});\n\n//# sourceURL=webpack:///./src/js/dataFetcher.js?");

/***/ }),

/***/ "./src/js/populateRepoList.js":
/*!************************************!*\
  !*** ./src/js/populateRepoList.js ***!
  \************************************/
/*! exports provided: populateRepoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateRepoList\", function() { return populateRepoList; });\nfunction populateRepoList(repoList) {\n  //console.table(repoList);\n  let simplifiedList = [...repoList].map(repo => {\n    return repo.name;\n  });\n  let list = document.createElement(\"ul\");\n  simplifiedList.map(row => {\n    let newRow = document.createElement(\"li\");\n    newRow.innerHTML = `${row}`;\n    list.appendChild(newRow);\n  });\n  console.log(list);\n  return list;\n  console.table(simplifiedList);\n}\n\n//# sourceURL=webpack:///./src/js/populateRepoList.js?");

/***/ }),

/***/ "./src/js/repoContainer.js":
/*!*********************************!*\
  !*** ./src/js/repoContainer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataFetcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataFetcher.js */ \"./src/js/dataFetcher.js\");\n/* harmony import */ var _populateRepoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateRepoList.js */ \"./src/js/populateRepoList.js\");\n/* harmony import */ var _searchBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBar.js */ \"./src/js/searchBar.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  let containerDiv = document.createElement(\"div\");\n  let resultsContainer = document.createElement(\"div\");\n  resultsContainer.setAttribute(\"id\", \"resultDiv\");\n  containerDiv.classList.add('main-container');\n  containerDiv.appendChild(Object(_searchBar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  containerDiv.appendChild(resultsContainer); //const theInput = document.querySelector('#searchInput');\n  //   dataFetch(dataURL).then(repoList => {\n  //     //containerDiv.appendChild(populateRepoList(repoList));\n  //     document.querySelector(\"body\").appendChild(containerDiv);\n  //     });\n\n  document.querySelector(\"body\").appendChild(containerDiv); //console.log(\"build\");\n});\n\n//# sourceURL=webpack:///./src/js/repoContainer.js?");

/***/ }),

/***/ "./src/js/searchBar.js":
/*!*****************************!*\
  !*** ./src/js/searchBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _populateRepoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateRepoList.js */ \"./src/js/populateRepoList.js\");\n/* harmony import */ var _dataFetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataFetcher.js */ \"./src/js/dataFetcher.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  let searchContainer = document.createElement(\"form\");\n  let searchInput = document.createElement(\"input\"); //const DATAURL = \"https://api.github.com/users/verticaldesign/repos\";\n\n  searchInput.setAttribute(\"type\", \"text\");\n  searchInput.setAttribute(\"id\", \"searchInput\");\n  let searchButton = document.createElement(\"button\");\n  searchButton.innerHTML = \"Search\";\n  searchContainer.appendChild(searchInput);\n  searchContainer.appendChild(searchButton);\n  searchContainer.addEventListener(\"submit\", e => {\n    e.preventDefault();\n    let resultContainer = document.querySelector(\"#resultDiv\");\n    let searchParameters = document.querySelector(\"#searchInput\").value;\n    resultContainer.innerHTML = \"\";\n    Object(_dataFetcher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(searchParameters).then(repoList => {\n      resultContainer.appendChild(Object(_populateRepoList_js__WEBPACK_IMPORTED_MODULE_0__[\"populateRepoList\"])(repoList));\n    });\n  }); //console.log(searchContainer);\n\n  return searchContainer;\n});\n\n//# sourceURL=webpack:///./src/js/searchBar.js?");

/***/ })

/******/ });