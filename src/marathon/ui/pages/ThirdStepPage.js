import React from 'react';

import { Page, Heading, Text } from 'core/ui/atoms';
import { Container } from 'marathon/ui/atoms';
import Top from 'marathon/ui/components/CreateTop';

const ThirdStepPage = () => {
  return (
    <Page>
      <Top/>
      <Container>
        <Heading>Публикация</Heading>
        <Text>You have logged in</Text>
      </Container>
    </Page>
  );
};

export default ThirdStepPage;
