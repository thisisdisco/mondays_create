import React from 'react';
import styled from 'styled-components';

import { Heading } from './';

const PageTitle = styled(p => <Heading level={1} {...p}/>)`
  color: ${p => p.theme.colors.gray.lighter};
  font-weight: 800;
  line-height: 1.2;
`;

export default PageTitle;
