
import Button from '../buttons/button'
import styles from  './window.module.css'
import Range from '../range/range'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { FormControlLabel, Checkbox} from '@mui/material'
import generate, {DownloadJSON} from '../../utils/generate'

interface windowProps{
    setLevel: (num:number) => void
}

function Window({setLevel}:windowProps) {
    
    const [range, setRange]  = useState(6)
    const [upperCase, setUpperCase] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [text, setText] = useState('');
    const [generated, setGenerated] = useState(false)
  
    
    

    useEffect(() =>{
        let password = generate(range, upperCase, numbers, symbol)
        setText(password)


        let defend = range >= 6 && range < 15 ? 1 : range >= 15 && range <= 20 ? 2 : 3;
        defend += upperCase ? 1 : 0;
        defend += numbers ? 1 : 0;
        defend += symbol ? 1 : 0;
        setLevel(defend)
    }, [generated, range, symbol, numbers, upperCase])
   

  return (
    <div className={styles.wrapper} >
        <div className={cn(styles.password,{
            [styles.passwordSize]: range > 30
        })}>{text}</div>
        <div className={styles.settings}>
            <Range range={range} setRange={setRange}/> 
           
            <div className={styles.checkboxWrapper}>

            <FormControlLabel control={<Checkbox color='secondary' onClick={() =>{ setNumbers(!numbers) }}  />} label="Number" />
            <FormControlLabel   control={<Checkbox color='secondary' onClick={() =>{ setUpperCase(!upperCase)}}  />} label="UpperCase" />
            <FormControlLabel   control={<Checkbox color='secondary' onClick={() =>{ setSymbol(!symbol)}}  />} label="Symbol" />
            </div>
            
        </div>
        <div className={styles.buttons}>
            <Button 
            onClick={() =>{
                DownloadJSON(text)
            }}>Сохранить</Button>
            <Button
                onClick={() =>{setGenerated(!generated)}}
            >Сгенерировать</Button>
        </div>
    </div>
  )
}

export default Window