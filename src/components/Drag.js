import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { Card } from '../elements';
import styled from 'styled-components';

export default function Drag() {
  const [{ x, y, scale, dragClass }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    dragClass: ''
  }));

  const bind = useDrag(({ down, movement: [mx, my] }) =>
    set({
      x: down ? mx : 0,
      y: down ? my : 0,
      scale: down ? 1.1 : 1,
      dragClass: down ? 'dragging' : ''
    })
  );

  return (
    <animated.div {...bind()} style={{ x, y, scale }} class={dragClass}>
      <Card2>
        <h3>Drag me!</h3>
        {/* <h3>{{down ? `Oh yeah! :)` : `Drag me!`}</h3> */}
      </Card2>
    </animated.div>
  );
}

const Card2 = styled(Card)`
  min-width: 300px;
  margin: 1rem auto;
  padding: 2rem;
  z-index: 120;

  h3 {
    color: #363636;
    margin: 0;
  }

  .dragging & {
    background: orange;
    cursor: pointer;

    h3 {
      color: #ffffff;

      &:after {
        display: block;
        content: 'Awesome!';
      }
    }
  }
`;
