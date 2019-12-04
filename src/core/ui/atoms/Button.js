import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { hiddenMixin } from 'core/ui/helpers';
import { linkStyle } from 'core/ui/mixins';


export const Button = styled.button`
  background: ${p => p.theme.colors.red};
  color: white;
  width: ${p => (p.fullWidth ? '100%' : 'auto')};
  font-size: ${p => p.theme.font.size.h6};
  font-weight: bold;
  padding: 1rem 1.7rem;
  cursor: pointer;
  will-change: box-shadow;
  background: linear-gradient(120.65deg, #F83060 21.63%, #E84B28 83.99%);
  box-shadow: 0 10px 15px rgba(255, 40, 39, 0.3);
  border-radius: 51px;
  border: none;
  // transition: box-shadow ${p => p.theme.transitions.fast};
  &:hover {
    background: ${p => `linear-gradient(120.65deg, ${darken(0.1, '#F83060')} 21.63%, ${darken(0.1, '#E84B28')} 83.99%)`};
  }
  &:disabled {
    border-color: ${p => p.theme.colors.gray.lighter};
  }
  ${p => p.huge && css`
    font-size: 15px;
    font-weight: bold;
    padding: 1em 6em;
  `}
  ${p => p.unstyled && css`
    background: transparent;
    border: 0;
    margin: 0;
    color: ${p => p.theme.colors.black};
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background: transparent;
    }
  `}
  ${p => p.link && css`
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    ${linkStyle}
    &:hover {
      box-shadow: none;
      background: transparent;
    }
  `}
  ${p => p.default && css`
    background: transparent;
    border: transparent;
    font-weight: normal;
    &:hover {
      box-shadow: none;
      background: transparent;
    }
  `}
  ${p => p.outline && css`
    background: transparent;
    color: ${p => p.theme.colors.black};
    border-color: ${p => p.theme.colors.gray.light};
    &:hover {
      background: transparent;
      color: ${p => p.theme.colors.primary};
      border-color: ${p => p.theme.colors.primary};
    }
  `};
  ${p => p.disabled && css`
    background: ${p => p.theme.colors.gray.light};
    border-color: ${p => p.theme.colors.gray.light};
    &:hover {
      box-shadow: none;
      cursor: not-allowed;
      background: ${p => p.theme.colors.gray.light};
    }
  `}
  ${p => p.black && css`
    background-color: ${p => p.theme.colors.black};
    border-color: ${p => p.theme.colors.black};
    color: white;
  `};
  ${hiddenMixin}
`;

export default Button;
