import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
  fill: currentColor;
`;

export const SvgContainer = ({ className, width, height, children, ...rest }) => (
  <SVG
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </SVG>
);

SvgContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
};

const Email = () => (
  <SvgContainer width={32} height={32}>
    <path d="M24 8H8C6.9 8 6.01 8.9 6.01 10L6 22C6 23.1 6.9 24 8 24H24C25.1 24 26 23.1 26 22V10C26 8.9 25.1 8 24 8ZM24 12L16 17L8 12V10L16 15L24 10V12Z"/>
  </SvgContainer>
);

const Lock = () => (
  <SvgContainer width={32} height={32}>
    <path d="M21.25 12H20.375V10.2857C20.375 7.92 18.415 6 16 6C13.585 6 11.625 7.92 11.625 10.2857V12H10.75C9.7875 12 9 12.7714 9 13.7143V22.2857C9 23.2286 9.7875 24 10.75 24H21.25C22.2125 24 23 23.2286 23 22.2857V13.7143C23 12.7714 22.2125 12 21.25 12ZM16 19.7143C15.0375 19.7143 14.25 18.9429 14.25 18C14.25 17.0571 15.0375 16.2857 16 16.2857C16.9625 16.2857 17.75 17.0571 17.75 18C17.75 18.9429 16.9625 19.7143 16 19.7143ZM18.7125 12H13.2875V10.2857C13.2875 8.82 14.5037 7.62857 16 7.62857C17.4963 7.62857 18.7125 8.82 18.7125 10.2857V12Z"/>
  </SvgContainer>
);

const Close = () => (
  <SvgContainer width={32} height={32}>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.5057 11.0506L20.6773 8.22221L15.7275 13.172L10.7778 8.22221L7.94936 11.0506L12.8991 16.0004L7.94936 20.9501L10.7778 23.7786L15.7275 18.8288L20.6773 23.7786L23.5057 20.9501L18.556 16.0004L23.5057 11.0506Z"/>
  </SvgContainer>
);

const Eye = () => (
  <SvgContainer width={32} height={32}>
    <path d="M16 8C11 8 6.73 11.11 5 15.5C6.73 19.89 11 23 16 23C21 23 25.27 19.89 27 15.5C25.27 11.11 21 8 16 8ZM16 20.5C13.24 20.5 11 18.26 11 15.5C11 12.74 13.24 10.5 16 10.5C18.76 10.5 21 12.74 21 15.5C21 18.26 18.76 20.5 16 20.5ZM16 12.5C14.34 12.5 13 13.84 13 15.5C13 17.16 14.34 18.5 16 18.5C17.66 18.5 19 17.16 19 15.5C19 13.84 17.66 12.5 16 12.5Z"/>
  </SvgContainer>
);

const Drafts = () => (
  <SvgContainer width={32} height={32}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 6H8V14H0V6ZM12 6H20V14H12V6ZM32 6H24V14H32V6ZM12 18H20V26H12V18ZM8 18H0V26H8V18Z"/>
  </SvgContainer>
);

const Dots = () => (
  <SvgContainer width={32} height={32}>
    <circle cx="10" cy="16" r="2"/>
    <circle cx="16" cy="16" r="2"/>
    <circle cx="22" cy="16" r="2"/>
  </SvgContainer>
);

const Arrow = () => (
  <SvgContainer width={32} height={32}>
    <path d="M16 8L14.59 9.41L20.17 15L8 15L8 17L20.17 17L14.58 22.58L16 24L24 16L16 8Z"/>
  </SvgContainer>
);

const Media = () => (
  <SvgContainer width={32} height={32}>
    <path d="M6 10H4V15H4.01L4 24C4 25.1 4.9 26 6 26H24V24H6V10ZM26 8H18L16 6H10C8.9 6 8.01 6.9 8.01 8L8 20C8 21.1 8.9 22 10 22H26C27.1 22 28 21.1 28 20V10C28 8.9 27.1 8 26 8ZM11 19L15.5 13L19 17.51L21.5 14.5L25 19H11Z"/>
  </SvgContainer>
);

const Trash = () => (
  <SvgContainer width={32} height={32}>
    <path d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V11H10V23ZM23 8H19.5L18.5 7H13.5L12.5 8H9V10H23V8Z"/>
  </SvgContainer>
);

const Bars = () => (
  <SvgContainer width={32} height={32}>
    <rect x="10" y="11" width="12" height="2" rx="1"/>
    <rect x="10" y="15" width="12" height="2" rx="1"/>
    <rect x="10" y="19" width="12" height="2" rx="1"/>
  </SvgContainer>
);

const Play = () => (
  <SvgContainer width={32} height={32}>
    <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM14 20.5V11.5L20 16L14 20.5Z"/>
  </SvgContainer>
);

const Plus = () => (
  <SvgContainer width={32} height={32}>
    <path d="M23 17H17V23H15V17H9V15H15V9H17V15H23V17Z"/>
  </SvgContainer>
);

const Check = () => (
  <SvgContainer width={32} height={32}>
    <path d="M12.6737 20.6234L7.69528 15.648L6 17.3303L12.6737 24L27 9.68233L25.3167 8L12.6737 20.6234Z"/>
  </SvgContainer>
);

export default {
  Email,
  Lock,
  Close,
  Eye,
  Drafts,
  Dots,
  Arrow,
  Media,
  Trash,
  Bars,
  Play,
  Plus,
  Check,
};
