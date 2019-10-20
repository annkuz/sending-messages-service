import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import classNames from 'classnames';

const Button = props => {
  const { type, title, onClick, isActive } = props;
  const classes = classNames({
    [styles.Button]: true,
    [styles.Button___active]: isActive
  });
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
Button.defaultProps = {
  type: 'submit',
  title: '',
  onClick: () => {},
  isActive: true
};
Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

export default Button;