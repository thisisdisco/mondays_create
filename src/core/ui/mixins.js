import { css } from 'styled-components';
import { darken } from 'polished';

export const inputStyle = css`
  position: relative;
  display: block;
  border: 0;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.09);
  padding: 10px 15px;
  line-height: 1.7;
  width: 100%;
  overflow: hidden;
  font-size: ${p => p.theme.font.size.base};
  border-radius: ${p => p.theme.general.borderRadius};
  color: ${p => p.theme.colors.regular};
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${p => p.theme.colors.gray.light};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${p => p.theme.colors.gray.light};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${p => p.theme.colors.gray.light};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${p => p.theme.colors.gray.light};
  }
`;

export const linkStyle = css`
  color: ${p => p.theme.colors.primary};
  font-weight: 300;
  &:hover {
    color: ${p => darken(0.2, p.theme.colors.primary)};
    text-decoration: none;
  }
`;
