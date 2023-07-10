import {useState} from "react";
import SearchBar from "./SearchBar";
import SearchListResults from "./SearchListResults";
import styles from "./SearchComponent.module.css"

const SearchComponent = (props) =>{
    const [resultList, setResults] = useState([]);

    {/*
        <div className={styles.searchComponent}>
            <div className={styles.searchBarContainer}>
                <SearchBar setResults={setResults}/>
                {resultList && resultList.length > 0 && <SearchListResults resultList={resultList}/>}
            </div>

        </div>
        */
    }

    return(
            <div className={styles.searchBarContainer}>
                <SearchBar setResults={setResults}/>
                {resultList && resultList.length > 0 && <SearchListResults resultList={resultList} />}
            </div>
    )
}

export default SearchComponent;