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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FontCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FontCard */ \"./src/components/FontCard.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./src/pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    //count questions\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), qCount = ref[0], setQCount = ref[1];\n    var handleQCount = function() {\n        setQCount(qCount + 1);\n        console.log(\"clicked\");\n    };\n    //mount and unmounct card\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), cardState = ref1[0], setCardState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(cardState);\n        //remount\n        if (!cardState) {\n            setTimeout(function() {\n                //your code to be executed after 1 second\n                setCardState(!cardState);\n            }, 1000);\n        }\n    }, [\n        cardState\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.main, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crowdsourcing Font Preferences\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().globalContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftCol),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().topLeft),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().question),\n                                                children: \" Choose a font that feels\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().adjective),\n                                                children: \" Playful\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().bottomLeft),\n                                        children: [\n                                            \"Q\",\n                                            qCount,\n                                            \"/10\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().rightCol),\n                                children: [\n                                    cardState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().topRight),\n                                        onClick: function() {\n                                            setCardState(!cardState);\n                                            handleQCount;\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FontCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    cardState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                        onClick: function() {\n                                            setCardState(!cardState);\n                                            handleQCount;\n                                        },\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().bottomRight),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FontCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephzhang/Documents/***GITHUB REPOS***/Crowdsourcing-Font-Preferences/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"oMbw6Jh8YTTD1ip7H6Q9mf1LfXo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDb0I7QUFDTDtBQUNOO0FBQ0U7QUFDSDs7QUFFdkIsUUFBUSxDQUFDUyxJQUFJLEdBQUcsQ0FBQzs7SUFDOUIsRUFBaUI7SUFDakIsR0FBSyxDQUF1Qk4sR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBL0JPLE1BQU0sR0FBZVAsR0FBVyxLQUF4QlEsU0FBUyxHQUFJUixHQUFXO0lBRXZDLEdBQUssQ0FBQ1MsWUFBWSxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7UUFDMUJELFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLENBQUM7UUFDcEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7SUFDdkIsQ0FBQztJQUVELEVBQXlCO0lBQ3pCLEdBQUssQ0FBNkJYLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDWSxTQUFTLEdBQWtCWixJQUFjLEtBQTlCYSxZQUFZLEdBQUliLElBQWM7SUFFaERDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1FBRXJCLEVBQVM7UUFDVCxFQUFFLEdBQUdBLFNBQVMsRUFBRSxDQUFDO1lBQ2ZFLFVBQVUsQ0FBQyxRQUNqQixHQUR1QixDQUFDO2dCQUNoQixFQUF5QztnQkFDekNELFlBQVksRUFBRUQsU0FBUztZQUN6QixDQUFDLEVBQUUsSUFBSTtRQUNULENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsU0FBUztJQUFBLENBQUM7SUFFZCxNQUFNLDZFQUNIUCxzREFBVzs7d0ZBR1RSLGtEQUFJOztnR0FDRm1CLENBQUs7a0NBQUMsQ0FBOEI7Ozs7OztnR0FDcENDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7OztnR0FDOURDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUdyQ0MsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFckIsMEVBQXNCOztnR0FDbkNDLDBEQUFNOzs7OztnR0FDTm1CLENBQUc7d0JBQUNDLFNBQVMsRUFBRXJCLG9FQUFnQjs7d0dBQzdCb0IsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFckIsa0VBQWM7O2dIQUMzQm9CLENBQUc7d0NBQUNDLFNBQVMsRUFBRXJCLGtFQUFjOzt3SEFDM0IwQixDQUFFO2dEQUFDTCxTQUFTLEVBQUVyQixtRUFBZTswREFBRSxDQUF5Qjs7Ozs7O3dIQUN4RDRCLENBQUU7Z0RBQUNQLFNBQVMsRUFBRXJCLG9FQUFnQjswREFBRSxDQUFROzs7Ozs7Ozs7Ozs7Z0hBRzFDOEIsQ0FBRTt3Q0FBQ1QsU0FBUyxFQUFFckIscUVBQWlCOzs0Q0FBRSxDQUFDOzRDQUFDSSxNQUFNOzRDQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7d0dBRS9DZ0IsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFckIsbUVBQWU7O29DQUM1QlMsU0FBUyxnRkFDUFAscURBQVU7d0NBQ1RtQixTQUFTLEVBQUVyQixtRUFBZTt3Q0FDMUJrQyxPQUFPLEVBQUUsUUFDekIsR0FEK0IsQ0FBQzs0Q0FDZHhCLFlBQVksRUFBRUQsU0FBUzs0Q0FDdkJILFlBQVk7d0NBQ2QsQ0FBQzs4SEFFQVAsNERBQVE7Ozs7Ozs7Ozs7b0NBSVpVLFNBQVMsZ0ZBQ1BQLHFEQUFVO3dDQUNUZ0MsT0FBTyxFQUFFLFFBQ3pCLEdBRCtCLENBQUM7NENBQ2R4QixZQUFZLEVBQUVELFNBQVM7NENBQ3ZCSCxZQUFZO3dDQUNkLENBQUM7d0NBQ0RlLFNBQVMsRUFBRXJCLHNFQUFrQjs4SEFFNUJELDREQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCLENBQUM7R0ExRXVCSSxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvbnRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZvbnRDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvL2NvdW50IHF1ZXN0aW9uc1xuICBjb25zdCBbcUNvdW50LCBzZXRRQ291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlUUNvdW50ID0gKCkgPT4ge1xuICAgIHNldFFDb3VudChxQ291bnQgKyAxKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gIH07XG5cbiAgLy9tb3VudCBhbmQgdW5tb3VuY3QgY2FyZFxuICBjb25zdCBbY2FyZFN0YXRlLCBzZXRDYXJkU3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYXJkU3RhdGUpO1xuXG4gICAgLy9yZW1vdW50XG4gICAgaWYgKCFjYXJkU3RhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvL3lvdXIgY29kZSB0byBiZSBleGVjdXRlZCBhZnRlciAxIHNlY29uZFxuICAgICAgICBzZXRDYXJkU3RhdGUoIWNhcmRTdGF0ZSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtjYXJkU3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24ubWFpblxuICAgIC8vIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyb3dkc291cmNpbmcgRm9udCBQcmVmZXJlbmNlczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdsb2JhbENvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb2x9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BMZWZ0fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ufT4gQ2hvb3NlIGEgZm9udCB0aGF0IGZlZWxzPC9oMj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmFkamVjdGl2ZX0+IFBsYXlmdWw8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21MZWZ0fT5Re3FDb3VudH0vMTA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb2x9PlxuICAgICAgICAgICAge2NhcmRTdGF0ZSAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9wUmlnaHR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0Q2FyZFN0YXRlKCFjYXJkU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlUUNvdW50O1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udENhcmQ+PC9Gb250Q2FyZD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NhcmRTdGF0ZSAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0Q2FyZFN0YXRlKCFjYXJkU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlUUNvdW50O1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tUmlnaHR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udENhcmQ+PC9Gb250Q2FyZD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb250Q2FyZCIsInN0eWxlcyIsIk5hdmJhciIsIm1vdGlvbiIsIkhvbWUiLCJxQ291bnQiLCJzZXRRQ291bnQiLCJoYW5kbGVRQ291bnQiLCJjb25zb2xlIiwibG9nIiwiY2FyZFN0YXRlIiwic2V0Q2FyZFN0YXRlIiwic2V0VGltZW91dCIsIm1haW4iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2xvYmFsQ29udGFpbmVyIiwiY29udGFpbmVyIiwibGVmdENvbCIsInRvcExlZnQiLCJoMiIsInF1ZXN0aW9uIiwiaDEiLCJhZGplY3RpdmUiLCJoMyIsImJvdHRvbUxlZnQiLCJyaWdodENvbCIsInRvcFJpZ2h0Iiwib25DbGljayIsImJvdHRvbVJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});