import styles from "./SearchBar.module.css"
import {useState} from "react";
const SearchBar = (props) =>{
    

    const [searchInput, setInputSearch] = useState("");
    // perhaps it will have to be an object with an index and if index is greater than 1, do the drop down
    const [searchHere, setSearchResult] = useState([])

    async function fetchResults(value) {
        if(searchInput.length > 0)
        {
            console.log("Longer than 0 letters")
            try {
                const response = await fetch(`http://localhost:5000/resources/search?seek=${value}`)
                if(!response.ok)
                {

                }

                const data = await response.json()
                console.log(data)
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

    return(
        <form className={styles.searchBar} >
            <input className={styles.inputField} value={searchInput} placeholder={"Search"}
            onChange={handleSearchInput}/>
           
        </form>
    );
}

export default SearchBar;