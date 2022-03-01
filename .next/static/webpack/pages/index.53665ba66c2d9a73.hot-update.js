"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FontCard.js":
/*!************************************!*\
  !*** ./src/components/FontCard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FontCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _FontCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontCard.module.css */ \"./src/components/FontCard.module.css\");\n/* harmony import */ var _FontCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FontCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction FontCard(props) {\n    var variants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: (_FontCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        initial: \"hidden\",\n        animate: \"visible\",\n        exit: \"hidden\",\n        transition: {\n            delay: 1,\n            default: {\n                duration: 1\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_FontCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().fontName),\n                children: \"Roboto\"\n            }, void 0, false, {\n                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/components/FontCard.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_FontCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().pengram),\n                children: \"Sphinx of black quartz, judge my vow.\"\n            }, void 0, false, {\n                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/components/FontCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/components/FontCard.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_c = FontCard;\nvar _c;\n$RefreshReg$(_c, \"FontCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb250Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDWjtBQUNJO0FBRTNCLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1FBQ2hCQyxNQUFNLEVBQUUsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdEJDLE9BQU8sRUFBRSxDQUFDO1lBQUNELE9BQU8sRUFBRSxDQUFDO1FBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsTUFBTSw2RUFDSE4scURBQVU7UUFDVFMsU0FBUyxFQUFFUix1RUFBZ0I7UUFDM0JVLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBUztRQUNqQkMsSUFBSSxFQUFDLENBQVE7UUFDYkMsVUFBVSxFQUFFLENBQUM7WUFDWEMsS0FBSyxFQUFFLENBQUM7WUFDUkMsT0FBTyxFQUFFLENBQUM7Z0JBQUNDLFFBQVEsRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMxQixDQUFDOzt3RkFFQUMsQ0FBQztnQkFBQ1QsU0FBUyxFQUFFUixzRUFBZTswQkFBRSxDQUFNOzs7Ozs7d0ZBQ3BDbUIsQ0FBRTtnQkFBQ1gsU0FBUyxFQUFFUixxRUFBYzswQkFBRSxDQUFxQzs7Ozs7Ozs7Ozs7O0FBRzFFLENBQUM7S0FwQnVCQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZvbnRDYXJkLmpzP2I2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZvbnRDYXJkLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9udENhcmQocHJvcHMpIHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICBleGl0PVwiaGlkZGVuXCJcbiAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIGRlZmF1bHQ6IHsgZHVyYXRpb246IDEgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9udE5hbWV9PlJvYm90bzwvcD5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wZW5ncmFtfT5TcGhpbnggb2YgYmxhY2sgcXVhcnR6LCBqdWRnZSBteSB2b3cuPC9oMz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInN0eWxlcyIsIkZvbnRDYXJkIiwicHJvcHMiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZGVmYXVsdCIsImR1cmF0aW9uIiwicCIsImZvbnROYW1lIiwiaDMiLCJwZW5ncmFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FontCard.js\n");

/***/ })

});