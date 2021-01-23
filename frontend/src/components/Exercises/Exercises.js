import Exercise from '../Exercise/Exercise.js';

const Exercises = (props) => {
    if (props.loading) {
        return <h2>Loading...</h2>;
    }

    const exerciseList = props.exercises.map(exercise => {
        return (
          <Exercise 
            name={exercise.name} 
            description={exercise.description} 
            category={exercise.category} 
            key={exercise.id}
           />
        )
      })

    return (
        <div>
            <div className="card mb-4">
                <div className="card-header">Exercises</div>
                <ul className="list-group list-group-flush">
                    {exerciseList}
                </ul>
            </div>
        </div>
    )
}

export default Exercises;