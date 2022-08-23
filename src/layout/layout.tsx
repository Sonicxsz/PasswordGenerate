import React from 'react'
import styles from './layout.module.css';
import { layoutProps } from './layout.props';

function Layout({children}:layoutProps) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.leftImage}></div>
        <div className={styles.generator}>{children}</div>
    </div>
  )
}

export default Layout