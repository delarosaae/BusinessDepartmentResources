import {useEffect, useState} from "react";
import InputModalResources from "../components/UI/InputModalResources";
import StrippedTable from "../components/UI/StrippedTable";
import StrippedTableResourcesDepList from "../components/UI/StrippedTableResourcesDepList";
import ButtonFilter from "../components/Tailwind/Flowbite/ButtonFilter";
import styles from './Resources.module.css'
import {createTheme, Switch, ThemeProvider} from "@mui/material";
import SwitchTwoOptions from "../components/InteractiveUI/SwitchTwoOptions";
import FilterLabelTransitionDuration from "../components/TailwindAndMaterialUI/FilterLabelTransitionDuration";

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
        <div className={styles.resourceMain}>
            {showModal && <InputModalResources changeInputModal={showInputHandler} cancel={cancelAdditionHandler} listOfDepartment={departmentList}></InputModalResources>}


            {/*
            <ButtonFilter></ButtonFilter>

                <button
                    className="h-10 w-25 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    Size
                </button>
            */}
            <button className={styles.addResource} onClick={showInputHandler}>Add Resource</button>

            <div className={styles.filterDuration}>
                <FilterLabelTransitionDuration ></FilterLabelTransitionDuration>
            </div>

            <SwitchTwoOptions firstOption={"Department"} secondOption={"Resource"}></SwitchTwoOptions>

            <div className={styles.tableForResources}>
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