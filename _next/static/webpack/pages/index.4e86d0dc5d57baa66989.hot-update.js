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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ \"./src/styles/GlobalComponents/Button.js\");\n/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ \"./src/components/Hero/HeroStyles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/Coding Projects/portfolio_website/src/components/Hero/Hero.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = function Hero(props) {\n  var handleDownloadResume = function handleDownloadResume() {\n    // Replace 'YOUR_DROPBOX_LINK' with the actual public Dropbox link to your resume file\n    // const resumeDownloadLink = 'https://www.dropbox.com/s/xt216fffhdcou9z/Richard_Wang_Resume.pdf?dl=1';\n    var resumeDownloadLink = 'https://dl.dropboxusercontent.com/s/xt216fffhdcou9z/Richard_Wang_Resume.pdf?dl=1'; // Create a temporary link element\n\n    var downloadLink = document.createElement('a');\n    downloadLink.href = resumeDownloadLink;\n    downloadLink.download = 'resume.pdf';\n    downloadLink.target = '_blank';\n    downloadLink.rel = 'noopener noreferrer'; // Trigger the click event to initiate the download\n\n    downloadLink.click();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n      row: true,\n      nopadding: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n          main: true,\n          center: true,\n          children: \"Hi, I'm Richard \\uD83D\\uDC4B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n          children: \"I am a full-stack software engineer passionate about providing cutting-edge tech solutions to improve and enrich people's lives.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {\n            href: \"https://www.dropbox.com/s/xt216fffhdcou9z/Richard_Wang_Resume.pdf?dl=1\",\n            target: \"_blank\",\n            children: \"Download Resume\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzPzJiZDAiXSwibmFtZXMiOlsiSGVybyIsInByb3BzIiwiaGFuZGxlRG93bmxvYWRSZXN1bWUiLCJyZXN1bWVEb3dubG9hZExpbmsiLCJkb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQztBQUNBO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsa0ZBQTNCLENBSGlDLENBS2pDOztBQUNBLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0FGLGdCQUFZLENBQUNHLElBQWIsR0FBb0JKLGtCQUFwQjtBQUNBQyxnQkFBWSxDQUFDSSxRQUFiLEdBQXdCLFlBQXhCO0FBQ0FKLGdCQUFZLENBQUNLLE1BQWIsR0FBc0IsUUFBdEI7QUFDQUwsZ0JBQVksQ0FBQ00sR0FBYixHQUFtQixxQkFBbkIsQ0FWaUMsQ0FZakM7O0FBQ0FOLGdCQUFZLENBQUNPLEtBQWI7QUFDRCxHQWREOztBQWdCQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFTRSw4REFBQyxpRUFBRDtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQWUsZ0JBQUksRUFBQyx3RUFBcEI7QUFBNkYsa0JBQU0sRUFBQyxRQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBbUJELENBckNEOztLQUFNWCxJO0FBdUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgVXRpbGl0eUxpc3QsIEV4dGVybmFsTGlua3MgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZFJlc3VtZSA9ICgpID0+IHtcbiAgICAvLyBSZXBsYWNlICdZT1VSX0RST1BCT1hfTElOSycgd2l0aCB0aGUgYWN0dWFsIHB1YmxpYyBEcm9wYm94IGxpbmsgdG8geW91ciByZXN1bWUgZmlsZVxuICAgIC8vIGNvbnN0IHJlc3VtZURvd25sb2FkTGluayA9ICdodHRwczovL3d3dy5kcm9wYm94LmNvbS9zL3h0MjE2ZmZmaGRjb3U5ei9SaWNoYXJkX1dhbmdfUmVzdW1lLnBkZj9kbD0xJztcbiAgICBjb25zdCByZXN1bWVEb3dubG9hZExpbmsgPSAnaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3MveHQyMTZmZmZoZGNvdTl6L1JpY2hhcmRfV2FuZ19SZXN1bWUucGRmP2RsPTEnO1xuXG4gICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IGxpbmsgZWxlbWVudFxuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHJlc3VtZURvd25sb2FkTGluaztcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSAncmVzdW1lLnBkZic7XG4gICAgZG93bmxvYWRMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGRvd25sb2FkTGluay5yZWwgPSAnbm9vcGVuZXIgbm9yZWZlcnJlcic7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBjbGljayBldmVudCB0byBpbml0aWF0ZSB0aGUgZG93bmxvYWRcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgICAgICA8TGVmdFNlY3Rpb24+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5cbiAgICAgICAgICAgIEhpLCBJJ20gUmljaGFyZCDwn5GLXG4gICAgICAgICAgPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgSSBhbSBhIGZ1bGwtc3RhY2sgc29mdHdhcmUgZW5naW5lZXIgcGFzc2lvbmF0ZSBhYm91dCBwcm92aWRpbmcgY3V0dGluZy1lZGdlIHRlY2ggc29sdXRpb25zIHRvIGltcHJvdmUgYW5kIGVucmljaCBwZW9wbGUncyBsaXZlcy5cbiAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkUmVzdW1lfT5Eb3dubG9hZCBSZXN1bWU8L0J1dHRvbj4gKi99XG4gICAgICAgICAgey8qIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LmRyb3Bib3guY29tL3MveHQyMTZmZmZoZGNvdTl6L1JpY2hhcmRfV2FuZ19SZXN1bWUucGRmP2RsPTFcIj5Eb3dubG9hZCBSZXN1bWU8L0J1dHRvbj4gKi99XG4gICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj1cImh0dHBzOi8vd3d3LmRyb3Bib3guY29tL3MveHQyMTZmZmZoZGNvdTl6L1JpY2hhcmRfV2FuZ19SZXN1bWUucGRmP2RsPTFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZCBSZXN1bWU8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgPC9VdGlsaXR5TGlzdD5cbiAgICAgICAgPC9MZWZ0U2VjdGlvbj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hero/Hero.js\n");

/***/ })

});