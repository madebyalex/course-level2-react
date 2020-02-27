import React, { Component } from 'react';
import Portal from './Portal';
import Icon from '../utilities/Icon';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrap>
            <ModalBase>
              <CloseBtn onClick={toggle}>
                <Icon name='close' size={24} color='#262626' />
              </CloseBtn>
              {children}
            </ModalBase>
            <ModalOverlay onClick={toggle}></ModalOverlay>
          </ModalWrap>
        )}
      </Portal>
    );
  }
}

const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: teal; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBase = styled.div`
  background: #ffffff;
  min-width: 30rem;
  max-width: 90%;
  color: #212426;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  padding: 4rem 3rem;
  margin-bottom: 2rem;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #000000;
  opacity: 0.4;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 5px 0 5px;
  padding: 0.6em 0.6em;
  background: #eaeaea;
  font-size: 0.8rem;
  text-transform: uppercase;
  min-width: initial;
  margin: 0;
  box-shadow: inset 1px -1px 0 0 rgba(0, 0, 0, 0.1);
`;
