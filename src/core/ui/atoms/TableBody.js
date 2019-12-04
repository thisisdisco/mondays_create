import styled from 'styled-components';
import { lighten } from 'polished';

import { TableRow, TableCell } from './';

const TableBody = styled.div`
  display: table-row-group;
  font-weight: 500;
  font-size: ${p => p.theme.font.size.small};
  color: ${p => p.theme.colors.gray.light};
  line-height: 15px;
  ${TableRow}:hover {
    ${TableCell} {
      cursor: pointer;
      background-color: ${p => lighten(0.4, p.theme.colors.primary)};
    }
  }
`;

export default TableBody;
