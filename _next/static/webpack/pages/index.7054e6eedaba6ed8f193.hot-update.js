/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ \"./src/styles/GlobalComponents/Button.js\");\n/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ \"./src/components/Hero/HeroStyles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/Coding Projects/portfolio_website/src/components/Hero/Hero.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = function Hero(props) {\n  var handleDownloadResume = function handleDownloadResume() {\n    // Replace 'YOUR_DROPBOX_LINK' with the actual public Dropbox link to your resume file\n    var resumeDownloadLink = 'https://www.dropbox.com/s/xt216fffhdcou9z/Richard_Wang_Resume.pdf?dl=1'; // Create a temporary link element\n\n    var downloadLink = document.createElement('a');\n    downloadLink.href = resumeDownloadLink;\n    downloadLink.download = 'resume.pdf';\n    downloadLink.target = '_blank';\n    downloadLink.rel = 'noopener noreferrer'; // Trigger the click event to initiate the download\n\n    downloadLink.click();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n      row: true,\n      nopadding: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n          main: true,\n          center: true,\n          children: \"Hi, I'm Richard \\uD83D\\uDC4B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n          children: \"I am a full-stack software engineer passionate about providing cutting-edge tech solutions to improve and enrich people's lives.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n          onClick: handleDownloadResume,\n          children: \"Download Resume\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzPzJiZDAiXSwibmFtZXMiOlsiSGVybyIsInByb3BzIiwiaGFuZGxlRG93bmxvYWRSZXN1bWUiLCJyZXN1bWVEb3dubG9hZExpbmsiLCJkb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQztBQUNBLFFBQU1DLGtCQUFrQixHQUFHLHdFQUEzQixDQUZpQyxDQUlqQzs7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBRixnQkFBWSxDQUFDRyxJQUFiLEdBQW9CSixrQkFBcEI7QUFDQUMsZ0JBQVksQ0FBQ0ksUUFBYixHQUF3QixZQUF4QjtBQUNBSixnQkFBWSxDQUFDSyxNQUFiLEdBQXNCLFFBQXRCO0FBQ0FMLGdCQUFZLENBQUNNLEdBQWIsR0FBbUIscUJBQW5CLENBVGlDLENBV2pDOztBQUNBTixnQkFBWSxDQUFDTyxLQUFiO0FBQ0QsR0FiRDs7QUFlQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRSw4REFBQyxvRUFBRDtBQUFRLGlCQUFPLEVBQUVULG9CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQsQ0FqQ0Q7O0tBQU1GLEk7QUFtQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgTGVmdFNlY3Rpb24gfSBmcm9tICcuL0hlcm9TdHlsZXMnO1xuXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWRSZXN1bWUgPSAoKSA9PiB7XG4gICAgLy8gUmVwbGFjZSAnWU9VUl9EUk9QQk9YX0xJTksnIHdpdGggdGhlIGFjdHVhbCBwdWJsaWMgRHJvcGJveCBsaW5rIHRvIHlvdXIgcmVzdW1lIGZpbGVcbiAgICBjb25zdCByZXN1bWVEb3dubG9hZExpbmsgPSAnaHR0cHM6Ly93d3cuZHJvcGJveC5jb20vcy94dDIxNmZmZmhkY291OXovUmljaGFyZF9XYW5nX1Jlc3VtZS5wZGY/ZGw9MSc7XG5cbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgbGluayBlbGVtZW50XG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gcmVzdW1lRG93bmxvYWRMaW5rO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9ICdyZXN1bWUucGRmJztcbiAgICBkb3dubG9hZExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG93bmxvYWRMaW5rLnJlbCA9ICdub29wZW5lciBub3JlZmVycmVyJztcblxuICAgIC8vIFRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50IHRvIGluaXRpYXRlIHRoZSBkb3dubG9hZFxuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XG4gICAgICAgIDxMZWZ0U2VjdGlvbj5cbiAgICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxuICAgICAgICAgICAgSGksIEknbSBSaWNoYXJkIPCfkYtcbiAgICAgICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICBJIGFtIGEgZnVsbC1zdGFjayBzb2Z0d2FyZSBlbmdpbmVlciBwYXNzaW9uYXRlIGFib3V0IHByb3ZpZGluZyBjdXR0aW5nLWVkZ2UgdGVjaCBzb2x1dGlvbnMgdG8gaW1wcm92ZSBhbmQgZW5yaWNoIHBlb3BsZSdzIGxpdmVzLlxuICAgICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZFJlc3VtZX0+RG93bmxvYWQgUmVzdW1lPC9CdXR0b24+XG4gICAgICAgICAgey8qIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LmRyb3Bib3guY29tL3MveHQyMTZmZmZoZGNvdTl6L1JpY2hhcmRfV2FuZ19SZXN1bWUucGRmP2RsPTFcIj5Eb3dubG9hZCBSZXN1bWU8L0J1dHRvbj4gKi99XG4gICAgICAgIDwvTGVmdFNlY3Rpb24+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hero/Hero.js\n");

/***/ })

});