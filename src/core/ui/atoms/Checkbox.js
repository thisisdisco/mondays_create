import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Icon from './Icon';

class Checkbox extends PureComponent {
  static propTypes = {
    wizard: PropTypes.bool,
    checked: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
  };

  static defaultProps = {
    wizard: false,
    checked: false,
    width: '18px',
    height: '18px',
    borderRadius: '0'
  };

  render() {
    const { wizard, checked, width, height, borderRadius } = this.props;

    return (
      <CheckboxCont checked={checked} width={width} height={height} wizard={wizard} borderRadius={borderRadius}>
        <Input {...this.props} type="checkbox"/>
        {checked && <CheckIcon wizard={wizard}/>}
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  display:inline-block;
  width: ${p => p.width};
  height: ${p => p.height};
  border: 1px solid ${p => p.theme.colors.gray.regular};
  border-radius: ${p => p.borderRadius};
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  ${p => p.theme.max('md')`
    ${p => !p.wizard && css`
      width: 32px;
      height: 32px;
    `}
  `}
`;

const CheckIcon = styled(p => <Icon icon="check" {...p} />)`
  top: -27%;
  font-size: 20px;
  line-height: 1;
  pointer-events: none;
  position: absolute;
  left: 0;
  color: ${p => p.theme.colors.black};
  ${p => p.theme.max('md')`
    ${p => !p.wizard && css`
      font-size: 35px;
    `}
  `}
`;

const Input = styled.input`
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export default Checkbox;
