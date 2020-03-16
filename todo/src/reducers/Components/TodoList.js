import React from 'react'
import TodoForm from './TodoForm'
import {todoReducer, initialState} from '../Reducer'
import React, {useState, useReducer} from 'react'

const TodoList = () => {
    return (
        <div>
            <h1>{}</h1>
        </div>

        <TodoForm/>
    )

}

export default TodoList;