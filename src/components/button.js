import React from 'react';
import styles from 'button.module.css';

const Button = ({children, onClick, btnColor='purple', labelColor, disabled, type, style, ...props}) => {
  return (
    <button className={styles.btn}>
      {children || 'label'}
    </button>
  )

}

export default Button

