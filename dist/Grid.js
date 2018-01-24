'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var align = function align(props) {
  return { verticalAlign: props.align || 'top' };
};

var Grid = (0, _styledComponents2.default)(_Box2.default)([], {
  display: 'inline-block'
}, align);
Grid.displayName = 'Grid';

exports.default = Grid;