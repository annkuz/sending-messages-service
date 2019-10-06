import React from 'react';
import styles from './FormField.module.css';

const TextField = props => {
  const { name, label, caption, value, placeholder } = props;
  return (
    <div>
      <label htmlFor={name} className={styles.TextField__label}>{label}</label>
      <input type="text" name={name} value={value} placeholder={placeholder} />
      <p className={styles.TextField__caption}>{caption}</p>
    </div>
  );
};

export default TextField;
