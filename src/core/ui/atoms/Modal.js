import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    headerText: PropTypes.string,
    footer: PropTypes.node,
    className: PropTypes.string,
    animation: PropTypes.string,
    fullScreen: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { className, fullScreen, animation } = this.props;
    return ReactDOM.createPortal(
      <>
        <ModalBackdrop />
        <ModalWrap onClick={this.props.onClose}>
          <CSSTransition
            appear
            in
            classNames="modal"
            timeout={600}
          >
            <ModalContainer onClick={e => e.stopPropagation()}
              className={className}
              animation={animation}
              fullScreen={fullScreen}
            >
              <ModalBody >
                <Close onClick={this.props.onClose}>&times;</Close>
                {this.props.children}
              </ModalBody>
            </ModalContainer>
          </CSSTransition>
        </ModalWrap>
      </>,
      document.body,
    );
  }
}

const animations = {
  fromRight: css`
    &.modal-appear {
      transform: translate(100%, 0);
    }
    &.modal-appear-active {
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      transform: translate(0, 0);
    }
    &.modal-exit-active {
      transform: translate(100%, 0);
      transition: all 300ms ease-in;
    }
  `,
  fromBottom: css`
    &.modal-appear {
      transform: translate(0, 100%);
    }
    &.modal-appear-active {
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      transform: translate(0, 0);
    }
    &.modal-exit-active {
      transform: translate(0, 100%);
      transition: all 300ms ease-in;
    }
  `,
  fadeIn: css`
    &.modal-appear {
      opacity: 0;
    }
    &.modal-appear-active {
      opacity: 1;
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      opacity: 1;
    }
    &.modal-exit-active {
      opacity: 0;
      transition: all 300ms ease-in;
    }
  `,
  empty: css`
    &.modal-appear {
    }
    &.modal-appear-active {
    }
    &.modal-exit {
    }
    &.modal-exit-active {
    }
  `,
};

const ModalBackdrop = styled.div`
  position:fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1071;
  background: ${p => rgba(p.theme.colors.black, 0.3)};
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  z-index: 1072;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  margin: 1.75rem auto;
  width: 700px;
  ${p => p.fullScreen && css`
    width: 100vw;
    height: 100vh;
  `}
  ${p => animations[p.animation] || animations.empty}
  ${p => p.theme.max('sm')`
    width: 100%;
    height: 85vh;
    display: flex;
    top: auto;
    flex-direction: column;
    justify-content: center;
    bottom: -5px;
    left: 0;
    transform: translate(0, 0);
  `}
`;

const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 7px;
  color: ${p => p.theme.colors.primary};
  font-size: 32px;
  z-index: 2;
  cursor: pointer;
  ${p => p.theme.min('md')`
    &:hover {
      color: ${p => p.theme.colors.black};
    }
  `}
`;

const ModalBody = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 10px;
  outline: 0;
  padding: 40px;
`;

export default Modal;
