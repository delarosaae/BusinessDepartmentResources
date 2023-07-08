import styles from "./SearchBar.module.css"
import {useState} from "react";
const SearchBar = ({searchResult}) =>{
    

    const [searchInput, setInputSearch] = useState("");
    // perhaps it will have to be an object with an index and if index is greater than 1, do the drop down

    async function fetchResults(value) {

        const values = {
            searchInputReact: value,
            id: 1
        }

        const response = await fetch('http://localhost:5000/department', {
            body: JSON.stringify(values),
            headers: { 
                'Content-Type': 'application/json'
            }
        })
    }

    const handleSearchInput = (event) =>{
        setInputSearch(event.target.value)
        fetchResults(event.target.value)
    }

    return(
        <form className={styles.searchBar} >
            <input className={styles.inputField} value={searchInput} type="search" placeholder={"Search"}
            onChange={handleSearchInput}/>
           
        </form>
    );
}

export default SearchBar;