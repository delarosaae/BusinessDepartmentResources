import styles from "./Container.module.css"
import InfoBoxDepartment from "./InfoBoxDepartment";


/*
<div className={styles.container}>
                {props.children}
        </div>
* */


const Container = (props) =>{
    return(
        <div className={styles.container}>
            {props.listToShow.map( dept => {
                return <InfoBoxDepartment iconURL={dept.iconImage} name={dept.department}></InfoBoxDepartment>
            })}
        </div>
    )
}

export default Container;