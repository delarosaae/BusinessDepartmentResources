import Icon from '@mdi/react';
import {mdiPlusCircle} from '@mdi/js';
import styles from './Department.module.css'
import {useCallback, useEffect, useState} from "react";
import InputModal from "../components/UI/InputModal";
import StrippedTable from "../components/UI/StrippedTable";
import EditDepartmentModal from "../components/UI/EditDepartmentModal";

const Department = () =>{

    const [departmentInfo, setDepartmentInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const tableData = ["ID #", "Department"];
    const [edit, setEdit] = useState(false);
    const [chosenEditID, setChosenEditID] = useState('')

    const fetchDepartmentList = useCallback( async() =>{
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/department/getDepartments')
            if(!response.ok)
            {

            }

            const data = await response.json()
            //console.log(data)
            const listData = [];
            for (const key in data)
            {
                //console.log(key)
                //console.log(data[key].department)
                //console.log("This is id" + data[key].id)
                /*
                listData.push([

                    data[key].id,
                   data[key].department
                ])
                 */
                listData.push({
                    id: data[key].id,
                    department: data[key].department
                })
            }
            setDepartmentInfo(listData);
        }
        catch (error)
        {
            console.log(error)
        }
        setIsLoading(false)
    }, []);

    useEffect(() =>{
        fetchDepartmentList();
    },[fetchDepartmentList])

    const showInputModalHandler = () => {
        if(sentinelAddTrue === true){
            fetchDepartmentList()
        }
        //console.log("Sentinel value of modal " + sentinelAddTrue)
        setSentinelAddTrue(!sentinelAddTrue)
        //console.log("Sentinel value of modal " + sentinelAddTrue)
    };

    const onConfirmAddInputHandler = () =>{

    }


    const [sentinelAddTrue, setSentinelAddTrue] = useState(false);

    const cancelAdditionHandler = () =>{
        setSentinelAddTrue(false)
    }

    const editDepartment = (id) =>{

    }

    const editHandler = (id) =>{
        setEdit(!edit)
        setChosenEditID(id)
    }


    const cancelEditHandler = () =>{
        setEdit(false)
    }

    const editSavedAcceptedHandler = () =>{
        if(edit === true){
            fetchDepartmentList()
        }
        setEdit(!edit)
    }

    return(
        <div className={styles.container}>
            {sentinelAddTrue && <InputModal changeInputModal={showInputModalHandler} cancel={cancelAdditionHandler}/>}
            {edit && <EditDepartmentModal acceptedBackToModal={editSavedAcceptedHandler} idEdit={chosenEditID} cancelEdit={cancelEditHandler}></EditDepartmentModal>}
            <p>Org Name and List of Departments</p>
            <button aria-label="User Profile" onClick={showInputModalHandler}><Icon path={mdiPlusCircle} size={2} color="red"/> Add Department</button>
            <div className={styles.departmentViewer}>
                <StrippedTable editItem={editHandler} data={tableData}  content={departmentInfo}></StrippedTable>
            </div>
        </div>
    )
}

export default Department;