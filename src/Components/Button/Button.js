import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, children }) => {
  return (
    <button className={`${styles.button} ${styles.item}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
