/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"GridContainer\": function() { return /* binding */ GridContainer; },\n/* harmony export */   \"HeroList\": function() { return /* binding */ HeroList; },\n/* harmony export */   \"HeroResumeLink\": function() { return /* binding */ HeroResumeLink; },\n/* harmony export */   \"BlogCard\": function() { return /* binding */ BlogCard; },\n/* harmony export */   \"TitleContent\": function() { return /* binding */ TitleContent; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"Hr\": function() { return /* binding */ Hr; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; },\n/* harmony export */   \"UtilityList\": function() { return /* binding */ UtilityList; },\n/* harmony export */   \"ExternalLinks\": function() { return /* binding */ ExternalLinks; },\n/* harmony export */   \"TagList\": function() { return /* binding */ TagList; },\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({\n  displayName: \"ProjectsStyles__Img\",\n  componentId: \"l76idc-0\"\n})([\"width:100%;height:100%;object-fit:cover;overflow:hidden;\"]);\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"ProjectsStyles__GridContainer\",\n  componentId: \"l76idc-1\"\n})([\"display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media \", \"{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar HeroList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__HeroList\",\n  componentId: \"l76idc-2\"\n})([\"list-style-type:none;padding:0;display:flex;justify-content:left;margin:2.5rem 5px 15% 5px;\"]);\nvar HeroResumeLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"ProjectsStyles__HeroResumeLink\",\n  componentId: \"l76idc-3\"\n})([\"color:#FFFFFF;padding:1rem 1.5rem;transition:.4s ease;font-size:\", \";font-weight:600;align-items:center;justify-content:center;cursor:pointer;&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media \", \"{font-size:\", \";}@media \", \"{font-size:14px;}\"], function (_ref) {\n  var alt = _ref.alt;\n  return alt ? '20px' : '24px';\n}, function (props) {\n  return props.theme.breakpoints.md;\n}, function (_ref2) {\n  var alt = _ref2.alt;\n  return alt ? '20px' : '16px';\n}, function (props) {\n  return props.theme.breakpoints.sm;\n}); // font-size: 1.9rem;\n// background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};\n// border-radius: 15px;\n// transition: 0.3s;\n// &:hover{\n//   transform: scale(1.06);\n// }\n// `;\n\nvar BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__BlogCard\",\n  componentId: \"l76idc-4\"\n})([\"border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;transition:0.5s;&:hover{background:#001f3f;transform:scale(1.02);}@media \", \"{width:100%;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__TitleContent\",\n  componentId: \"l76idc-5\"\n})([\"text-align:center;z-index:20;width:100%;\"]);\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({\n  displayName: \"ProjectsStyles__HeaderThree\",\n  componentId: \"l76idc-6\"\n})([\"font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:\", \";\"], function (props) {\n  return props.title ? '3rem' : '2rem';\n});\nvar Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({\n  displayName: \"ProjectsStyles__Hr\",\n  componentId: \"l76idc-7\"\n})([\"width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;\"]);\nvar Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__Intro\",\n  componentId: \"l76idc-8\"\n})([\"width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"ProjectsStyles__CardInfo\",\n  componentId: \"l76idc-9\"\n})([\"width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media \", \"{padding:.3rem}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__UtilityList\",\n  componentId: \"l76idc-10\"\n})([\"list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;\"]);\nvar ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"ProjectsStyles__ExternalLinks\",\n  componentId: \"l76idc-11\"\n})([\"color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.3s;&:hover{background:#801414;transform:scale(1.05);}\"]);\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__TagList\",\n  componentId: \"l76idc-12\"\n})([\"display:flex;justify-content:space-around;padding:2rem;\"]);\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"ProjectsStyles__Tag\",\n  componentId: \"l76idc-13\"\n})([\"color:#d8bfbf;font-size:1.5rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanM/YzJiNCJdLCJuYW1lcyI6WyJJbWciLCJzdHlsZWQiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJIZXJvTGlzdCIsIkhlcm9SZXN1bWVMaW5rIiwiYWx0IiwibWQiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdFQUFUO0FBT0EsSUFBTUMsYUFBYSxHQUFHRCx5RUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFPakIsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUGlCLENBQW5CO0FBZ0JBLElBQU1DLFFBQVEsR0FBR04sb0VBQUg7QUFBQTtBQUFBO0FBQUEsbUdBQWQ7QUFRQSxJQUFNTyxjQUFjLEdBQUdQLG1FQUFIO0FBQUE7QUFBQTtBQUFBLGtXQUlkO0FBQUEsTUFBR1EsR0FBSCxRQUFHQSxHQUFIO0FBQUEsU0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUE1QjtBQUFBLENBSmMsRUFvQmxCLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBbkM7QUFBQSxDQXBCa0IsRUFxQlo7QUFBQSxNQUFHRCxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTVCO0FBQUEsQ0FyQlksRUF3QmxCLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQXhCa0IsQ0FBcEIsQyxDQWdDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1LLFFBQVEsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0xBVVYsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBVlUsQ0FBZDtBQWNBLElBQU1NLFlBQVksR0FBR1gscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0RBQWxCO0FBUUEsSUFBTVksV0FBVyxHQUFHWixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFLVCxVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDVyxLQUFOLEdBQWMsTUFBZCxHQUF1QixNQUFsQztBQUFBLENBTFMsQ0FBakI7QUFRQSxJQUFNQyxFQUFFLEdBQUdkLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDJFQUFSO0FBUUEsSUFBTWUsS0FBSyxHQUFHZixxRUFBSDtBQUFBO0FBQUE7QUFBQSxrSUFBWDtBQVdBLElBQU1nQixRQUFRLEdBQUdoQixtRUFBSDtBQUFBO0FBQUE7QUFBQSwrSEFPVixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQVSxDQUFkO0FBY0EsSUFBTVksV0FBVyxHQUFHakIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsaUdBQWpCO0FBUUEsSUFBTWtCLGFBQWEsR0FBR2xCLG1FQUFIO0FBQUE7QUFBQTtBQUFBLG1LQUFuQjtBQWFBLElBQU1tQixPQUFPLEdBQUduQixvRUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBYjtBQUtBLElBQU1vQixHQUFHLEdBQUdwQixvRUFBSDtBQUFBO0FBQUE7QUFBQSx1Q0FBVCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogM3JlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmBcblxuZXhwb3J0IGNvbnN0IEhlcm9MaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgbWFyZ2luOiAyLjVyZW0gNXB4IDE1JSA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVyb1Jlc3VtZUxpbmsgPSBzdHlsZWQuYWBcbmNvbG9yOiNGRkZGRkY7XG5wYWRkaW5nOjFyZW0gMS41cmVtO1xudHJhbnNpdGlvbjogLjRzIGVhc2U7XG5mb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG5mb250LXdlaWdodDogNjAwO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuY3Vyc29yOiBwb2ludGVyO1xuJjpob3ZlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4mOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiY6YWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xufVxuXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbn1cblxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5gXG5cblxuXG5cbi8vIGZvbnQtc2l6ZTogMS45cmVtO1xuLy8gYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcbi8vIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4vLyB0cmFuc2l0aW9uOiAwLjNzO1xuLy8gJjpob3Zlcntcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbi8vIH1cbi8vIGA7XG5cbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzljYzllMztcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogI2U0ZTZlNztcbiAgZm9udC1zdHlsZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOi4zcmVtXG5cbn1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbmNvbG9yOiNkNGMwYzA7XG5mb250LXNpemU6IDEuNnJlbTtcbnBhZGRpbmc6MXJlbSAxLjVyZW07XG5iYWNrZ3JvdW5kOiAjNmIzMDMwO1xuYm9yZGVyLXJhZGl1czogMTVweDtcbnRyYW5zaXRpb246IDAuM3M7XG4mOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5wYWRkaW5nOiAycmVtO1xuYFxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbmNvbG9yOiAjZDhiZmJmO1xuZm9udC1zaXplOiAxLjVyZW07XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Projects/ProjectsStyles.js\n");

/***/ })

});