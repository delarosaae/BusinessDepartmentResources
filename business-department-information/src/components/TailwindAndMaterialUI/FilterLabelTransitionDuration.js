import './FilterLabelTransitionDuration.css'

const FilterLabelTransitionDuration = (props) =>{
    return(
        <div className='filterDiv'>
            <button
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Save Changes
            </button>
        </div>
    )
}

export default FilterLabelTransitionDuration;