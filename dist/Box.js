'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.order = exports.flex = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _propTypes2 = require('./propTypes');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _removeProps = require('./remove-props');

var _removeProps2 = _interopRequireDefault(_removeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flex = exports.flex = (0, _styledSystem.responsiveStyle)('flex');
var order = exports.order = (0, _styledSystem.responsiveStyle)('order');

var Tag = (0, _tagHoc2.default)(_removeProps2.default);
var Base = Tag('div');

var Box = (0, _styledComponents2.default)(Base)([], { boxSizing: 'border-box' }, _styledSystem.width, _styledSystem.space, flex, order);
Box.displayName = 'Box';

var responsivePropType = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string, _propTypes.array]);

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
}

Box.propTypes = Object.assign({}, _propTypes3.default, {
  flex: responsivePropType,
  order: responsivePropType
});

exports.default = Box;