import styles from "./SearchBar.module.css"
import {useEffect, useRef, useState} from "react";
const SearchBar = (props) =>{
    

    const [searchInput, setInputSearch] = useState("");
    // perhaps it will have to be an object with an index and if index is greater than 1, do the drop down
    const [searchHere, setSearchResult] = useState([])

    async function fetchResults(value) {
        if(searchInput.length > 0)
        {
            // console.log("Longer than 0 letters")
            try {
                if(value.includes(" "))
                {
                    value = value.replace(/[ ,]+/g, ",");
                }

                const response = await fetch(`http://localhost:5000/resources/search?seek=${value}`)
                if(!response.ok)
                {

                }

                const data = await response.json()
                // console.log("Data of the search results " + data)
                const listData = [];
                for (const key in data)
                {
                    listData.push({
                        resourceID: data[key].resourceID,
                        departmentID: data[key].departmentID,
                        createdByEmployeeID: data[key].createdByEmployeeID,
                        departmentSection: data[key].departmentSection,
                        resourceInfo: data[key].resourceInfo,
                    })
                }
                // console.log("List of the data right here: " + listData)
                props.setResults(listData)
            }
            catch (error)
            {
                console.log(error)
            }
        }

    }

    const handleSearchInput = (event) =>{
        setInputSearch(event.target.value)
        fetchResults(event.target.value)
    }

    const [moduleStyle, setModuleStyle] = useState(true)

    useEffect( () =>{
        document.addEventListener("click", handleClickOutside, true)
    })

    const refOne = useRef(null)

    const handleClickOutside = (e) =>{
        if (!refOne.current.contains(e.target))
        {
            setModuleStyle(true)
            props.showResultClicked(false)

        }
        else{
            setModuleStyle(false)
            props.showResultClicked(true)
        }
    }

    return(
        <form className={styles.searchBar} >
            <input className={moduleStyle ? styles.inputField : styles.inputFieldClicked} value={searchInput} placeholder={"Search"}
                  ref={refOne} onChange={handleSearchInput}
            />
            {/*
            <input className={moduleStyle ? styles.inputField : styles.inputFieldClicked} value={searchInput} placeholder={"Search"}
            onChange={handleSearchInput}
                   onMouseLeave={e =>{
                       setModuleStyle(true)
                   }}

                   onMouseEnter={e =>{
                       setModuleStyle(false)
                   }}
            />
            */}

        </form>
    );
}

export default SearchBar;