import {useCallback, useEffect, useState} from "react";
import styles from "./InputModal.module.css"
import Card from "./Card";
import container from "./EditDepartmentModal.module.css"

const EditDepartmentModal = (props) => {

    const [departmentName, setDepartmentName] = useState('')
    const [departmentIconURL, setDepartmentIconURL] = useState('')
    const [allowEdit, setAllowEdit] = useState(false);
    const [deptID, setDeptID] = useState('')
    //let defaultName;
    //let defaultIconURL

    const fetchDepartmentList = useCallback( async() =>{
        try {
            console.log("Before looking at database")
            const response = await fetch(`http://localhost:5000/department/getDepartment/search?seek=${props.idEdit}`)
            if(!response.ok)
            {

            }

            const data = await response.json()
            console.log(data)
            const departmentInfo = [];
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
                setDeptID(String(data[key].id))
                setDepartmentName(data[key].department)
                //defaultName = data[key].department
                if(  data[key].iconImage == null)
                {
                    setDepartmentIconURL('')
                    //defaultIconURL = ''
                }
                else{
                    //defaultIconURL = data[key].iconImage
                    setDepartmentIconURL(data[key].iconImage)
                }
            }
        }
        catch (error)
        {
            console.log(error)
        }
    }, []);

    useEffect(() =>{
        fetchDepartmentList();
    },[fetchDepartmentList])

    const allowEditHandler = ()=>{
        setAllowEdit(!allowEdit)
    }



    const departmentNameChangeHandler = (event) =>{
        setDepartmentName(event.target.value)

    }

    const departmentIconURLChangeHandler = (event) =>{
        setDepartmentIconURL(event.target.value)
    }

    /*
    Since I don't need the set to the defaults, I can just get rid of this
     and call the props.cancelChange directly on the onclick

    const cancelChange = ()=>{
        // Don't really need these as it pulls form the database
        // setDepartmentName(defaultName)
        // setDepartmentIconURL(defaultIconURL)
        props.cancelEdit(false)
    }

     */
    async function submitChangeHandler(){

        const newInfo = {
            departmentID: deptID,
            department: departmentName,
            iconImage: departmentIconURL
        }
        console.log(newInfo)
        const infoArray = []

        infoArray.push(newInfo)
        console.log(infoArray)

        const response = await fetch(`http://localhost:5000/department/changeDepartment/`, {
            method: 'PUT',
            body: JSON.stringify(infoArray),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        //console.log(data);
        props.acceptedBackToModal()
    }

    return (
        <div>
            <div className={styles.backdrop}>
                <Card className={styles.modal}>
                    <div className={container.displayItems}>
                        <form className={container.displayItems}>
                        <label>Department Name</label>
                        <input id="departmentName" value={departmentName} onChange={departmentNameChangeHandler} disabled={!allowEdit}></input>
                        <label>Department Icon Url</label>
                        <input id="departmentIconURL" value={departmentIconURL} onChange={departmentIconURLChangeHandler} disabled={!allowEdit}></input>
                    </form>
                        <button onClick={allowEditHandler}>Allow Edit</button>
                        <button onClick={submitChangeHandler}>Submit</button>
                        <button onClick={props.cancelEdit}>Cancel</button>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default EditDepartmentModal;