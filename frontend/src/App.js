import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Exercises from './components/Exercises/Exercises.js';
import Paginate from './components/Paginate/Paginate.js';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10)
  const [totalExercises, setTotalExercises] = useState(0)

  const fetchData = (page) => {
    const url = `http://127.0.0.1:8000/exercise-list/?page=${page}`;
    return fetch(url)
    .then(response => {
      return response.json();
    })
  }

  useEffect(() => {
    setLoading(true);
    fetchData(currentPage).then(data => {
      setExercises(data["list"]);
      setTotalExercises(data["exercises"]);
    });
    setLoading(false);
  }, [currentPage])

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const nextPage = (page) => {
    if (page * exercisesPerPage < totalExercises) {
      setCurrentPage(page + 1);
    }
  }

  const previousPage = (page) => {
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  }

  return (
    <div>
      <Exercises exercises={exercises} loading={loading} />
      <Paginate exercisesPerPage={exercisesPerPage} totalExercises={totalExercises} paginate={paginate} nextPage={nextPage} previousPage={previousPage} currentPage={currentPage} />
    </div>
  )
}

export default App;
