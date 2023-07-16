import styles from "./InfoBox.module.css"
const InfoBoxDepartment = (props) =>{
    return(
        <div className={styles.card}>
                <div>
                    Info
                </div>
            <div>
                Label
            </div>
            <div>
                Image
            </div>
        </div>
    )
}

export default InfoBoxDepartment;