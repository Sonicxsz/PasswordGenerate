import React from 'react'
import { buttonProps } from './button.props'
import styles from './button.module.css'
function Button({children, ...props}:buttonProps):JSX.Element {
  return (
    <button 
    {...props}
    className={styles.button}>{children}</button>
  )
}

export default Button