import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from 'core/ui/atoms';
import TopMenu from 'core/ui/components/TopMenu';

class AuthenticatedLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Layout>
        <TopMenu />
        <Content>
          <Container>
            {this.props.children}
          </Container>
        </Content>
      </Layout>
    );
  }
}

export default AuthenticatedLayout;

const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 64px;
`;
