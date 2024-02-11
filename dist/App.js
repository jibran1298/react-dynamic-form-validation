"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _FormBuilder = _interopRequireDefault(require("./FormBuilder"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/App.js

var formSchema = [{
  name: 'firstName',
  label: 'First Name',
  type: 'text',
  required: true
}, {
  name: 'email',
  label: 'Email Address',
  type: 'email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  required: true
}, {
  name: 'dateOfBirth',
  label: 'Date of Birth',
  type: 'date',
  required: true
}, {
  name: 'website',
  label: 'Personal Website',
  type: 'url'
}];
var App = function App() {
  var handleSubmit = function handleSubmit(formData) {
    console.log('Form Submitted:', formData);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Dynamic Form Builder Demo"), /*#__PURE__*/_react["default"].createElement(_FormBuilder["default"], {
    formSchema: formSchema,
    onSubmit: handleSubmit
  }));
};
var _default = exports["default"] = App;