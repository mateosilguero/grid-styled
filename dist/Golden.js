'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.B = exports.A = exports.gb = exports.ga = exports.φ = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var φ = exports.φ = (1 + Math.sqrt(5)) / 2;
var ga = exports.ga = φ - 1;
var gb = exports.gb = 1 - ga;

var A = exports.A = function A(props) {
  return _react2.default.createElement(_Grid2.default, _extends({}, props, { width: [1, ga] }));
};
var B = exports.B = function B(props) {
  return _react2.default.createElement(_Grid2.default, _extends({}, props, { width: [1, gb] }));
};

var Golden = {
  A: A,
  B: B
};
Golden.displayName = 'Golden';

exports.default = Golden;