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
            {exerciseList}
        </div>
    )
}

export default Exercises;