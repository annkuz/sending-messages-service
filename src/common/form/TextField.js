import React from 'react';
import styles from './FormField.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextField = props => {
  const { field, type, label, caption, value, placeholder, className } = props;
  const textFieldClasses = classNames({
    [styles.TextField]: true,
  }, className);
  return (
    <div className={textFieldClasses}>
      <label htmlFor={field} className={styles.TextField_label}>{label}</label>
      <input
        type={type}
        name={field}
        value={value}
        placeholder={placeholder}
        className={styles.TextField_input}
      />
      <p className={styles.TextField_caption}>{caption}</p>
    </div>
  );
};
TextField.defaultProps = {
  type: 'text',
  label: '',
  caption: '',
  value: '',
  placeholder: '',
  classNames: ''
};
TextField.propTypes = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  caption: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  placeholder: PropTypes.string,
  classNames: PropTypes.string
};

export default TextField;
