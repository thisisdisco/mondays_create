import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosave from 'core/ui/components/Autosave';
import Switch from './Switch';

class SwitchAutosave extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    const { className, name, label, value } = this.props;
    return (
      <Autosave {...this.props}>
        {({ onChange }) => (
          <Switch
            className={className}
            name={name}
            onChange={onChange}
            checked={value}
            label={label}
          />
        )}
      </Autosave>
    );
  }
}

export default SwitchAutosave;
