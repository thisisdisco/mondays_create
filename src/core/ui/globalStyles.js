import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

// 100
import INTER_THIN from '../assets/fonts/Inter-Thin-BETA.ttf';
import INTER_THIN_ITALIC from '../assets/fonts/Inter-ThinItalic-BETA.ttf';
// 200
import INTER_EXLIGHT from '../assets/fonts/Inter-ExtraLight-BETA.ttf';
import INTER_EXLIGHT_ITALIC from '../assets/fonts/Inter-ExtraLightItalic-BETA.ttf';
// 300
import INTER_LIGHT from '../assets/fonts/Inter-Light-BETA.ttf';
import INTER_LIGHT_ITALIC from '../assets/fonts/Inter-LightItalic-BETA.ttf';
// 400
import INTER_REGULAR from '../assets/fonts/Inter-Regular.ttf';
import INTER_REGULAR_ITALIC from '../assets/fonts/Inter-Italic.ttf';
// 500
import INTER_MEDIUM from '../assets/fonts/Inter-Medium.ttf';
import INTER_MEDIUM_ITALIC from '../assets/fonts/Inter-MediumItalic.ttf';
// 600
import INTER_SEMIBOLD from '../assets/fonts/Inter-SemiBold.ttf';
import INTER_SEMIBOLD_ITALIC from '../assets/fonts/Inter-SemiBoldItalic.ttf';
// 700
import INTER_BOLD from '../assets/fonts/Inter-Bold.ttf';
import INTER_BOLD_ITALIC from '../assets/fonts/Inter-BoldItalic.ttf';
// 800
import INTER_EXBOLD from '../assets/fonts/Inter-ExtraBold.ttf';
import INTER_EXBOLD_ITALIC from '../assets/fonts/Inter-ExtraBoldItalic.ttf';
// 900
import INTER_BLACK from '../assets/fonts/Inter-Black.ttf';
import INTER_BLACK_ITALIC from '../assets/fonts/Inter-BlackItalic.ttf';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
    outline: none !important;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  *:not(input, textarea) {
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
  }
  body {
    font-family: ${p => p.theme.font.family.text};
    font-weight: normal;
    line-height: ${p => p.theme.font.lineHeight.base};
    letter-spacing: ${p => p.theme.font.letterSpacing.base};
    background-color: #f9fafc;
    &:after {
      position:absolute; width:0; height:0; overflow:hidden; z-index:-1;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.font.family.header};
  }
  h1 {
    font-size: ${p => p.theme.font.size.h1};
  }
  h2 {
    font-size: ${p => p.theme.font.size.h2};
  }
  h3 {
    font-size: ${p => p.theme.font.size.h3};
  }
  h4 {
    font-size: ${p => p.theme.font.size.h4};
  }
  h5 {
    font-size: ${p => p.theme.font.size.h5};
  }
  h6 {
    font-size: ${p => p.theme.font.size.h6};
  }
  p {
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.font.size.base};
  }
  .reorder-wrapper-item {
    position: relative;
    transition: top 1s ease-in;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_THIN});
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_THIN_ITALIC});
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_EXLIGHT});
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_EXLIGHT_ITALIC});
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_LIGHT});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_LIGHT_ITALIC});
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_REGULAR});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_REGULAR_ITALIC});
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_MEDIUM});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_MEDIUM_ITALIC});
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_SEMIBOLD});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_SEMIBOLD_ITALIC});
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_BOLD});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_BOLD_ITALIC});
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_EXBOLD});
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_EXBOLD_ITALIC});
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_BLACK});
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${INTER_BLACK_ITALIC});
    font-weight: 900;
    font-style: italic;
  }
`;

export default GlobalStyle;
