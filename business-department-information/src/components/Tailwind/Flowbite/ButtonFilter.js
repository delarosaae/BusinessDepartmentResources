'use client';

import { Button } from 'flowbite-react';
import './ButtonFilter.css'
import styles from './ButtonFilter.module.css'
import {useState} from "react";

const ButtonFilter = (props) =>{

    const [isFilterDept, setFilterDept] = useState(true)

    const dept = <Button.Group>
            <Button onClick={() => changeFilter(2)} color='gray'>List of Resources</Button>
            <Button onClick={() => changeFilter(1)} gradientDuoTone="purpleToBlue">Department's resource</Button>
        </Button.Group>


    const listOfResource = <Button.Group>
        <Button onClick={() => changeFilter(2)} gradientDuoTone="purpleToBlue">List of Resources</Button>
        <Button onClick={() => changeFilter(1)} color='gray'>Department's resource</Button>
    </Button.Group>

    const changeFilter = (number) =>{
        if(number === 1){
            setFilterDept(true)
        }
        if(number === 2){
            setFilterDept(false)
        }
    }


    return(
       <div>
           {isFilterDept ? dept : listOfResource}
       </div>
    )
}

export default ButtonFilter;