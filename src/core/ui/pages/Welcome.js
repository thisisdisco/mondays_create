import React from 'react';

import { Container, Page, Heading, Text } from 'core/ui/atoms';

const Welcome = () => {
  return (
    <Page>
      <Container>
        <Heading>Welcome</Heading>
        <Text>You have logged in</Text>
      </Container>
    </Page>
  );
};

export default Welcome;
