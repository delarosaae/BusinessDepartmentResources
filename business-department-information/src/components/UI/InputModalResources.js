import {useEffect, useState} from "react";
import styles from "./InputModal.module.css"
import Card from "./Card";

const InputModalResources = (props) => {

    const [enteredEmployeeID, setEnteredEmployeeID] = useState('');
    const [enteredEmployeeName, setEnteredEmployeeName] = useState('')
    // const [enteredDeptHeadId, setDeptHeadId] = useState('')

    const [enteredDepartmentID, setEnteredDepartmentID] = useState('');
    const [enteredDepartmentName, setEnteredDepartmentName] = useState("")

    const [enteredResourceSection, setResourceSection] = useState('');

    const [enteredResourceInformation, setResourceInformation] = useState('');

    const departmentList = props.listOfDepartment

    const [employeeList, setEmployeeList] = useState([])




    const deptNameChangeHandler = (event) => {
        //console.log(event.target.value)
        const valueArray = event.target.value.split(',')
        //console.log(valueArray[0])
        //console.log(valueArray[1])
        setEnteredDepartmentID(valueArray[0])
        setEnteredDepartmentName(valueArray[1])
        addEmployeeList(valueArray[0]);
    }

    const deptEmployeeChangeHandler = (event) =>{
        //console.log(event.target.value)

        setEnteredEmployeeID(event.target.value)
    }

    const deptInformation = (event) =>{
        setResourceInformation(event.target.value)
    }

    const deptSectionNameHandler = (event) =>{
        setResourceSection(event.target.value)
    }

    /*
    const headIDChangeHandler = (event) => {
        setDeptHeadId(event.target.value)
    }
   */

    async function addEmployeeList(idToLookUp) {

        try {
            const response = await fetch(`http://localhost:5000//employees/getEmployees/search?departmentID=${idToLookUp}`)

            const data = await response.json()
            //console.log(data)
            const listData = [];
            for (const key in data)
            {
                //console.log(key)
                //console.log(data[key])
                //console.log("This is id" + data[key].employeeID)
                /*
                listData.push([

                    data[key].id,
                   data[key].department
                ])
                 */
                listData.push({
                    employeeID: data[key].employeeID,
                    firstName: data[key].firstName,
                    lastName: data[key].lastName,
                })
            }
            setEnteredEmployeeID(listData[0].employeeID)
            //console.log("Employee ID on choosing department "+ listData[0].employeeID)
            setEmployeeList(listData)
        }
        catch (error)
        {
            console.log(error)
        }
    }


    async function addResourceInfo(event) {

        event.preventDefault()

        const info = {
            departmentID: enteredDepartmentID,
            employeeID: enteredEmployeeID.toString(),
            section: enteredResourceSection,
            information: enteredResourceInformation
        }

        //console.log(info)
        const infoArray = []

        infoArray.push(info)
        //console.log(infoArray)

        const response = await fetch("http://localhost:5000/resources/addResource", {
            method: 'POST',
            body: JSON.stringify(infoArray),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        //console.log("here is data below")
        //console.log(data);
        //console.log("data added")

        props.changeInputModal();
    }

    useEffect(() =>{
            try {
                fetch(`http://localhost:5000//employees/getEmployees/search?departmentID=${departmentList[0].id}`).then(res => res.json()).then(
                    (data) => {
                        const listData = [];
                        for (const key in data)
                        {
                            //console.log(key)
                            //console.log(data[key])
                            //console.log("This is id" + data[key].employeeID)
                            /*
                            listData.push([

                                data[key].id,
                               data[key].department
                            ])
                             */
                            listData.push({
                                employeeID: data[key].employeeID,
                                firstName: data[key].firstName,
                                lastName: data[key].lastName,
                            })
                        }
                        setEnteredDepartmentID(departmentList[0].id.toString())
                        setEnteredEmployeeID(listData[0].employeeID.toString())
                        //console.log("Employee ID on choosing department "+ listData[0].employeeID)
                        setEmployeeList(listData)
                    })
            }
            catch(error)
            {
                console.log(error)
            }
        },[])

    return (
        <div>
            <div className={styles.backdrop}>
                <Card className={styles.modal}>
                    <form onSubmit={addResourceInfo} className={styles.formDisplay}>
                        <label htmlFor="departmentID">Department</label>
                        <select onChange={deptNameChangeHandler}
                                name="department" id="department">
                            {
                                departmentList.map(item =>{
                                    return <option value={item.id}>{item.department}</option>
                                })
                            }
                        </select>
                        {/*
                        <input
                            type="input"
                            list="options"
                            onChange={deptNameChangeHandler}
                            value={enteredDepartmentName}
                        />
                        <datalist id="options">
                            {
                                deoartmentList.map(item =>{
                                    return <option value={[item.id, item.department]} label={item.department}></option>
                                })
                            }
                        </datalist>
                        */}

                        <label htmlFor="employee">Employee</label>
                        <select  onChange={deptEmployeeChangeHandler}
                                 name="employee" id="employee">
                            {
                                employeeList.map(item =>{
                                    return <option value={item.employeeID}>{item.firstName + ' ' + item.lastName}</option>
                                })
                            }
                        </select>
                        {/*
                            <datalist id="employeeOptions">
                            {
                                employeeList.map(item =>{
                                    return <option value={[item.employeeID, item.firstName, item.lastName]} label={item.firstName + " " + item.lastName}></option>
                                })
                            }
                        </datalist>
                        */}

                        <label htmlFor="departmentSection">Department Section</label>
                        <input
                            id="departmentSection"
                            type="text"
                            value={enteredResourceSection}
                            onChange={deptSectionNameHandler}
                        />
                        <label htmlFor="resourceInformation">Information</label>
                        <textarea value={enteredResourceInformation}
                                  onChange={deptInformation}
                                  id="resourceInformation"
                                  name="resourceInformation"
                                  rows="4" cols="50">
                        </textarea>
                        <button type="submit">Click</button>
                        <button type="button" onClick={props.cancel}>Cancel</button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default InputModalResources;