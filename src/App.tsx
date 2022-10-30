import React from 'react';
import './App.css';
import { useSelector } from './store';
import { shallowEqual } from 'react-redux';

function App() {
  const person = useSelector((state) => state.todos, shallowEqual);
  return <></>;
}

export default App;
