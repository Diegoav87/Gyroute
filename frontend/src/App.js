import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Exercise from './components/Exercise/Exercise.js'

const App = () => {
  const [exercises, setExercises] = useState([]);

  const fetchData = () => {
    const url = 'http://127.0.0.1:8000/exercise-list/';
    return fetch(url)
    .then(response => {
      return response.json();
    })
  }

  useEffect(() => {
    fetchData().then(data => setExercises(data))
  }, [])

  const exerciseList = exercises.map(exercise => {
    return (
      <Exercise name={exercise.name} description={exercise.description} category={exercise.category} key={exercise.id} />
    )
  })

  return (
    <div>
      {exerciseList}
    </div>
  )
}

export default App;
