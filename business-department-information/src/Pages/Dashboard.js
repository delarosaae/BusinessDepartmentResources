import styles from './Dashboard.module.css';
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchSystemComponents/SearchComponent"
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from "@mui/material";
import DashboardMenuDropDown from "../components/MaterialUI/DashboardMenuDropDown";
import logo from '../Images/946.jpg'



/*
  <div className={styles.grid}>
            <div className={styles.gridDivChoices}>
            <nav className={styles.gridNav}>
                <ul className={styles.choices}>
                    <li>
                        <Link className={styles.buttonChoices} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.buttonChoices} to="/Department">
                            Department
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.buttonChoices} to="/Resources">
                            Resourcess
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
            <div className={styles.gridSearchBarArea}>
                ---------- spliot here this was tossed out but put it there
                <div className={styles.gridSearchComponent}>
                    <SearchComponent></SearchComponent>
                </div>
                 -------- split here
/*
<SearchComponent></SearchComponent>
</div>
<div className={styles.gridAccountChoices}>
    Account
</div>
</div>
*/






const Dashboard = (props) => {
    return (
        <div className={styles.grid}>
            <div className={styles.logo}>
                <img className={styles.imageSize} src={logo} alt="Logo" />
            </div>
            <div className={styles.gridSearchBarArea}>
                <SearchComponent></SearchComponent>
            </div>
            <div className={styles.gridAccountChoices}>
                <DashboardMenuDropDown></DashboardMenuDropDown>
            </div>
        </div>
    )
}

export default Dashboard;