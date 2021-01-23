const Paginate = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalExercises / props.exercisesPerPage); i++) {
        pageNumbers.push(i);
    }

    const numberList = pageNumbers.map(number => {
        return (
            <li key={number} className='page-item'>
                <a onClick={() => props.paginate(number)} href="!#" className='page-link'>
                    {number}
                </a>
            </li>
        )
    })

    return (
        <nav>
            <ul className='pagination'>
                <li onClick={() => props.previousPage(props.currentPage)} className="page-item"><a className="page-link" href="!#">Previous</a></li>
                {numberList}
                <li onClick={() => props.nextPage(props.currentPage)} className="page-item"><a className="page-link" href="!#">Next</a></li>
            </ul>
        </nav>
    )
}

export default Paginate;