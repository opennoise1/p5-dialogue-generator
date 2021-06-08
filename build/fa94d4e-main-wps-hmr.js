/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatep5_generator"]("main",{

/***/ "./components/ImageCanvas.tsx":
/*!************************************!*\
  !*** ./components/ImageCanvas.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar portraitPositions_1 = __webpack_require__(/*! ../utils/portraitPositions */ \"./utils/portraitPositions.js\");\nvar ImageCanvas = function (_a) {\n    var portrait = _a.portrait, text = _a.text, font = _a.font, char = _a.char, emote = _a.emote, costume = _a.costume, box = _a.box;\n    var portraitCanvas = react_1.useRef(null);\n    var boxCanvas = react_1.useRef(null);\n    var textCanvas = react_1.useRef(null);\n    var character = react_1.useRef(null);\n    var dialogueBox = react_1.useRef(null);\n    var pCtx;\n    var bCtx;\n    var tCtx;\n    react_1.useEffect(function () {\n        tCtx = textCanvas.current.getContext('2d');\n        tCtx.fillStyle = '#FFFFFF';\n        tCtx.font = \"18pt \" + font;\n        tCtx.clearRect(0, 0, 1275, 500);\n        var rows = text.split('\\n');\n        if (rows[1] === undefined)\n            rows[1] = '';\n        if (rows[2] === undefined)\n            rows[2] = '';\n        if (rows[0] && rows[1] && !rows[2]) {\n            tCtx.fillText(rows[0], 500, 387);\n            tCtx.fillText(rows[1], 500, 417);\n            return;\n        }\n        tCtx.fillText(rows[0], 500, 373);\n        tCtx.fillText(rows[1], 500, 403);\n        tCtx.fillText(rows[2], 500, 433);\n        return;\n    }, [text, font]);\n    var drawPortrait = function (charImage, portraitXY, w, h) {\n        pCtx = portraitCanvas.current.getContext('2d');\n        pCtx.clearRect(0, 0, 1275, 500);\n        var x;\n        var y;\n        if (!portraitPositions_1.simplePositions[char]) {\n            var specialPosition = portraitPositions_1.findSpecialPosition(char, emote, costume);\n            x = specialPosition[0];\n            y = specialPosition[1];\n        }\n        else {\n            x = portraitXY[0];\n            y = portraitXY[1];\n        }\n        pCtx.drawImage(charImage, x, y, w, h);\n        return;\n    };\n    var drawBox = function (boxImage) {\n        bCtx = boxCanvas.current.getContext('2d');\n        var width = boxImage.width;\n        var height = boxImage.height;\n        var heightOffset = height - 250;\n        bCtx.clearRect(0, 0, 1275, 500);\n        bCtx.drawImage(boxImage, 320, 250 - heightOffset, width, height);\n        return;\n    };\n    return (jsx_runtime_1.jsxs(\"main\", __assign({ id: 'canvasDiv' }, { children: [jsx_runtime_1.jsx(\"canvas\", __assign({ ref: portraitCanvas, id: 'portraitCanvas', width: '1275', height: '500' }, { children: \"Sorry! This generator requires a browser that supports HTML5!\" }), void 0),\n            jsx_runtime_1.jsx(\"canvas\", __assign({ ref: boxCanvas, id: 'boxCanvas', width: '1275', height: '500' }, { children: \"Sorry! This generator requires a browser that supports HTML5!\" }), void 0),\n            jsx_runtime_1.jsx(\"canvas\", __assign({ ref: textCanvas, id: 'textCanvas', width: '1275', height: '500' }, { children: \"Sorry! This generator requires a browser that supports HTML5!\" }), void 0),\n            jsx_runtime_1.jsx(\"img\", { alt: 'Potrait', ref: character, id: 'portrait', className: 'hidden', crossOrigin: \"anonymous\", src: portrait, onLoad: function () { return drawPortrait(character.current, portraitPositions_1.simplePositions[char], 500, 500); } }, void 0),\n            jsx_runtime_1.jsx(\"img\", { alt: 'Dialogue box', ref: dialogueBox, id: 'box', className: 'hidden', crossOrigin: \"anonymous\", src: box, onLoad: function () { return drawBox(dialogueBox.current); } }, void 0)] }), void 0));\n};\nexports.default = ImageCanvas;\n\n\n//# sourceURL=webpack://p5-generator/./components/ImageCanvas.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c33bbcd61a9bfa42e8fb")
/******/ })();
/******/ 
/******/ }
);