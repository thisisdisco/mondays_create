import styled, { css } from 'styled-components';

const TableCell = styled.div`
  display: table-cell;
  padding: 20px 30px;
  vertical-align: middle;
  ${p => p.width && css`
    width: ${p.width};
  `}
`;

export default TableCell;
