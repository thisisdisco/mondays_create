import React from 'react';

import { Container, Page, Heading, Text } from 'core/ui/atoms';
import MarathonItem from '../components/MarathonItem';

const DraftsPage = () => {
  const items = [
    {},
    {},
    {},
    {},
  ];

  return (
    <Page>
      <Container>
        {items.map(item => <MarathonItem key={item._id} {...item} />)}
      </Container>
    </Page>
  );
};

export default DraftsPage;
