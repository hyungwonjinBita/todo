import React from 'react';
import './App.css';
import {useSelector} from "./store";
import {shallowEqual} from "react-redux";

function App() {
  const person = useSelector(state => state.sample, shallowEqual)
  return (
    <div className="App">
      Boot React App
      <p>{`my name is ${person.firstName} ${person.lastName}`}</p>
    </div>
  );
}

export default App;
