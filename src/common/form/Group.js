import React from 'react';
import styles from './FormField.module.css';

const Group = props => {
  return (
    <div className={styles.Group}>
      { props.children.map(child => {
          return React.cloneElement(child, { className: styles.TextField___grouped });
      })}
    </div>
  );
};

export default Group;