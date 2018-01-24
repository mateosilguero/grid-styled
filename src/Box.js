import React from 'react'
import styled from 'styled-components'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import tag from 'tag-hoc'
import propTypes from './propTypes'
import removeProps from './remove-props'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Tag = tag(removeProps)
const Base = Tag('div')

const Box = styled(Base)([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex,
  order
)
Box.displayName = 'Box'

const responsivePropType = oneOfType([
  number,
  string,
  array
])

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
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

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType
})

export default Box
