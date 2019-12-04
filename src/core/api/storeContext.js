import React, { Component } from 'react';
import PropTypes from 'prop-types';

const StoreContext = React.createContext();

const StoreProviderComponent = StoreContext.Provider;

export class StoreProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {};

  render() {
    return (
      <StoreProviderComponent
        value={{
          ...this.state,
          setStore: this.setState.bind(this),
        }}
      >
        {this.props.children}
      </StoreProviderComponent>
    );
  }
}

export const StoreConsumer = StoreContext.Consumer;

export const withStore = Component => (
  class Wrapper extends React.Component {
    render() {
      return (
        <StoreConsumer>
          {store => (<Component {...this.props} {...store} />)}
        </StoreConsumer>
      );
    }
  }
);

export default withStore;
