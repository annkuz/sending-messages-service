import React from 'react';
import styles from './FormField.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = props => {
  const { field, label, caption, value, placeholder, className } = props;
  const textFieldClasses = classNames({
    [styles.TextField]: true,
  }, className);
  return (
    <div className={textFieldClasses}>
      <label htmlFor={field} className={styles.TextField_label}>{label}</label>
      <textarea
        name={field}
        value={value}
        placeholder={placeholder}
        className={styles.TextArea_input}
      >
        {value}
      </textarea>
      <p className={styles.TextField_caption}>{caption}</p>
    </div>
  );
};
TextArea.defaultProps = {
  label: '',
  caption: '',
  value: '',
  placeholder: '',
  classNames: ''
};
TextArea.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  caption: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  classNames: PropTypes.string
};

export default TextArea;
