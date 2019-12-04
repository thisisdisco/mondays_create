import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { inputStyle } from 'core/ui/mixins';

class InputCont extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
  };

  state = {
    hideIcon: false,
  };

  render() {
    const { error, ...rest } = this.props;
    return (
      <Input
        {...rest}
      />
    );
  }
}

const Input = styled.input`
  ${inputStyle}
  && {
    ${({ error, theme }) => error && css`
      border-color: ${theme.colors.red};
    `};
  }
}
`;

export default InputCont;
