
import InfoBoxDepartment from "../components/UI/InfoBoxDepartment";
import Container from "../components/UI/Container";
import styles from "./Home.module.css"
import {useCallback, useEffect, useState} from "react";

const Home = (props) =>{


    const [departments, setDepartmentLists] = useState([])

    const fetchDepartmentList = useCallback( async() =>{
        try {
            const response = await fetch('http://localhost:5000/home/getDepartmentsStats')
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
                    department: data[key].department,
                    iconImage: data[key].iconImage
                })
            }
            setDepartmentLists(listData);
            console.log(listData)
        }
        catch (error)
        {
            console.log(error)
        }
    }, []);

    useEffect(() =>{
        fetchDepartmentList();
    },[fetchDepartmentList])

    /*
    <div className={styles.home}>
            <Container listToShow={departments}>
                {departments.map( dept => {
                    return <InfoBoxDepartment iconURL={dept.iconImage} name={dept.department}></InfoBoxDepartment>
                })}
            </Container>
        </div>
    * */

    return(
        <div className={styles.home}>
            <Container listToShow={departments}>
            </Container>
        </div>
    )
}

export default Home;