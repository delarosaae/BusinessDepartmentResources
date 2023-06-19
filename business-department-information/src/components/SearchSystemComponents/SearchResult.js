const SearchResult = ({props}) => {

    return(
        <div className="search-result"
            onClick={(e)=> alert('You selected $(result)')}
        >
            {props}
        </div>
    );

}

export default SearchResult;