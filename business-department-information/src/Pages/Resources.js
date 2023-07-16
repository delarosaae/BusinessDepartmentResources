import {useCallback, useEffect, useState} from "react";
import InputModalResources from "../components/UI/InputModalResources";
import StrippedTable from "../components/UI/StrippedTable";
import StrippedTableResourcesDepList from "../components/UI/StrippedTableResourcesDepList";

const Resources = (props) =>{

    const [showModal, setShowModal] = useState(false)

    const showInputHandler = () =>{
        setShowModal(!showModal)
    }

    const [departmentList, setDepartmentList] = useState([])

    const data= ["Department"]

    useEffect(() =>{
        try {
            fetch('http://localhost:5000/department/getDepartments').then(res => res.json()).then(
                (data) => {
                    const listData = [];
                    for (const key in data) {
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
                    setDepartmentList(listData);
                })
        }
        catch(error)
        {
            console.log(error)
        }
    },[])

    const cancelAdditionHandler = () =>{
        setShowModal(false)
    }

    return(
        <div>
            {showModal && <InputModalResources changeInputModal={showInputHandler} cancel={cancelAdditionHandler} listOfDepartment={departmentList}></InputModalResources>}
            <button onClick={showInputHandler}>Add Resource</button>
            <div>
                {/*
                So then show a list of departments here,
                but now have a link for each that will take us to that departments resources

                Ok, have either a list of departments or a list of the resources where the person can
                decide what they want to see

                So since we are not adding a department, it won't re-update the departmentList. Only when we refresh
                the page or go to it by clicking on the link
                */}
                <StrippedTableResourcesDepList data={data} content={departmentList}></StrippedTableResourcesDepList>

            </div>
        </div>
    )

}

export default Resources;