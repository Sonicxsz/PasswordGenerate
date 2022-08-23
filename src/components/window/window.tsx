
import Button from '../buttons/button'
import styles from  './window.module.css'
import Range from '../range/range'
import { useState } from 'react'
import cn from 'classnames'
import { FormControlLabel, Checkbox} from '@mui/material'
import generate from '../../utils/generate'
function Window() {
    const [range, setRange]  = useState(6)
    const [upperCase, setUpperCase] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [numbers, setNumbers] = useState(false);
    let password = generate(range, upperCase, numbers, symbol)

  return (
    <div className={styles.wrapper} >
        <div className={cn(styles.password,{
            [styles.passwordSize]: range > 30
        })}>{password}</div>
        <div className={styles.settings}>
            <Range range={range} setRange={setRange}/> 
           
            <div className={styles.checkboxWrapper}>
            <FormControlLabel onClick={() =>{ setNumbers(!numbers)}} control={<Checkbox color='secondary'  />} label="Number" />
            <FormControlLabel onClick={() =>{ setUpperCase(!upperCase)}}  control={<Checkbox color='secondary'  />} label="UpperCase" />
            <FormControlLabel onClick={() =>{ setSymbol(!symbol)}}  control={<Checkbox color='secondary'  />} label="Symbol" />
            </div>
            
        </div>
        <div className={styles.buttons}>
            <Button 
            onClick={() =>{
            
            }}>Сохранить</Button>
            <Button>Сгенерировать</Button>
        </div>
    </div>
  )
}

export default Window