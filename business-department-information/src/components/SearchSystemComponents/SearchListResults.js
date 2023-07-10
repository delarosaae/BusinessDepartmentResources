import SearchResult from "./SearchResult";
import styles from './SearchListResults.module.css'

const SearchListResults = (props) =>{

    console.log(props.resultList)

    return (
        <div className={styles.resultsList}>
            {
                props.resultList.map((item) =>{
                    return <SearchResult result={item.resourceInfo} id={item.resourceID}/>
                })
            }
        </div>
    )
}

export default SearchListResults;