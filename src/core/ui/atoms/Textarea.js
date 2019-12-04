import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { inputStyle } from 'core/ui/mixins';

class TextareaCont extends PureComponent {
  render() {
    return (
      <Textarea {...this.props} />
    );
  }
}

const Textarea = styled.textarea`
  display: block;
  box-shadow: none;
  resize: none;
  ${inputStyle}
`;

export default TextareaCont;
