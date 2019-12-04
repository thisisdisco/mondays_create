import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ErrorOccured from 'core/ui/components/ErrorOccured';

@withRouter
class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null,
    pathname: this.props.location.pathname
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== prevState.pathname) {
      return { pathname: nextProps.location.pathname, error: null, info: null };
    }
    return null;
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    if (window && window.Rollbar) {
      window.Rollbar.error(error, info, (err, data) => {
        if (err) { console.log('Error while reporting error to Rollbar: ', err); }
      });
    }
  }

  render() {
    const { children } = this.props;
    const { error, info } = this.state;
    if (error) return <ErrorOccured info={info} />;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  location: PropTypes.object
};

export default ErrorBoundary;
