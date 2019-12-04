import React, { PureComponent } from 'react';

import Autosave from 'core/ui/components/Autosave';
import Input from './Input';
import PropTypes from 'prop-types';

class InputAutosave extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    const { className, type, placeholder, name, value } = this.props;
    return (
      <Autosave {...this.props}>
        {({ onChange }) => (
          <Input
            className={className}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={value || ''}
          />
        )}
      </Autosave>
    );
  }
}

export default InputAutosave;
