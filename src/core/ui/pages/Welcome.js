import React, { PureComponent } from 'react';

import { Container, Page, Heading, Text } from 'core/ui/atoms';

class Welcome extends PureComponent {
  render() {
    return (
      <Page>
        <Container>
          <Heading>Welcome</Heading>
          <Text>You have logged in</Text>
        </Container>
      </Page>
    );
  }
}

export default Welcome;
