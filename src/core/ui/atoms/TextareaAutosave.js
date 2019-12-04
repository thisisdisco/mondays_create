import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosave from 'core/ui/components/Autosave';
import Textarea from './Textarea';

class TextareaAutosave extends PureComponent {
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
          <Textarea
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

export default TextareaAutosave;
