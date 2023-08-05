import styles from "./InfoBox.module.css"
const InfoBoxDepartment = (props) =>{

    console.log(props.iconURL)

    return(
        <div className={styles.card}>
            <img
                className={styles.imagePosition}
                src={props.iconURL}
                alt="Failed To Load"
            />
            <div
                className={styles.departmentName}
            >
                {props.name}
            </div>
            <div className={styles.departmentInfo}>
                Info
            </div>
        </div>
    )
}

export default InfoBoxDepartment;