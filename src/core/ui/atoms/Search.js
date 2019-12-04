import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { SvgIcon, Input } from 'core/ui/atoms';

class Search extends PureComponent {
  render() {
    return (
      <Wrap>
        <SvgIcon.Search/>
        <SearchInput placeholder="Поиск по..."/>
      </Wrap>
    );
  }
}

export default Search;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.gray.lighter};
  padding-bottom: 7px;
  margin-top: 15px;
`;
const SearchInput = styled(Input)`
  background: none;
  box-shadow: none;
  padding-top: 0;
  padding-bottom: 0;
  font-size: ${p => p.theme.font.size.small};
`;
