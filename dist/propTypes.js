'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var responsivePropType = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string, _propTypes.array]);

var propTypes = {
  width: responsivePropType,
  fontSize: responsivePropType,
  color: responsivePropType,
  bg: responsivePropType,
  m: responsivePropType,
  mt: responsivePropType,
  mr: responsivePropType,
  mb: responsivePropType,
  ml: responsivePropType,
  mx: responsivePropType,
  my: responsivePropType,
  p: responsivePropType,
  pt: responsivePropType,
  pr: responsivePropType,
  pb: responsivePropType,
  pl: responsivePropType,
  px: responsivePropType,
  py: responsivePropType
};

exports.default = propTypes;