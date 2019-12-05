import React from 'react';

import { Page, Heading, Text } from 'core/ui/atoms';
import { Container } from 'marathon/ui/atoms';
import Top from 'marathon/ui/components/CreateTop';

const FirstStepPage = () => {
  return (
    <Page>
      <Top/>
      <Container>
        <Heading>Название и оформление</Heading>
        <Text>You have logged in</Text>
      </Container>
    </Page>
  );
};

export default FirstStepPage;
