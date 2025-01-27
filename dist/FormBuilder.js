"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/FormBuilder.js
var FormBuilder = function FormBuilder(_ref) {
  var formSchema = _ref.formSchema,
    onSubmit = _ref.onSubmit;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];

  // Validation functions
  var validateField = function validateField(field, value) {
    var required = field.required,
      type = field.type;
    var error = '';
    if (required && !value) {
      error = "".concat(field.label, " is required");
    }
    if (type === 'email' && value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    if (type === 'url' && value && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value)) {
      error = 'Invalid URL';
    }
    if (type === 'password' && value && value.length < 6) {
      error = 'Password must be at least 6 characters';
    }
    return error;
  };
  var handleChange = function handleChange(field, value) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, field.name, value)));

    // Clear error when typing
    if (errors[field.name]) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, field.name, '')));
    }
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var newErrors = {};
    formSchema.forEach(function (field) {
      var error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, formSchema.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: field.name,
      style: {
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("label", null, field.label), field.type === 'text' && /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      value: formData[field.name] || '',
      onChange: function onChange(e) {
        return handleChange(field, e.target.value);
      },
      required: field.required
    }), field.type === 'email' && /*#__PURE__*/_react["default"].createElement("input", {
      type: "email",
      value: formData[field.name] || '',
      onChange: function onChange(e) {
        return handleChange(field, e.target.value);
      },
      required: field.required
    }), field.type === 'password' && /*#__PURE__*/_react["default"].createElement("input", {
      type: "password",
      value: formData[field.name] || '',
      onChange: function onChange(e) {
        return handleChange(field, e.target.value);
      },
      required: field.required
    }), field.type === 'date' && /*#__PURE__*/_react["default"].createElement("input", {
      type: "date",
      value: formData[field.name] || '',
      onChange: function onChange(e) {
        return handleChange(field, e.target.value);
      },
      required: field.required
    }), field.type === 'url' && /*#__PURE__*/_react["default"].createElement("input", {
      type: "url",
      value: formData[field.name] || '',
      onChange: function onChange(e) {
        return handleChange(field, e.target.value);
      },
      required: field.required
    }), errors[field.name] && /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: 'red'
      }
    }, errors[field.name]));
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit"
  }, "Submit"));
};
FormBuilder.propTypes = {
  formSchema: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].oneOf(['text', 'email', 'password', 'date', 'url']).isRequired,
    required: _propTypes["default"].bool
  })).isRequired,
  onSubmit: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = FormBuilder;