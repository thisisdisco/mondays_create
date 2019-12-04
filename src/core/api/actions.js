import client from './apollo/init';
import { CURRENT_USER } from './apollo/queries';
import { SIGN_IN } from './apollo/mutations';
import history from './history';

export const loginWithPassword = (email, password) => {
  return new Promise((res, rej) => {
    client.mutate({ mutation: SIGN_IN, variables: { email, password, isAdmin: true } })
      .then(({ data: { signIn } }) => {
        if (signIn) {
          localStorage.setItem('token', signIn.token);
          return client.resetStore();
        }
        rej('error');
      })
      .then(() => {
        history.push('/');
        res();
      });
  });
};

export const logout = () => {
  localStorage.removeItem('token');
  history.push('/sign-in');
  return client.resetStore();
};
