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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"GridContainer\": function() { return /* binding */ GridContainer; },\n/* harmony export */   \"HeroList\": function() { return /* binding */ HeroList; },\n/* harmony export */   \"HeroResumeLink\": function() { return /* binding */ HeroResumeLink; },\n/* harmony export */   \"BlogCard\": function() { return /* binding */ BlogCard; },\n/* harmony export */   \"TitleContent\": function() { return /* binding */ TitleContent; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"Hr\": function() { return /* binding */ Hr; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; },\n/* harmony export */   \"UtilityList\": function() { return /* binding */ UtilityList; },\n/* harmony export */   \"ExternalLinks\": function() { return /* binding */ ExternalLinks; },\n/* harmony export */   \"TagList\": function() { return /* binding */ TagList; },\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({\n  displayName: \"ProjectsStyles__Img\",\n  componentId: \"l76idc-0\"\n})([\"width:100%;height:100%;object-fit:cover;overflow:hidden;\"]);\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"ProjectsStyles__GridContainer\",\n  componentId: \"l76idc-1\"\n})([\"display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media \", \"{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar HeroList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__HeroList\",\n  componentId: \"l76idc-2\"\n})([\"list-style-type:none;padding:0;display:flex;justify-content:left;margin:2.5rem 5px 15% 5px;\"]);\nvar HeroResumeLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"ProjectsStyles__HeroResumeLink\",\n  componentId: \"l76idc-3\"\n})([\"color:#FFFFFF;padding:1rem 1.5rem;background:\", \";border-radius:15px;transition:.3s;font-size:\", \";font-weight:600;align-items:center;justify-content:center;cursor:pointer;&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:hover{transform:scale(1.02);filter:brightness(110%);}\"], function (_ref) {\n  var alt = _ref.alt;\n  return alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';\n}, function (_ref2) {\n  var alt = _ref2.alt;\n  return alt ? '20px' : '24px';\n});\nvar BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__BlogCard\",\n  componentId: \"l76idc-4\"\n})([\"border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;transition:0.5s;&:hover{background:#001f3f;transform:scale(1.02);}@media \", \"{width:100%;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__TitleContent\",\n  componentId: \"l76idc-5\"\n})([\"text-align:center;z-index:20;width:100%;\"]);\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({\n  displayName: \"ProjectsStyles__HeaderThree\",\n  componentId: \"l76idc-6\"\n})([\"font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:\", \";\"], function (props) {\n  return props.title ? '3rem' : '2rem';\n});\nvar Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({\n  displayName: \"ProjectsStyles__Hr\",\n  componentId: \"l76idc-7\"\n})([\"width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;\"]);\nvar Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__Intro\",\n  componentId: \"l76idc-8\"\n})([\"width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"ProjectsStyles__CardInfo\",\n  componentId: \"l76idc-9\"\n})([\"width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media \", \"{padding:.3rem}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__UtilityList\",\n  componentId: \"l76idc-10\"\n})([\"list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;\"]);\nvar ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"ProjectsStyles__ExternalLinks\",\n  componentId: \"l76idc-11\"\n})([\"color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.3s;&:hover{background:#801414;transform:scale(1.05);}\"]);\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__TagList\",\n  componentId: \"l76idc-12\"\n})([\"display:flex;justify-content:space-around;padding:2rem;\"]);\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"ProjectsStyles__Tag\",\n  componentId: \"l76idc-13\"\n})([\"color:#d8bfbf;font-size:1.5rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanM/YzJiNCJdLCJuYW1lcyI6WyJJbWciLCJzdHlsZWQiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJIZXJvTGlzdCIsIkhlcm9SZXN1bWVMaW5rIiwiYWx0IiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnRUFBVDtBQU9BLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BT2pCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBpQixDQUFuQjtBQWdCQSxJQUFNQyxRQUFRLEdBQUdOLG9FQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFkO0FBUUEsSUFBTU8sY0FBYyxHQUFHUCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw0V0FHYjtBQUFBLE1BQUdRLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxtREFBSCxHQUF5RCxtREFBekU7QUFBQSxDQUhhLEVBT2Q7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTVCO0FBQUEsQ0FQYyxDQUFwQjtBQTBCQSxJQUFNQyxRQUFRLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtMQVVWLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVZVLENBQWQ7QUFjQSxJQUFNSyxZQUFZLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdEQUFsQjtBQVFBLElBQU1XLFdBQVcsR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEseUZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1UsS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbEM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHYixvRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFBUjtBQVFBLElBQU1jLEtBQUssR0FBR2QscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxJQUFNZSxRQUFRLEdBQUdmLG1FQUFIO0FBQUE7QUFBQTtBQUFBLCtIQU9WLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBVLENBQWQ7QUFjQSxJQUFNVyxXQUFXLEdBQUdoQixvRUFBSDtBQUFBO0FBQUE7QUFBQSxpR0FBakI7QUFRQSxJQUFNaUIsYUFBYSxHQUFHakIsbUVBQUg7QUFBQTtBQUFBO0FBQUEsbUtBQW5CO0FBYUEsSUFBTWtCLE9BQU8sR0FBR2xCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFiO0FBS0EsSUFBTW1CLEdBQUcsR0FBR25CLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVDQUFUIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmBcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG5wYWRkaW5nOiAzcmVtO1xucGxhY2UtaXRlbXM6IGNlbnRlcjtcbmNvbHVtbi1nYXA6IDJyZW07XG5yb3ctZ2FwOiAzcmVtO1xuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuYFxuXG5leHBvcnQgY29uc3QgSGVyb0xpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW46IDIuNXJlbSA1cHggMTUlIDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZXJvUmVzdW1lTGluayA9IHN0eWxlZC5hYFxuY29sb3I6I0ZGRkZGRjtcbnBhZGRpbmc6MXJlbSAxLjVyZW07XG5iYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuYm9yZGVyLXJhZGl1czogMTVweDtcblxudHJhbnNpdGlvbjogLjNzO1xuZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xuZm9udC13ZWlnaHQ6IDYwMDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmN1cnNvcjogcG9pbnRlcjtcbiY6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuJjphY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG59XG4mOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG59XG5gXG5cblxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMWYzZjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMTAwJTtcblxuYDtcblxuXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjOWNjOWUzO1xuICBwYWRkaW5nOiAuNXJlbSAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XG5gO1xuXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZGNlM2U3O1xuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMThweDtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiAjZTRlNmU3O1xuICBmb250LXN0eWxlOiAycmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6LjNyZW1cblxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuY29sb3I6I2Q0YzBjMDtcbmZvbnQtc2l6ZTogMS42cmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICM2YjMwMzA7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC4zcztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5gO1xuXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbnBhZGRpbmc6IDJyZW07XG5gXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmxpYFxuY29sb3I6ICNkOGJmYmY7XG5mb250LXNpemU6IDEuNXJlbTtcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/ProjectsStyles.js\n");

/***/ })

});