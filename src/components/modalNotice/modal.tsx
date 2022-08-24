import React from 'react'
import styles from './modal.module.css'
import {motion} from 'framer-motion'
function Modal() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        className={styles.modal}
    >password copied</motion.div>
  )
}

export default Modal