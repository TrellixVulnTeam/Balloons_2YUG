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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Montserrat', sans-serif;\\n  font-size: 0.75rem; }\\n\\n.header_main__nav {\\n  display: flex;\\n  height: 3rem;\\n  padding: 1rem 5rem;\\n  border-bottom: 0.1rem solid rgba(182, 182, 182, 0.75);\\n  background: rgba(255, 255, 255, 0.75);\\n  text-transform: uppercase; }\\n  .header_main__nav__logo {\\n    display: flex;\\n    align-items: center;\\n    flex: 1; }\\n    .header_main__nav__logo div {\\n      font-size: 1rem;\\n      margin-left: 1rem;\\n      font-weight: bold; }\\n    .header_main__nav__logo img {\\n      height: 100%; }\\n  .header_main__nav__menu {\\n    flex: 1; }\\n    .header_main__nav__menu--left ul {\\n      display: flex;\\n      list-style: none;\\n      justify-content: space-evenly; }\\n      .header_main__nav__menu--left ul li {\\n        text-align: end;\\n        flex: 1; }\\n      .header_main__nav__menu--left ul a {\\n        font-size: 1rem;\\n        text-decoration: none;\\n        font-weight: bold;\\n        color: #19191e; }\\n      .header_main__nav__menu--left ul a:hover {\\n        color: gray; }\\n\\n.footer {\\n  margin-top: 10%;\\n  height: 15vh;\\n  background: #a31b1b;\\n  color: #fff;\\n  padding: 1rem;\\n  display: flex;\\n  justify-content: space-around; }\\n  .footer a {\\n    color: #fff;\\n    text-decoration: none; }\\n  .footer li {\\n    list-style: none; }\\n  .footer__menu ul li {\\n    padding-bottom: 1rem; }\\n    .footer__menu ul li a:hover {\\n      color: #bdbdbd; }\\n  .footer__media {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n    .footer__media--one {\\n      height: 50%;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center; }\\n      .footer__media--one img {\\n        height: 100%; }\\n  .footer__up {\\n    position: relative; }\\n    .footer__up .balloon {\\n      position: absolute;\\n      left: 40%;\\n      width: 5rem;\\n      height: 5rem;\\n      background: white;\\n      border-radius: 50%;\\n      z-index: 2;\\n      animation: float 3s infinite;\\n      transition: all 0.4s ease-out;\\n      cursor: pointer; }\\n      .footer__up .balloon .arrow {\\n        position: absolute;\\n        border: solid #fff;\\n        border-width: 0 3px 3px 0;\\n        display: inline-block;\\n        padding: 3px;\\n        left: 6rem;\\n        top: 3.5rem; }\\n      .footer__up .balloon .arrow:nth-child(1) {\\n        top: 4rem; }\\n      .footer__up .balloon .arrow:nth-child(2) {\\n        top: 4.5rem; }\\n      .footer__up .balloon .right {\\n        transform: rotate(-90deg);\\n        -webkit-transform: rotate(-135deg); }\\n\\n@keyframes float {\\n  50% {\\n    transform: translateY(0.75rem); } }\\n    .footer__up .balloon:before {\\n      position: absolute;\\n      left: 0.5rem;\\n      content: \\\"\\\";\\n      width: 4rem;\\n      height: 5rem;\\n      background: #db8534;\\n      border-radius: 50%;\\n      z-index: 2; }\\n    .footer__up .balloon:after {\\n      position: absolute;\\n      top: 0;\\n      left: 1.5rem;\\n      content: \\\"\\\";\\n      width: 2rem;\\n      height: 5rem;\\n      background: white;\\n      border-radius: 50%;\\n      z-index: 2; }\\n    .footer__up .balloon:hover {\\n      opacity: 0.85; }\\n    .footer__up .bottom {\\n      background: #fff;\\n      position: absolute;\\n      height: 1rem;\\n      width: 2rem;\\n      left: 1.5rem;\\n      bottom: -0.5rem;\\n      z-index: 1; }\\n    .footer__up .bottom:after {\\n      position: absolute;\\n      bottom: -0.2rem;\\n      left: -0.1rem;\\n      content: \\\"\\\";\\n      width: 2.2rem;\\n      height: 0.3rem;\\n      background: #fff;\\n      z-index: 1; }\\n    .footer__up .basket {\\n      position: absolute;\\n      bottom: -3rem;\\n      left: 1.6rem;\\n      width: 1.8rem;\\n      height: 1rem;\\n      background: #fff;\\n      border-radius: 20%; }\\n    .footer__up .basket:before {\\n      content: \\\"\\\";\\n      position: absolute;\\n      background: #fff;\\n      left: -0.1rem;\\n      top: 0rem;\\n      width: 2rem;\\n      height: 0.2rem;\\n      z-index: 2;\\n      border-radius: 20%; }\\n    .footer__up .rope {\\n      position: absolute;\\n      left: 2.5rem;\\n      top: 5rem;\\n      height: 2rem;\\n      width: 0.1rem;\\n      background: #fff; }\\n    .footer__up .rope:before {\\n      content: \\\"\\\";\\n      position: absolute;\\n      top: 0.6rem;\\n      left: 0.70rem;\\n      height: 1.5rem;\\n      width: 0.1rem;\\n      background: #fff;\\n      z-index: 3;\\n      transform: rotate(20deg); }\\n    .footer__up .rope:after {\\n      content: \\\"\\\";\\n      position: absolute;\\n      top: 0.6rem;\\n      left: -0.80rem;\\n      height: 1.5rem;\\n      width: 0.1rem;\\n      background: #fff;\\n      z-index: 3;\\n      transform: rotate(-20deg); }\\n\\n.video-background {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  height: 100vh;\\n  z-index: -99;\\n  overflow: hidden; }\\n\\n.video-foreground,\\n.video-background iframe {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none; }\\n\\n#vidtop-content {\\n  top: 0;\\n  color: #fff; }\\n\\n@media (min-aspect-ratio: 16 / 9) {\\n  .video-foreground {\\n    height: 300%;\\n    top: -100%; } }\\n\\n@media (max-aspect-ratio: 16 / 9) {\\n  .video-foreground {\\n    width: 300%;\\n    left: -100%; } }\\n\\n.section-one {\\n  background: #fff;\\n  margin: 110vh 10% 0 10%;\\n  display: flex;\\n  width: 80%;\\n  height: 60%;\\n  justify-content: center; }\\n  .section-one__photo {\\n    position: relative;\\n    width: 100%;\\n    height: 25rem;\\n    flex: 1; }\\n    .section-one__photo--main img {\\n      position: absolute;\\n      margin-left: -30%;\\n      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover; }\\n    .section-one__photo--main .icon {\\n      position: absolute;\\n      width: 4rem;\\n      height: 4rem;\\n      background: #a31b1b;\\n      border-radius: 0.5rem;\\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }\\n    .section-one__photo--main--right {\\n      left: 40%;\\n      bottom: -2rem; }\\n      .section-one__photo--main--right img {\\n        width: 50%;\\n        object-fit: scale-down;\\n        margin-left: 1rem;\\n        clip-path: none; }\\n    .section-one__photo--main--left {\\n      left: -8%;\\n      top: -2rem; }\\n      .section-one__photo--main--left img {\\n        width: 50%;\\n        object-fit: scale-down;\\n        margin-left: 1rem;\\n        clip-path: none; }\\n  .section-one__text {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center; }\\n    .section-one__text--title {\\n      margin-bottom: 1rem;\\n      font-weight: bold;\\n      font-size: 1.5rem; }\\n    .section-one__text--desc {\\n      line-height: 1.5rem; }\\n\\n.section-two {\\n  margin: 10% 5% 0 5%;\\n  display: flex;\\n  justify-content: space-evenly; }\\n  .section-two__one {\\n    width: 25%;\\n    height: 35rem;\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    border-radius: 1rem;\\n    box-shadow: 0.3rem 0.3rem 0.8rem rgba(0, 0, 0, 0.9);\\n    cursor: pointer;\\n    overflow: hidden;\\n    transition: 0.5s ease; }\\n    .section-two__one--imgbox img {\\n      width: 100%;\\n      height: 15rem;\\n      object-fit: cover; }\\n    .section-two__one--date {\\n      margin-top: 1rem;\\n      color: #8f1b1b;\\n      font-weight: bold; }\\n    .section-two__one--title {\\n      font-size: 1.2rem;\\n      font-weight: bold; }\\n    .section-two__one--desc {\\n      line-height: 1.3rem;\\n      overflow: hidden; }\\n    .section-two__one--button {\\n      cursor: pointer;\\n      border: 0;\\n      background: #fff;\\n      color: #8f1b1b;\\n      font-weight: bold; }\\n      .section-two__one--button .arrow {\\n        border: solid #a31b1b;\\n        border-width: 0 3px 3px 0;\\n        display: inline-block;\\n        padding: 3px; }\\n      .section-two__one--button .right {\\n        transform: rotate(-45deg);\\n        -webkit-transform: rotate(-45deg); }\\n    .section-two__one__stats {\\n      margin-top: auto;\\n      display: flex;\\n      background: #a31b1b;\\n      color: white; }\\n      .section-two__one__stats--info {\\n        flex: 1;\\n        padding: 5%;\\n        height: 1rem;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center; }\\n        .section-two__one__stats--info--up {\\n          display: flex; }\\n        .section-two__one__stats--info--number {\\n          font-size: 1rem;\\n          font-weight: bold; }\\n        .section-two__one__stats--info--type {\\n          color: rgba(255, 255, 255, 0.75);\\n          text-transform: uppercase;\\n          font-size: 0.6rem; }\\n      .section-two__one__stats .special {\\n        border-left: #8f1b1b solid 0.1rem;\\n        border-right: #8f1b1b solid 0.1rem; }\\n  .section-two__one:hover {\\n    transform: scale(1.15);\\n    box-shadow: 0.3rem 0.3rem 0.8rem rgba(0, 0, 0, 0.9); }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpak/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpak/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpak/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpak/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\n\n\n//# sourceURL=webpack://webpak/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;