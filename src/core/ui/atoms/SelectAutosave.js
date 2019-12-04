import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosave from 'core/ui/components/Autosave';
import Select from './Select';

class SelectAutosave extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    dark: PropTypes.bool,
  };

  render() {
    const { className, options, dark } = this.props;
    return (
      <Autosave {...this.props}>
        {({ onChange, value }) => (
          <Select
            className={className}
            onChange={onChange}
            options={options}
            dark={dark}
            value={value || ''}
          />
        )}
      </Autosave>
    );
  }
}

export default SelectAutosave;
