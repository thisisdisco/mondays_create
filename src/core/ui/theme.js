import { min, max, between, getCurrentBreakpoint } from 'core/ui/helpers';
import { BREAKPOINTS } from 'core/ui/helpers';

const SHADOW_COLOR = 'rgba(30, 30, 30, 0.07)';
const BASE_FONT_SIZE = '14px';

export const theme = {
  breakpoints: BREAKPOINTS,
  colors: {
    primary: '#6aa4f4',
    secondary: '#6178c2',
    black: '#282b32',
    none: '#282b32',
    violet: '#673fb4',
    blue: '#0099da',
    green: '#37c26e',
    red: '#F35050',
    rose: '#F8ACB9',
    darkBlack: '#171717',
    orange: '#e5891E',
    darkOrange: '#e5661E',
    gray: {
      darker: '#3c414b',
      dark: '#58606e',
      regular: '#6d6d6d',
      light: '#8C8C8C',
      lighter: '#E2E2E2',
      placeholder: '#a3a3a3'
    },
    danger: '#ff5555',
    warning: '#ff9159',
    yellow: '#f3b721',
    info: '#6654ff',
    lightGreen: '#80cc14',
    success: '#2ba763',
    gold: '#b58e58',
    blockItemBorder: '#dde3f0',
    previewBlack: '#0f141f',
  },
  general: {
    gridSize: 12,
    gridGap: '30px',
    borderRadius: '5px',
    mobilePadding: '5vw',
    borderWidth: '1px',
    headerHeight: '75px',
    containerWidth: {
      md: '980px',
      lg: '1200px',
    },
    resumeItemHeight: {
      lg: '420px',
      md: '390px',
      sm: '350px',
      xs: '150px'
    },
    previewWidth: {
      md: '720px',
      lg: '720px'
    }
  },
  modal: {
    backdropColor: 'rgba(30, 30, 30, .85)'
  },
  transitions: {
    fast: '.2s ease',
    medium: '.4s ease',
    slow: '.8s ease'
  },
  zIndex: {
    header: 1000,
    headerFixed: 1030,
    modalBg: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },
  spaces: {
    unit: `calc(${BASE_FONT_SIZE} / 2)`
  },
  shadows: {
    level1: `0 7px 12px ${SHADOW_COLOR}`,
    level2: `0 3px 40px ${SHADOW_COLOR}`,
    level3: `0 27px 45px ${SHADOW_COLOR}`
  },
  font: {
    size: {
      base: BASE_FONT_SIZE,
      h1: '36px',
      h2: '32px',
      h3: '28px',
      h4: '22px',
      h5: '20px',
      h6: '16px',
      small: '12px',
      smaller: '10px'
    },
    lineHeight: {
      base: 1.38,
      reduced: 1.2,
      increased: 1.5,
      double: 2
    },
    letterSpacing: {
      base: '-0.02em',
      accent: '0.2em'
    },
    family: {
      text: 'Inter, sans-serif',
      header: 'Inter, sans-serif',
      accent: 'Inter, sans-serif',
    }
  },
  min,
  max,
  between,
  getCurrentBreakpoint
};

export default theme;
