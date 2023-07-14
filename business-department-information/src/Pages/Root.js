import Dashboard from "./Dashboard";
import {Outlet} from "react-router-dom";
import styles from "./Root.module.css"

const Root = (props) =>{
    return(
        <div className={styles.pageContainer}>
            <div className={styles.dashboardBar}>
                <Dashboard></Dashboard>
            </div>

            <div className={styles.leftBar}> Organization</div>
            <div className={styles.body}>
                <Outlet></Outlet>
            </div>
            <div className={styles.bottomBar}>
                About Us
            </div>
        </div>
    )
}

export default Root;