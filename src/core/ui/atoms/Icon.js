import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { SpinFrame } from 'core/ui/atoms';

class Icon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;
    return (
      <I className={`${className || ''} icon-${this.props.icon}`} {...rest} />
    );
  }
}

const I = styled.i`
  ${p => p.scale && css`
    &:before {
      transform: scale(${p.scale});
    }
  `}
  ${p => p.spin && css`
    animation: ${SpinFrame} .5s linear infinite;
  `}
`;

export default Icon;
