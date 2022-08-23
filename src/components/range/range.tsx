import styles from './range.module.css'
import {Slider} from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface rangeProps {
    range: number,
    setRange: (num: number) => void
}



function Range({range, setRange}:rangeProps) {
    
   const [value, setValue] = useState(range)

    return (
        <div className={styles.wrapper}>
            <span>Length: 6</span>
            <div
                
            className={styles.range}>
            <Slider
            aria-label="Temperature"
            defaultValue={value}
            valueLabelDisplay="auto"
            color="secondary"
            step={1}
            marks
            onChange={(event, value) =>{
                if(typeof value === 'number'){
                    setRange(value)
                }
               
            }}
            min={6}
            max={36}
        />
            </div>
            <div>36</div>
        </div>

    )
}

export default Range