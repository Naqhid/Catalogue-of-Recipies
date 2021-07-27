import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import MealList from './MealList';
import { fetchIngredientsStartAsync } from '../actions/getIngredient';

const Home = () => {
  const [state, setState] = useState('Beef');
  const dispatch = useDispatch();

  const handleCategoryChange = category => {
    setState(category);
  };

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync());
  }, []);

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <MealList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};
export default Home;

// add home container