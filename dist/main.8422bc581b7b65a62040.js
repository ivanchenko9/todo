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

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    color: black;\\n    font-family: 'Roboto', sans-serif;\\n    background-color: #ebebe0;\\n}\\n\\n.container{\\n    margin: 20px 350px;\\n    padding: 15px;\\n}\\n.main__title{\\n    opacity: 0.5;\\n    font-size: 35px;\\n    text-align: center;\\n}\\n\\n.content{\\n}\\n.create__task{\\n    width: 100%;\\n    padding: 10px 5px;\\n    border: 2px solid black;\\n    border-radius: 3px;\\n    margin-bottom: 15px;\\n}\\n.confirme__all{\\n    margin-right: 5px;\\n}\\n.create__task__input{\\n    border-radius: 3px;\\n}\\n\\n.tasks{\\n\\n}\\n.task{\\n    width: 100%;\\n    display: flex;\\n    padding: 5px 5px;\\n    border: 2px solid black;\\n    border-radius: 3px;\\n    margin-bottom: 7px;\\n    \\n}\\n.task__status{\\n    width: 15%;\\n    height: auto;\\n}\\n.task__title{\\n    padding: 0px 10px;\\n    width: 80%;\\n    font-size: 18px;\\n}\\n.task__completed {\\n    text-decoration: line-through #000 !important;\\n    opacity: 0.4;\\n}\\n.task__delete{\\n    width: 10%;\\n    height: auto;\\n}\\n.display__settings{\\n    width: 100%;\\n    padding: 5px 5px;\\n    display: flex;\\n    justify-content: space-between;\\n    border: 2px solid black;\\n    border-radius: 3px;\\n}\\n.task__amount{\\n    font-size: 13px;\\n    opacity: 0.7;\\n    padding-left: 5px;\\n}\\n.display__modes{\\n    width: 40%;\\n    display: flex;\\n    justify-content: space-around;\\n}\\n.mode__all{}\\n.mode__active{}\\n.mode__completed{}\\n.clear__completed{\\n    font-size: 13px;\\n    opacity: 0.7;\\n    padding-right: 5px;\\n}\\n\\n.controled{}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeJS/store.js */ \"./js/storeJS/store.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeJS/reducers/todoReducer.js */ \"./js/storeJS/reducers/todoReducer.js\");\n\n//import Router from './Router.js'\n\n\n\n\n\nclass EventEmitter {\n    constructor() {\n      this.events = {};\n    }\n\n    subscribe(eventName, fn) {\n        if(!this.events[eventName]) {\n          this.events[eventName] = [];\n        }\n          \n        this.events[eventName].push(fn);\n        \n        return () => {\n          this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);\n        }\n      }\n\n    emit(eventName, data) {\n        const event = this.events[eventName];\n        if( event ) {\n          event.forEach(fn => {\n             fn.call(null, data);\n           });\n         }\n    }\n}\n\nclass Main{\n\n       constructor (tasksEnst, \n            todoAmountSelect, \n            tasksSelect, \n            createTaskInputSelector, \n            changeModeAllSelector, \n            changeModeActiveSelector, \n            changeModeCompletedSelector, \n            clearAllCompletedBtnSelector, \n            confirmeAllBtnSelector) {\n           this.tasksEnst = tasksEnst,\n           this.todoAmountSelector = document.querySelector(todoAmountSelect),\n           this.tasks = document.querySelector(tasksSelect),\n           this.createTaskInput= document.querySelector(createTaskInputSelector),\n           this.changeModeAll = document.querySelector(changeModeAllSelector),\n           this.changeModeActive = document.querySelector(changeModeActiveSelector),\n           this.changeModeCompleted = document.querySelector(changeModeCompletedSelector),\n           this.clearAllCompletedBtn = document.querySelector(clearAllCompletedBtnSelector),\n           this.confirmeAllBtn = document.querySelector(confirmeAllBtnSelector),\n           this.emitter = new EventEmitter()\n           \n       }\n\n       changeTasksAmount(){\n        if(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.length){\n            const todoAmount = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.reduce((total, curent) => {\n                if(!curent.isCompleted){\n                    return total + 1\n                } else {\n                    return total\n                }\n            }, 0)\n            this.todoAmountSelector.innerText = todoAmount\n        } else{\n            this.todoAmountSelector.innerText = '0'\n        }\n       }\n\n       creatTask(event){\n            const taskText = event.target.value\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.createTaskAC)(taskText))\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n            event.target.value=''\n            this.tasksEnst.saveDataOnLocaleStorage()\n       }\n\n       clearParentNode(){\n        const contentNode = document.querySelector('.content')\n        contentNode.removeChild(this.tasks)\n        this.tasks = document.createElement('div')\n        this.tasks.classList.add('tasks')\n        contentNode.appendChild(this.tasks)\n        this.tasks = document.querySelector('.tasks')\n       }\n       \n    displayTasks(selectedArray){\n              \n        this.clearParentNode()\n\n        if (selectedArray.length > 0) {\n            selectedArray.forEach(item => {\n\n                const itemTask = new TaskRender(item, this.tasks)\n                itemTask.render()\n\n                //binding buttons for change task status\n\n                const changeStatusBtns = document.querySelectorAll('.task__status')\n\n                changeStatusBtns.forEach(changeStatusBtn => {\n                    if (!changeStatusBtn.classList.contains('controled')){\n                    changeStatusBtn.addEventListener('click', (event) => {\n                        this.emitter.emit('event:change-status', event)\n                    })\n                    changeStatusBtn.classList.add('controled')\n                }\n            })\n\n                //binding buttons for delete task\n\n                const deleteTaskBtns = document.querySelectorAll('.task__delete')\n\n                deleteTaskBtns.forEach(deleteBtn => {\n                    if (!deleteBtn.classList.contains('controled')){\n                        deleteBtn.addEventListener('click', (event) => {\n                            this.emitter.emit('event:delete-task', event)\n                        })\n\n                        deleteBtn.classList.add('controled')\n                    }\n        })\n        \n                this.changeTasksAmount()\n                })\n        }\n       }\n\n       addEmitters(){\n        this.emitter.subscribe('event:create-task', (event) => {\n            this.creatTask(event)\n            this.tasksEnst.saveDataOnLocaleStorage()\n        })\n\n        this.emitter.subscribe('event:mode-all', () => {\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n        })\n\n        this.emitter.subscribe('event:mode-active', () => {\n            const todosActive = this.tasksEnst.getTodosInProgress()\n            this.displayTasks(todosActive)\n        })\n\n        this.emitter.subscribe('event:mode-completed', () => {\n            const todosCompleted = this.tasksEnst.getTodosDone()\n            this.displayTasks(todosCompleted)\n        })\n\n        this.emitter.subscribe('event:clear-all-completed', () => {\n            this.tasksEnst.clearAllCompletedTasks()\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n        })\n\n        this.emitter.subscribe('event:confirm-all', () => {\n            this.tasksEnst.confirmeAllTasks()\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n            this.tasksEnst.saveDataOnLocaleStorage()\n        })\n\n        this.emitter.subscribe('event:change-status', (event) => {\n            const newArray = this.tasksEnst.createChangedStatusArray(event)\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n            this.changeTasksAmount()\n            this.tasksEnst.saveDataOnLocaleStorage()\n        })\n\n        this.emitter.subscribe('event:delete-task', (event) => {\n            const newArray = this.tasksEnst.createAfterDeletingArray(event)\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n            this.changeTasksAmount()\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n            this.tasksEnst.saveDataOnLocaleStorage()\n        })\n\n       }\n\n        bindAllButtons(){\n            this.changeTasksAmount()\n            this.addEmitters()\n\n            this.createTaskInput.addEventListener('keydown', (event) => {\n                if(event.code === 'Enter'){\n                    if(event.target.value !== '') {\n                        this.emitter.emit('event:create-task', event)\n                    }\n                }\n            })\n        \n            this.changeModeAll.addEventListener('click', () => {\n                this.emitter.emit('event:mode-all')\n            })\n            \n            this.changeModeActive.addEventListener('click', () => {\n                this.emitter.emit('event:mode-active')\n            })\n        \n            this.changeModeCompleted.addEventListener('click', () => {\n                this.emitter.emit('event:mode-completed')\n            })\n        \n            this.clearAllCompletedBtn.addEventListener('click', () => {\n                this.emitter.emit('event:clear-all-completed')\n            })\n        \n            this.confirmeAllBtn.addEventListener('click', () => {\n                this.emitter.emit('event:confirm-all')\n            })\n        }\n\n        firstLoad(){\n            this.tasksEnst.getDataFromLocaleStorage()\n            this.displayTasks(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n            this.bindAllButtons()\n        }\n}\n\nclass Tasks{\n    getDataFromLocaleStorage(){\n        if(localStorage.getItem('todosAll') && localStorage.getItem('confirmeAllStatus')){\n            const rawArray = localStorage.getItem('todosAll'),\n                  newArray = JSON.parse(rawArray),\n                  newIsConfirmedAll = localStorage.getItem('confirmeAllStatus')\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setIsConfirmedAll)(newIsConfirmedAll))\n        }\n    }\n\n    saveDataOnLocaleStorage(){\n        const ModedArray = JSON.stringify(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll)\n        localStorage.setItem('todosAll', ModedArray)\n        localStorage.setItem('confirmeAllStatus', _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.confirmeAllStatus)\n    }\n\n    // addToTasks(taskText){\n    //     this.todosAll.push({\n    //         id: Date.now(),\n    //         isCompleted: false,\n    //         title: taskText\n    //     })\n    // }\n\n    createChangedStatusArray(event){\n        const newArray = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.map(todo => {\n            const searchedId = Number(event.target.parentNode.getAttribute('data'))\n            if(todo.id === searchedId) {\n                return {\n                    ...todo,\n                    isCompleted: !todo.isCompleted\n                }\n            } else {\n                return {...todo}\n            }\n        })\n        return newArray\n    }\n\n    createAfterDeletingArray(event){\n        const newArray = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.filter(todo => todo.id !== Number(event.target.parentNode.getAttribute('data')))\n        return newArray\n    }\n\n    getTodosInProgress(){\n        \n        const todosActive = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.filter((todo) => todo.isCompleted === false)\n        return todosActive\n    }\n\n    getTodosDone(){\n        const todosCompleted = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.filter((todo) => todo.isCompleted === true)\n        return todosCompleted\n    }\n\n    clearAllCompletedTasks(){\n        const newArray = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.filter(todo => todo.isCompleted !== true)\n        _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n        this.saveDataOnLocaleStorage()\n    }\n\n    confirmeAllTasks(){\n        if(_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.isConfirmedAll){\n             const newArray = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.map(todo => ({\n                ...todo,\n                isCompleted: false\n            }))\n            _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n        } else {\n            const newArray = _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.todosAll.map(todo => ({\n                ...todo,\n                isCompleted: true\n            }))\n        _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setTodosAll)(newArray))\n        }\n        _storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch((0,_storeJS_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_2__.setIsConfirmedAll)(!_storeJS_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState().tasksData.isConfirmedAll))\n        this.saveDataOnLocaleStorage()\n    }\n}\n\nclass TaskRender{\n       constructor(item, tasks){\n        this.id = item.id,\n        this.title = item.title,\n        this.isCompleted = item.isCompleted,\n        this.tasks = tasks\n       }\n\n       render(){\n            const task = document.createElement('div'),\n            taskStatus = document.createElement('button'),\n            taskTitle = document.createElement('p'),\n            taskDelete = document.createElement('button')\n\n            task.classList.add('task')\n            taskStatus.classList.add('task__status')\n            taskTitle.classList.add('task__title')\n            taskDelete.classList.add('task__delete')\n            if (this.isCompleted) {\n                taskTitle.classList.add('task__completed')\n            }\n\n            taskStatus.innerText = this.isCompleted?'Done':'In progress'\n            taskTitle.innerText = this.title\n            taskDelete.innerText = 'Delete'\n\n            task.setAttribute('data', this.id)\n            \n            task.append(taskStatus, taskTitle, taskDelete)\n            this.tasks.appendChild(task)\n       }\n}\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    // const root = document.getElementById(\"Root\")\n    // const myRouter = new Router ( 'myRouter', [\n    //     {\n    //         path: '/',\n    //         name: 'Root'\n    //     },\n    //     {\n    //         path: '/auth',\n    //         name: 'Auth'\n    //     },\n    //     {\n    //         path: '/registration',\n    //         name: 'Registration'\n    //     }\n    // ])\n    // const currentPath = window.location.pathname\n    // console.log(currentPath)\n    \n\n    // if(currentPath === '/'){\n    //     alert('Homepage')\n    // }\n    // else{\n    //     const route = myRouter.routes.filter((routeItem) => routeItem === currentPath)[0]\n    //     console.log(route)\n    // }\n\n\n    const tasksEnst = new Tasks(),\n          mainPage = new Main(\n              tasksEnst, \n              '.task__amount__data', \n              '.tasks', \n              '.create__task__input', \n              '.mode__all', \n              '.mode__active',\n              '.mode__completed',\n              '.clear__completed',\n              '.confirme__all'\n              )\n        \n        mainPage.firstLoad()\n})\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/storeJS/reducers/todoReducer.js":
/*!********************************************!*\
  !*** ./js/storeJS/reducers/todoReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskAC\": () => (/* binding */ createTaskAC),\n/* harmony export */   \"setIsConfirmedAll\": () => (/* binding */ setIsConfirmedAll),\n/* harmony export */   \"setTodosAll\": () => (/* binding */ setTodosAll),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SET_TODOS = 'SET_TODOS',\n      CHANGE_IS_CONFIRMED_ALL_STATUS = 'CHANGE_IS_CONFIRMED_ALL_STATUS',\n      CREATE_TASK = 'CREATE_TASK'\n\nconst todoReducer = (action, state) => {\n    switch (action.type){\n         case CHANGE_IS_CONFIRMED_ALL_STATUS:\n                return {\n                    ...state,\n                    isConfirmedAll: action.isConfirmedAll\n                }\n         case SET_TODOS:\n                return {\n                    ...state,\n                    todosAll : action.newArray\n                }\n         case CREATE_TASK:\n                const newTask = {\n                    id: Date.now(),\n                    isCompleted: false,\n                    title: action.taskText\n                }\n                return {\n                    ...state,\n                    todosAll : [...state.todosAll, newTask]\n                }\n            \n            default:\n                return state\n        }\n}\n\nconst createTaskAC = (taskText) => ({type: CREATE_TASK, taskText})\nconst setIsConfirmedAll = (isConfirmedAll) => ({type: CHANGE_IS_CONFIRMED_ALL_STATUS, isConfirmedAll})\nconst setTodosAll = (newArray) => ({type: SET_TODOS, newArray})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoReducer);\n\n//# sourceURL=webpack:///./js/storeJS/reducers/todoReducer.js?");

/***/ }),

/***/ "./js/storeJS/store.js":
/*!*****************************!*\
  !*** ./js/storeJS/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/todoReducer.js */ \"./js/storeJS/reducers/todoReducer.js\");\n\n\nclass Store {\n     constructor(){\n         this._state = {\n            tasksData:{\n                todosAll : [],\n                isConfirmedAll: false\n            }\n         }\n     }\n\n     getState(){\n         return this._state\n     }\n\n     dispatch(action){\n        this._state.tasksData = (0,_reducers_todoReducer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action, this._state.tasksData)\n      }\n}\n\nconst store = new Store()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n\n//# sourceURL=webpack:///./js/storeJS/store.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;