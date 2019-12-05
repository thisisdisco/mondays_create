import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import { Flex, Box } from 'core/ui/atoms';
import AVATAR from 'core/assets/images/avatar.png';

const TopMenu = () => {

  const location = useLocation();

  return (
    <Top>
      <Logo>Mondays.Create</Logo>
      <MenuLink to="/drafts"> Drafts</MenuLink>
      <MenuLink to="/create"> Создать марафон</MenuLink>
      <Link to="/profile">
        <Avatar src={AVATAR}/>
      </Link>
    </Top>
  );
};

export default TopMenu;

const Top = styled(Flex)`
  position: absolute;
  height: 64px;
  top: 0;
`;

const Logo = styled(p => <Box {...p} />)`

`;

const MenuLink = styled(p => <Link {...p} />)`

`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
