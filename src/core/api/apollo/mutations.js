import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!, $isAdmin: Boolean) {
    signIn(email: $email, password: $password, isAdmin: $isAdmin) {
      token
    }
  }
`;
