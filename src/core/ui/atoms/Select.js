import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import IconAtom from './Icon';
import { inputStyle } from 'core/ui/mixins';

class Select extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    name: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  onChange = e => {
    this.props.onChange && this.props.onChange(e.target.value);
  };

  render() {
    const {
      name,
      options,
      onChange,
      className,
      value,
    } = this.props;
    const selectedOption = options.find(o => o.value === value) || {};
    return (
      <SelectCont className={className}>
        <Selected>
          {selectedOption.title}
        </Selected>
        <Input
          name={name}
          onChange={onChange}
          value={value || options[0].value}
        >
          {options.map(({ value, title }, i) => (
            <option key={`${value}-${i}`} value={value}>
              {title}
            </option>
          ))}
        </Input>
      </SelectCont>
    );
  }
}

const SelectCont = styled.div`
  position: relative;
`;

export const Selected = styled.p`
  margin: 0;
  padding: 8px 30px 8px 15px;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: 1px solid ${p => p.theme.colors.gray.lighter};
  box-sizing: border-box;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  font-weight: 800;
  font-size: ${p => p.theme.font.size.smaller};
  color: ${p => p.theme.colors.gray.regular};
  position: relative;
  &:after{
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${p => p.theme.colors.gray.regular};;
    position: absolute;
    top: 40%;
    right: 10px;
    content: "";
    z-index: 98;
   }
`;

export const Icon = styled(IconAtom)`
  position: absolute;
  font-size: 24px;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  color: ${p => p.theme.colors.primary};
`;

const Input = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

export default Select;
