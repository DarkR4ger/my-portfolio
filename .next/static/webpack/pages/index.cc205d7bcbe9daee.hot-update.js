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

/***/ "./src/components/homecomponents/landing.jsx":
/*!***************************************************!*\
  !*** ./src/components/homecomponents/landing.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Landing() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let xPercent = 0;\n    let direction = -1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: 0.5,\n                start: 0,\n                end: window.innerHeight,\n                onUpdate: (e)=>direction = e.direction * -1\n            },\n            x: \"-500px\"\n        });\n        requestAnimationFrame(animate);\n    }, []);\n    const animate = ()=>{\n        if (xPercent < -100) {\n            xPercent = 0;\n        } else if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(secondText.current, {\n            xPercent: xPercent\n        });\n        requestAnimationFrame(animate);\n        xPercent += 0.1 * direction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container relative h-screen pt-20 flex flex-col overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"h-full flex flex-col justify-center items-center md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Hi There!, I'am \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-500 font-semibold\",\n                                            children: \"Gowtham\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 32\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"A Result's driven \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl text-red-500 font-semibold\",\n                                            children: \"FrontEnd Engineer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/programming-animate.svg\",\n                            alt: \"svg\",\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-[300px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: slider,\n                            className: \"relative whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: firstText,\n                                    className: \"relative m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    ref: secondText,\n                                    className: \"absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]\",\n                                    children: \"Love What You Do -\"\n                                }, void 0, false, {\n                                    fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"\",\n                        width: 41,\n                        height: 100,\n                        viewBox: \"0 0 247 390\",\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                        fillRule: \"evenodd\",\n                        clipRule: \"evenodd\",\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeMiterlimit: 1.5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                ref: wheel,\n                                id: \"wheels\",\n                                d: \"M123.359,79.775l0,72.843\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                id: \"mouse\",\n                                d: \"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z\",\n                                fill: \"none\",\n                                stroke: \"red\",\n                                strokeWidth: 20\n                            }, void 0, false, {\n                                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darkrager/project/portfolio/src/components/homecomponents/landing.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Landing, \"W4n5Jykyjp2aJJsxgZe8/ROuMtI=\");\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDbUI7QUFDekI7QUFDbUI7QUFFbkMsU0FBU087O0lBRXRCLE1BQU1DLFlBQVlQLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1TLFNBQVNULDZDQUFNQSxDQUFDO0lBRXRCLElBQUlVLFdBQVc7SUFDZixJQUFJQyxZQUFZLENBQUM7SUFFakJaLGdEQUFTQSxDQUFDO1FBQ1JFLGdEQUFJQSxDQUFDVyxjQUFjLENBQUNWLGtFQUFhQTtRQUNqQ0QsZ0RBQUlBLENBQUNZLEVBQUUsQ0FBQ0osT0FBT0ssT0FBTyxFQUFFO1lBQ3RCQyxlQUFlO2dCQUNiQyxTQUFTQyxTQUFTQyxlQUFlO2dCQUNqQ0MsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBS0MsT0FBT0MsV0FBVztnQkFDdkJDLFVBQVVDLENBQUFBLElBQUtkLFlBQVljLEVBQUVkLFNBQVMsR0FBRyxDQUFDO1lBQzVDO1lBQ0FlLEdBQUc7UUFDTDtRQUNBQyxzQkFBc0JDO0lBRXhCLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFVBQVU7UUFDZCxJQUFJbEIsV0FBVyxDQUFDLEtBQUs7WUFDbkJBLFdBQVc7UUFDYixPQUNLLElBQUlBLFdBQVcsR0FBRztZQUNyQkEsV0FBVyxDQUFDO1FBQ2Q7UUFDQVQsZ0RBQUlBLENBQUM0QixHQUFHLENBQUN0QixVQUFVTyxPQUFPLEVBQUU7WUFBRUosVUFBVUE7UUFBUztRQUNqRFQsZ0RBQUlBLENBQUM0QixHQUFHLENBQUNyQixXQUFXTSxPQUFPLEVBQUU7WUFBRUosVUFBVUE7UUFBUztRQUNsRGlCLHNCQUFzQkM7UUFDdEJsQixZQUFZLE1BQU1DO0lBQ3BCO0lBS0EscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQVFELFdBQVU7O2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7O3dDQUFFO3NEQUFnQiw4REFBQ0M7NENBQUtILFdBQVU7c0RBQTZCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFbEUsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRTs7d0NBQUU7c0RBQWtCLDhEQUFDQzs0Q0FBS0gsV0FBVTtzREFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcvRSw4REFBQ0Q7a0NBQ0MsNEVBQUMzQixtREFBS0E7NEJBQUNnQyxLQUFJOzRCQUFrQ0MsS0FBSTs0QkFBTUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9FLDhEQUFDTjtnQkFBUUQsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlTLEtBQUs5Qjs0QkFBUXNCLFdBQVU7OzhDQUMxQiw4REFBQ0U7b0NBQUVNLEtBQUtoQztvQ0FBV3dCLFdBQVU7OENBQStEOzs7Ozs7OENBQzVGLDhEQUFDRTtvQ0FBRU0sS0FBSy9CO29DQUFZdUIsV0FBVTs4Q0FBK0U7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlqSCw4REFBQ1M7d0JBQUlULFdBQVU7d0JBQUdNLE9BQU87d0JBQUlDLFFBQVE7d0JBQUtHLFNBQVE7d0JBQWNDLFNBQVE7d0JBQU1DLE9BQU07d0JBQTZCQyxZQUFXO3dCQUErQkMsVUFBUzt3QkFBVUMsVUFBUzt3QkFBVUMsZUFBYzt3QkFBUUMsZ0JBQWU7d0JBQVFDLGtCQUFrQjs7MENBQzlQLDhEQUFDQztnQ0FBS1gsS0FBS1k7Z0NBQU9DLElBQUc7Z0NBQVNDLEdBQUU7Z0NBQTJCQyxNQUFLO2dDQUFPQyxRQUFPO2dDQUFNQyxhQUFhOzs7Ozs7MENBQ2pHLDhEQUFDTjtnQ0FBS0UsSUFBRztnQ0FBUUMsR0FBRTtnQ0FBbU5DLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQU1DLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10UjtHQXhFd0JsRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lY29tcG9uZW50cy9sYW5kaW5nLmpzeD9kYzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcC9kaXN0L2dzYXAnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZygpIHtcblxuICBjb25zdCBmaXJzdFRleHQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNlY29uZFRleHQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNsaWRlciA9IHVzZVJlZihudWxsKTtcblxuICBsZXQgeFBlcmNlbnQgPSAwXG4gIGxldCBkaXJlY3Rpb24gPSAtMVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuICAgIGdzYXAudG8oc2xpZGVyLmN1cnJlbnQsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBzY3J1YjogMC41LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIG9uVXBkYXRlOiBlID0+IGRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uICogLTFcbiAgICAgIH0sXG4gICAgICB4OiAnLTUwMHB4JyxcbiAgICB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgaWYgKHhQZXJjZW50IDwgLTEwMCkge1xuICAgICAgeFBlcmNlbnQgPSAwXG4gICAgfVxuICAgIGVsc2UgaWYgKHhQZXJjZW50ID4gMCkge1xuICAgICAgeFBlcmNlbnQgPSAtMTAwO1xuICAgIH1cbiAgICBnc2FwLnNldChmaXJzdFRleHQuY3VycmVudCwgeyB4UGVyY2VudDogeFBlcmNlbnQgfSlcbiAgICBnc2FwLnNldChzZWNvbmRUZXh0LmN1cnJlbnQsIHsgeFBlcmNlbnQ6IHhQZXJjZW50IH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgeFBlcmNlbnQgKz0gMC4xICogZGlyZWN0aW9uXG4gIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGgtc2NyZWVuIHB0LTIwIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgIDxwPkhpIFRoZXJlISwgSSdhbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZFwiPkdvd3RoYW08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgPHA+QSBSZXN1bHQncyBkcml2ZW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGRcIj5Gcm9udEVuZCBFbmdpbmVlcjwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWFnZXMvcHJvZ3JhbW1pbmctYW5pbWF0ZS5zdmcnIGFsdD0nc3ZnJyB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gPjwvSW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLVszMDBweF1cIj5cbiAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgPHAgcmVmPXtmaXJzdFRleHR9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICAgIDxwIHJlZj17c2Vjb25kVGV4dH0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1mdWxsIHRvcC0wIG0tMCB0ZXh0LXJlZC01MDAgdGV4dC1bMjAwcHhdIGZvbnQtbWVkaXVtIHByLVs1MHB4XVwiPkxvdmUgV2hhdCBZb3UgRG8gLTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJcIiB3aWR0aD17NDF9IGhlaWdodD17MTAwfSB2aWV3Qm94PVwiMCAwIDI0NyAzOTBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9J2V2ZW5vZGQnIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VNaXRlcmxpbWl0PXsxLjV9ID5cbiAgICAgICAgICA8cGF0aCByZWY9e3doZWVsfSBpZD1cIndoZWVsc1wiIGQ9XCJNMTIzLjM1OSw3OS43NzVsMCw3Mi44NDNcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZVdpZHRoPXsyMH0gLz5cbiAgICAgICAgICA8cGF0aCBpZD1cIm1vdXNlXCIgZD1cIk0yMzYuNzE3LDEyMy4zNTljMCwtNjIuNTY1IC01MC43OTQsLTExMy4zNTkgLTExMy4zNTgsLTExMy4zNTljLTYyLjU2NSwwIC0xMTMuMzU5LDUwLjc5NCAtMTEzLjM1OSwxMTMuMzU5bDAsMTQzLjIzN2MwLDYyLjU2NSA1MC43OTQsMTEzLjM1OSAxMTMuMzU5LDExMy4zNTljNjIuNTY0LDAgMTEzLjM1OCwtNTAuNzk0IDExMy4zNTgsLTExMy4zNTlsMCwtMTQzLjIzN1pcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZVdpZHRoPXsyMH0gLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NlY3Rpb24gPlxuICAgIDwvZGl2ID5cbiAgKVxuXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJJbWFnZSIsIm1vdGlvbiIsInVzZVNjcm9sbCIsIkxhbmRpbmciLCJmaXJzdFRleHQiLCJzZWNvbmRUZXh0Iiwic2xpZGVyIiwieFBlcmNlbnQiLCJkaXJlY3Rpb24iLCJyZWdpc3RlclBsdWdpbiIsInRvIiwiY3VycmVudCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3J1YiIsInN0YXJ0IiwiZW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJvblVwZGF0ZSIsImUiLCJ4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsInNldCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJwIiwic3BhbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIiwic3ZnIiwidmlld0JveCIsInZlcnNpb24iLCJ4bWxucyIsInhtbG5zWGxpbmsiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInBhdGgiLCJ3aGVlbCIsImlkIiwiZCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/homecomponents/landing.jsx\n"));

/***/ })

});