import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import { withStore } from 'core/api/storeContext';

class MutationWrap extends PureComponent {
  static propTypes = {
    mutation: PropTypes.func.isRequired,
    optimisticResponse: PropTypes.func.isRequired,
    update: PropTypes.any,
    onError: PropTypes.any,
    onCompleted: PropTypes.any,
  };

  render() {
    return (
      <Mutation
        mutation={this.props.mutation}
        update={this.props.update}
        onError={this.props.onError}
        optimisticResponse={this.props.optimisticResponse}
        onCompleted={this.props.onCompleted}
      >
        {mutate => <Autosave mutate={mutate} {...this.props} />}
      </Mutation>
    );
  }
}

@withStore
class Autosave extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    savingStatus: PropTypes.string.isRequired,
    setStore: PropTypes.func.isRequired,
    mutate: PropTypes.func.isRequired,
    variables: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired
  };

  onChange = (e) => {
    const { onChange, savingStatus, setStore } = this.props;
    if (savingStatus !== 'SAVING') {
      setStore({ savingStatus: 'SAVING' });
    }
    if (onChange) onChange(e);
    this.save(e.target.value);
  };

  save = debounce((value) => {
    const {
      mutate,
      variables,
    } = this.props;
    mutate({
      variables: {
        ...variables,
        value,
      },
    });
  }, 500);

  render() {
    return this.props.children({ onChange: this.onChange });
  }
}

export default MutationWrap;
