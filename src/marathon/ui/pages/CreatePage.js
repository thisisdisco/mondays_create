import React from 'react';
import { useLocation, useHistory } from 'react-router';

const CreatePage = () => {
  const location = useLocation();

  const history = useHistory();

  console.log('pushed');
  history.push('/first');

};

export default CreatePage;
