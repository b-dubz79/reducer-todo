import {todoReducer, initialState} from '../Reducer'
import React, {useState, useReducer} from 'react'

const [state, dispatch] = useReducer (todoReducer, initialState)
const [todoInput, setTodoInput] = useState('')

const handleChanges = (e) => {
    setTodoInput(e.target.value)
}

// const clearCompleted = () => {
//     setTodoInput({
//         type: state.type.filter(todo => {
//             return(todo.completed !== false)
//         })
//     })
// }

const TodoForm = () => {
    return (
    <div>
        <form>
            <input 
                type='text'
                name='todo'
                value={todoInput}
                onChange={handleChanges}
            >
            </input>
            <button onClick='submit'>Add ToDo</button>
            <button>Clear</button>
        </form>
    </div>
    )
}

export default TodoForm;