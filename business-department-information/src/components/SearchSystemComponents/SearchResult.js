import styles from './SearchResult.module.css'

const SearchResult = (props) => {
    console.log(props)

    return(
        <div className={styles.searchResult}
            onClick={(e)=> alert('You selected ' + props.id)}
        >
            {props.result}
        </div>
    );

}

export default SearchResult;