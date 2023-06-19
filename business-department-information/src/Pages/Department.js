import Icon from '@mdi/react';
import {mdiPlusCircle} from '@mdi/js';
import styles from './Department.module.css'
import {useEffect, useState} from "react";

const Department = () =>{

    const [departmentInfo, setDepartmentInfo] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/department/getDepartments')
            .then(response => response.json())
            //.then(data => setDepartmentInfo(data))
            //.then(data => console.log(JSON.stringify(data)))
            .then(data => {
                console.log(data)
                setDepartmentInfo(data)
            })
            /*
            .then((response) =>{
                const res = response.json();
                console.log(res)
                setDepartmentInfo(res)
            })

             */
    },[])



    return(
        <div className={styles.container}>
            <p>Org Name and List of Departments</p>
            <button aria-label="User Profile"><Icon path={mdiPlusCircle} size={2} color="red"/> Add Department</button>
            <div className={styles.departmentViewer}>
                {departmentInfo.map((dept) => {
                   return  <div>{dept.id} + {dept.department}</div>
                })}
            </div>
        </div>
    )
}

export default Department;