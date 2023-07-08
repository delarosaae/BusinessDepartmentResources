import {useState} from "react";
import styles from "./InputModal.module.css"
import Card from "./Card";

const InputModal = (props) => {

    const [enteredDeptName, setEnteredDeptName] = useState('')
   // const [enteredDeptHeadId, setDeptHeadId] = useState('')


    const deptNameChangeHandler = (event) => {
        setEnteredDeptName(event.target.value)
    }

    /*
    const headIDChangeHandler = (event) => {
        setDeptHeadId(event.target.value)
    }
   */

    async function addDepartmentInfo(event) {

        event.preventDefault()

        const info = {
            departmentName: enteredDeptName,
            //headID: enteredDeptHeadId
        }

        console.log(info)
        const infoArray = []

        infoArray.push(info)


        const response = await fetch("http://localhost:5000/department/addDepartment", {
            method: 'POST',
            body: JSON.stringify(infoArray),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("here is data below")
        console.log(data);

        props.changeInputModal();
    }



    async function postTest(){

        const info = {
            departmentName: "Rocket Man"
        }

        const infoArray = []

        infoArray.push(info)

        const response = await fetch("http://localhost:5000/department/addDepartment", {
            method: 'POST',
            body: JSON.stringify(infoArray),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <div className={styles.backdrop}>
                <Card className={styles.modal}>
                    <form onSubmit={addDepartmentInfo} className={styles.formDisplay}>
                        <label htmlFor="departmentName">Department</label>
                        <input
                            id="departmentName"
                            type="text"
                            value={enteredDeptName}
                            onChange={deptNameChangeHandler}
                        />
                        <button type="submit">Click</button>
                        <button type="button" onClick={props.cancel}>Cancel</button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default InputModal;