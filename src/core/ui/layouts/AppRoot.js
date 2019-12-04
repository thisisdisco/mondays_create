import React, { PureComponent } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, Query } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import theme from 'core/ui/theme';
import history from 'core/api/history';
import client from 'core/api/apollo/init';
import { ResponsiveProvider } from 'core/api/responsiveContext';
import { getCurrentBreakpoint } from 'core/ui/helpers';
import { AccountProvider } from 'core/api/accounts/accountContext';
import GenericRoute from 'core/ui/components/GenericRoute';
import GlobalStyles from '../globalStyles';
import { CURRENT_USER } from 'core/api/apollo/queries';

// Import routes
import coreRoutes from 'core/api/routes';
import { StoreProvider } from 'core/api/storeContext';
import NotFound from 'core/ui/pages/NotFound';
import ErrorOccured from 'core/ui/components/ErrorOccured';

const combinedRoutes = [
  ...coreRoutes,
];

class AppRoot extends PureComponent {
  state = {
    currentBreakpoint: getCurrentBreakpoint(),
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ currentBreakpoint: getCurrentBreakpoint() });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Query query={CURRENT_USER}>
              {({ error, data, loading: userLoading }) => {
                if (error) {
                  console.log(error);
                  // return <ErrorOccured error={error}/>;
                }
                return (
                  <StoreProvider>
                    <AccountProvider
                      value={{
                        currentUser: (data || {}).me,
                        userLoading,
                      }}
                    >
                      <ResponsiveProvider
                        value={{
                          breakpoint: this.state.currentBreakpoint,
                          isMobile: ['sm', 'xs'].includes(this.state.currentBreakpoint),
                        }}
                      >
                        <Switch>
                          {combinedRoutes.map(routeData =>
                            <GenericRoute key={routeData.path} {...routeData} />)}
                          <Route component={NotFound}/>
                        </Switch>
                        <GlobalStyles/>
                      </ResponsiveProvider>
                    </AccountProvider>
                  </StoreProvider>
                );
              }}
            </Query>
          </ThemeProvider>
        </Router>
      </ApolloProvider>
    );
  }
}

export default AppRoot;
