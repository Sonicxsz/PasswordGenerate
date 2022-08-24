import React, { useEffect, useState } from 'react'
import styles from './layout.module.css';
import { layoutProps } from './layout.props';
import { motion } from "framer-motion";
function Layout({level, children}:layoutProps) {
   
   const defendLevel = ['https://sun9-88.userapi.com/impg/erZjP-VYRBjgJtBz28vS48e1s2M7WVr6t-bjbw/9e9rtzNTe5c.jpg?size=438x325&quality=95&sign=c75d79936c73460d8dbb6172b1cf882f&type=album',
   'https://sun9-57.userapi.com/impg/JQ-xjm3LspyhcWhDvKrZg8VpsLFRJvuhHh7YgQ/kKIjL-oncTE.jpg?size=510x382&quality=95&sign=480f64ff6fba2fc242759a49ac680387&type=album', 
   'https://sun9-64.userapi.com/impg/Ve2Dx1jJbzoldB3B7P0InpG06b-aSWTcbICwSg/pS9rUNN4rw4.jpg?size=514x386&quality=95&sign=050977270285b67a9890677f4e878508&type=album', 
   'https://sun9-56.userapi.com/impg/EYHdc5CkoAvaocvfgyWLKnT9GXx13PZH5hgvDg/qpSD7CDDo40.jpg?size=509x509&quality=95&sign=e10c55a8b09711a0796c8b875af4a110&type=album', 
   'https://sun9-8.userapi.com/impg/5SX0T4MWUDB914DOiSfU6Z5aDOmeKBpCfsiVcQ/Y7HA6yFN5OM.jpg?size=513x513&quality=95&sign=aa29278b946e8e8d1acffd146824f7b6&type=album',
    'https://sun2-4.userapi.com/impg/Qjob-8edJspQRgRM_MKiSXgJrY7BVbN7TIgfKA/_ZRtJ-v4K4k.jpg?size=509x509&quality=95&sign=8c69819ef97a73ce56cadfc26afa7487&type=album']
  return (
    <div className={styles.wrapper}>
        <div className={styles.leftImage}>
        <span className={styles.text}>complexity illustration</span>
            {defendLevel.map((i, ind) => {
                if(ind === level -1){
                    return <motion.div
                    
                    initial={{x: -200}} 
                    animate={{x: 0}}
                    
                    className={styles.imageBlock}>
                        
                        <img id='image' src={defendLevel[level -1]} alt="" /></motion.div>
                }
            })}
            
        </div>
        <div className={styles.generator}>
            
            {children}</div>
    </div>
  )
}

export default Layout