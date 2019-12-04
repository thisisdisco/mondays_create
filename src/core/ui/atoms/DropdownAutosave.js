import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosave from 'core/ui/components/Autosave';
import Dropdown from './Dropdown';

class DropdownAutosave extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    dark: PropTypes.bool,
    stripe: PropTypes.bool,
    value: PropTypes.string,
  };

  render() {
    const { options, dark, stripe, value } = this.props;
    return (
      <Autosave {...this.props}>
        {({ onChange }) => (
          <Dropdown
            onChange={onChange}
            options={options}
            defaultSelected={value || ''}
            dark={dark}
            stripe={stripe}
          />
        )}
      </Autosave>
    );
  }
}

export default DropdownAutosave;
