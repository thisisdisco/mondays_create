import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import { Flex, Box } from 'core/ui/atoms';

const CreateTop = () => {

  const location = useLocation();

  return (
    <Top>
      <MenuLink to="/first">Название и описание</MenuLink>
      <MenuLink to="/second">Создание дней</MenuLink>
      <MenuLink to="/third">Публикация</MenuLink>
    </Top>
  );
};

export default CreateTop;

const Top = styled(Flex)`
  position: absolute;
  top: 64px;
  height: 64px;
`;

const Logo = styled(p => <Box {...p} />)`

`;

const MenuLink = styled(p => <Link {...p} />)`

`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
