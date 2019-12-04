import gql from 'graphql-tag';

export const loggedUserData = gql`
  fragment LoggedUserData on User {
    _id
    personalData {
      email
      firstName
    }
  }
`;
