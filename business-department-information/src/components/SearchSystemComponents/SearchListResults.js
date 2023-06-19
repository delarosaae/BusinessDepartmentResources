import SearchResult from "./SearchResult";

const SearchListResults = ({props}) =>{
    return (
        <div className="search-result-list">
            {
                props.map((prop, id) =>{
                    return <SearchResult result={props.name} key={id}/>
                })
            }
        </div>
    )
}

export default SearchListResults;