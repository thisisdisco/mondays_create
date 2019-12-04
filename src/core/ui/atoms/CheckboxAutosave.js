import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Autosave from 'core/ui/components/Autosave';

class CheckboxAutosave extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
  };

  render() {
    const { checked } = this.props;
    return (
      <Autosave {...this.props}>
        {({ onChange }) => (
          <Checkbox
            {...this.props}
            onChange={() => onChange({ target: { value: !checked } })}
            checked={checked}
          />
        )}
      </Autosave>
    );
  }
}

export default CheckboxAutosave;
