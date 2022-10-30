import React, { useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import fetchTodoData from './api/fetchTodoList';
// import { useDispatch } from 'react-redux';
import { useDispatch } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
