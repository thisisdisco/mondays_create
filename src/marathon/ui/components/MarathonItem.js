import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Box } from 'core/ui/atoms';

const MarathonItem = (props) => {
  return (
    <MarathonBox>

    </MarathonBox>
  );
};

MarathonItem.propTypes = {
  _id: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  installed: PropTypes.number,
  received: PropTypes.number,
};

export default MarathonItem;

const MarathonBox = styled(Box)`

`;
