import styles from './Dashboard.module.css';
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchSystemComponents/SearchComponent"

const Dashboard = (props) => {
    return (
        <div className={styles.menu}>
            <nav className={styles.navChoices}>
                <ul className={styles.choices}>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Department">Department</Link>
                    </li>
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.searchBar}> <SearchComponent></SearchComponent></div>
            <div className={styles.accountChoices}>
                Account
            </div>
        </div>
    )
}

export default Dashboard;