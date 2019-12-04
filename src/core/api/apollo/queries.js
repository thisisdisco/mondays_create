import gql from 'graphql-tag';

import { loggedUserData } from './fragments';

export const CURRENT_USER = gql`
  query me {
    me {
      ...LoggedUserData
    }
  }
  ${loggedUserData}
`;
