import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: calc(${p => p.theme.spaces.unit});
  color: ${p => lighten(0.1, p.theme.colors.gray.regular)};
  ${p =>
    p.block &&
    css`
      display: block !important;
    `}
  ${p =>
    p.required &&
    css`
      &:after {
        content: '*';
        position: relative;
        color: ${p => p.theme.colors.danger};
        left: 5px;
      }
    `} 
  ${p =>
    p.bold &&
    css`
    font-weight: 500;
  `}
  ${p =>
    p.form &&
    css`
    text-transform: capitalize;
  `}
  > small {
    display: block;
    font-weight: 300;
  }
`;

export default Label;
