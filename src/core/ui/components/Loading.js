import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Cover, EllipsisFrame1, EllipsisFrame2, EllipsisFrame3 } from 'core/ui/atoms';

class Loading extends PureComponent {
  render() {
    return (
      <LoadingCont>
        <Spinner>
          <Dot/>
          <Dot/>
          <Dot/>
          <Dot/>
        </Spinner>
      </LoadingCont>
    );
  }
}

export default Loading;

const LoadingCont = styled(Cover)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${p => p.theme.colors.primary};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  ${Dot}:nth-child(1) {
    left: 6px;
    animation: ${EllipsisFrame1} 0.6s infinite;
  }
  ${Dot}:nth-child(2) {
    left: 6px;
    animation: ${EllipsisFrame2} 0.6s infinite;
  }
  ${Dot}:nth-child(3) {
    left: 26px;
    animation: ${EllipsisFrame2} 0.6s infinite;
  }
  ${Dot}:nth-child(4) {
    left: 45px;
    animation: ${EllipsisFrame3} 0.6s infinite;
  }
`;
