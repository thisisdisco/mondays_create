import React from 'react';

import { Page, Heading, Text } from 'core/ui/atoms';
import { Container } from 'marathon/ui/atoms';
import Top from 'marathon/ui/components/CreateTop';

const SecondStepPage = () => {
  return (
    <Page>
      <Top/>
      <Container>
        <Heading>Создание дней</Heading>
        <Text>You have logged in</Text>
      </Container>
    </Page>
  );
};

export default SecondStepPage;
