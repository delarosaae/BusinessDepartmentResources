import Dashboard from "./Dashboard";
import {Link, Outlet} from "react-router-dom";
import styles from "./Root.module.css"
import {useCallback, useEffect, useState} from "react";
import SideBarTimeLine from "../components/SideBar/SideBarTimeLine";
import logo from "../Images/946.jpg";

const Root = (props) =>{


    const [mostRecentResourcesTimeLine, setMostRecentResourcesTimeLine] = useState([])

    const fetchRecentHistory = useCallback( async() =>{
        try {
            const response = await fetch('http://localhost:5000//resources/MostRecentResources')
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
                    name: data[key].name,
                    dateAdded: data[key].dateAdded,
                    departmentSection: data[key].departmentSection,
                    resourceInfo: data[key].resourceInfo,
                    resourceID: data[key].resourceID,
                })
            }
            setMostRecentResourcesTimeLine(listData);
            console.log(listData)
        }
        catch (error)
        {
            console.log(error)
        }
    }, []);

    useEffect(() =>{
        fetchRecentHistory();
    },[fetchRecentHistory])

    {
        /*
         <div className={styles.dashboardBar}>
            <Dashboard></Dashboard>
        </div>

        <div className={styles.leftBar}>
            <SideBarTimeLine resourceTimeLineData={mostRecentResourcesTimeLine}></SideBarTimeLine>
        </div>
        <div className={styles.body}>
            <Outlet></Outlet>
        </div>
        <div className={styles.bottomBar}>
            About Us
        </div>
         */
    }


    /*
    Mobile Screen
    <div className={styles.pageContainer}>
            <div className={styles.dashboardBar}>
                    <nav className={styles.gridNav}>
                        <ul className={styles.gridUL}>
                            <li>
                                <Link className={styles.liRemoveDecoration} to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link  className={styles.liRemoveDecoration} to="/Department">
                                    Department
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.liRemoveDecoration} to="/Resources">
                                    Resourcess
                                </Link>
                            </li>
                        </ul>
                    </nav>
                <div>
                    <p>
                        Out of Missery
                    </p>
                </div>
            </div>
        </div>
    *

    <header className={styles.headerDash}>
                <Dashboard></Dashboard>
            </header>
            <div className={styles.outlet}>
                <img className={styles.imageSize} src={logo} alt="Logo" />

                </div>

  <div className={styles.outlet}>
                {/*
                <img className={styles.imageSize} src={logo} alt="Logo" />

                }
<Outlet></Outlet>
</div>

    <div className={styles.leftBar}>
                <SideBarTimeLine resourceTimeLineData={mostRecentResourcesTimeLine}></SideBarTimeLine>
            </div>



    */

    return(

        <div className={styles.pageContainer}>
            <header className={styles.headerDash}>
                <Dashboard></Dashboard>
            </header>
            <div className={styles.outlet}>
                <Outlet></Outlet>
            </div>
            <div className={styles.leftBar}>
                <SideBarTimeLine resourceTimeLineData={mostRecentResourcesTimeLine}></SideBarTimeLine>
            </div>
            <footer className={styles.footerDash}>About</footer>
        </div>


    )
}

export default Root;