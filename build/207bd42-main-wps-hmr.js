/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatep5_generator"]("main",{

/***/ "./components/EmotionMenu.tsx":
/*!************************************!*\
  !*** ./components/EmotionMenu.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar EmotionMenu = function (_a) {\n    var char = _a.char, emote = _a.emote, setEmote = _a.setEmote, setCostume = _a.setCostume, costume = _a.costume, emoteMenus = _a.emoteMenus, setCostumeMenus = _a.setCostumeMenus;\n    var charEmotes = [];\n    if (emoteMenus.length) {\n        charEmotes = emoteMenus.map(function (emotion) {\n            return (jsx_runtime_1.jsx(\"option\", __assign({ value: emotion }, { children: emotion }), char + \": \" + emotion));\n        });\n    }\n    ;\n    react_1.useEffect(function () {\n        fetch('http://localhost:3000/costumes', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({ 'emotion': \"https://p5generator.s3.amazonaws.com/images/portraits/\" + char + \"/\" + emote + \"/\" })\n        })\n            .then(function (data) { return data.json(); })\n            .then(function (parsed) {\n            setCostumeMenus(parsed);\n            if (!parsed.includes(costume)) {\n                setCostume(parsed[0]);\n            }\n        })\n            .catch(function (err) { return console.log(err); });\n    }, [char, emote]);\n    var switchEmote = function (e) {\n        return setEmote(e.target.value);\n    };\n    return (jsx_runtime_1.jsxs(\"div\", __assign({ className: 'menuDivs' }, { children: [jsx_runtime_1.jsx(\"div\", __assign({ className: 'menuLabels' }, { children: \"Emotion: \" }), void 0),\n            jsx_runtime_1.jsx(\"select\", __assign({ id: 'emoteMenu', className: 'menuOptions knife', value: emote, name: 'emotions', onChange: switchEmote }, { children: charEmotes }), void 0)] }), void 0));\n};\nexports.default = EmotionMenu;\n\n\n//# sourceURL=webpack://p5-generator/./components/EmotionMenu.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cbcb7df2538b91348981")
/******/ })();
/******/ 
/******/ }
);