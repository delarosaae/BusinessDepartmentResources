import {useState} from "react";
import SearchBar from "./SearchBar";
import SearchListResults from "./SearchListResults";
import styles from "./SearchComponent.module.css"
import React from "react";

const SearchComponent = (props) =>{
    const [resultList, setResults] = useState([]);
    const [exampleList, setExampleList] = useState([{resourceInfo: "Hi", resourceID: "2"}])

    const [showSearchList, setShowSearchList] = useState(false)


    const showSearchListHandler = () =>{
        setShowSearchList(!setShowSearchList())
    }

    {/*
        <div className={styles.searchComponent}>
            <div className={styles.searchBarContainer}>
                <SearchBar setResults={setResults}/>
                {resultList && resultList.length > 0 && <SearchListResults resultList={resultList}/>}
            </div>

        </div>
        */
    }

    {/*
    <div className={styles.searchBarContainer}>
                <SearchBar setResults={setResults}/>
                {resultList && resultList.length > 0 && <SearchListResults resultList={resultList} />}
            </div>
    */}

    const [clickedOnSearch, setClickedOnSearch] = useState(false)

    return(
        <div className={styles.searchComponent}>
            <div className={styles.searchBarAlignToMiddle}>
                <SearchBar showResultClicked={setClickedOnSearch} setResults={setResults}/>
            </div>
            {clickedOnSearch && <div className={styles.searchDrop}>
                <SearchListResults  resultList={resultList}/>
            </div>}
            {/*
                resultList && resultList.length > 0 && <div className={styles.searchDrop}>
                <SearchListResults resultList={resultList}/>
            </div>
            */
            }
        </div>


    )
}

export default SearchComponent;