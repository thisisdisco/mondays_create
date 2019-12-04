import styled from 'styled-components';

const InputErrorMessage = styled.span`
  position: absolute;
  top: 48px;
  font-size: 10px;
  color: ${p => p.theme.colors.danger};
`;

export default InputErrorMessage
