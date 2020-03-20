import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './reducers/Components/TodoForm'
import {todoReducer, initialState} from './reducers/Reducer'
import TodoList from '../src/reducers/Components/TodoList'


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  return (
    <div>
      <TodoForm dispatch={dispatch}/>
      
    </div>
  )
}

export default App;
