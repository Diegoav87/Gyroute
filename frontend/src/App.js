import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Exercises from './components/Exercises/Exercises.js';
import Paginate from './components/Paginate/Paginate.js';
import Categories from './components/Categories/Categories.js';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10)
  const [totalExercises, setTotalExercises] = useState(0)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setLoading(true);
    const fetchData = (page) => {
      const url = `http://127.0.0.1:8000/exercise-list/?page=${page}${category}`;
      return fetch(url)
      .then(response => {
        return response.json();
      })
    }
    fetchData(currentPage).then(data => {
      setExercises(data["list"]);
      setTotalExercises(data["exercises"]);
    });
    setLoading(false);
  }, [currentPage, category])

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

  const changeCategory = (category) => {
    setCategory(`&category=${category}`);
    console.log(category)
  }

  return (
    <div>
      <Categories changeCategory={changeCategory} />
      <Exercises exercises={exercises} loading={loading} />
      <Paginate exercisesPerPage={exercisesPerPage} totalExercises={totalExercises} paginate={paginate} nextPage={nextPage} previousPage={previousPage} currentPage={currentPage} />
    </div>
  )
}

export default App;
