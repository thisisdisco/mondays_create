import React from 'react';
import styled from 'styled-components';

import { Button } from 'core/ui/atoms';

const Arrow = styled(p => <Button unstyled {...p} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  border-radius: 20px;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    margin-right: ${p => p.left ? '1px' : null};
    margin-left: ${p => p.right ? '1px' : null};
    border-width: ${p => p.left ? '4.25px 4.25px 4.25px 0' : '4.25px 0 4.25px 4.25px'};
    border-color: ${p => p.left ? 'transparent #f43750 transparent transparent' : 'transparent transparent transparent #f43750'};
  }
`;

export default Arrow;
