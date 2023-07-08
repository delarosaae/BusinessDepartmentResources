import {useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import styles from "./Department.module.css";
import StrippedTableEmployees from "../components/UI/StrippedTableEmployees";

const Employees = (props) =>{

    const location = useLocation()
    const idDepartmentNeeded = location.state.idChosen;
    console.log(idDepartmentNeeded)

    const [employeeList, setEmployeeList] = useState([]);
    const tableData = ["EmployeeID", "First Name", "Second Name"]


    const fetchEmployeeList = useCallback( async() =>{

        try {
            const response = await fetch(`http://localhost:5000//employees/getEmployees/search?departmentID=${idDepartmentNeeded}`)
            if(!response.ok)
            {

            }

            const data = await response.json()
            console.log(data)
            const listData = [];
            for (const key in data)
            {
                console.log(key)
                console.log(data[key].department)
                console.log("This is id" + data[key].id)
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

            setEmployeeList(listData)
        }
        catch (error)
        {
            console.log(error)
        }
    }, []);

    useEffect(() =>{
        fetchEmployeeList();
    },[fetchEmployeeList])

    return(
        <div>
            <div>
                <StrippedTableEmployees data={tableData} content={employeeList}></StrippedTableEmployees>
            </div>        </div>
    )
}

export default Employees;