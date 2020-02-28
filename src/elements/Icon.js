import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    const { name, size = 24, color = '#212426' } = this.props;

    switch (name) {
      case 'close':
        return (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 32 32'
            role='presentation'
          >
            <title>Close</title>
            <g
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              fill={color}
              stroke={color}
            >
              <line
                fill='none'
                stroke={color}
                stroke-miterlimit='10'
                x1='22'
                y1='10'
                x2='10'
                y2='22'
              ></line>{' '}
              <line
                fill='none'
                stroke={color}
                stroke-miterlimit='10'
                x1='22'
                y1='22'
                x2='10'
                y2='10'
              ></line>
            </g>
          </svg>
        );
      default:
        return;
    }
  }
}
