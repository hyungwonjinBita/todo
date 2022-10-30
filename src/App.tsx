import React from 'react';
import './App.css';
import { useSelector } from './store';
import { shallowEqual } from 'react-redux';
import TodoList from './components/TodoList';

function App() {
  const person = useSelector((state) => state.todos, shallowEqual);
  console.log(person);
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
