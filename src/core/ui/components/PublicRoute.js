import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ErrorBoundary from 'core/ui/components/ErrorBoundary';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <ErrorBoundary>
    <Route
      {...rest}
      render={props => {
        return Layout ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        );
      }}
    />
  </ErrorBoundary>
);

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};

export default PublicRoute;
