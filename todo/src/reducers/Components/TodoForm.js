import React, {useState, useReducer} from 'react'
import {todoReducer, initialState} from '../Reducer'
import TodoList from './TodoList'





// const clearCompleted = () => {
//     setTodoInput({
//         type: state.type.filter(todo => {
//             return(todo.completed !== false)
//         })
//     })
// }

const TodoForm = () => {
    const [state, dispatch] = useReducer (todoReducer, initialState)
    const [todoInput, setTodoInput] = useState('')

    const handleChanges = (e) => {
        e.preventDefault();
        setTodoInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoInput('')
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='todoInput'
                value={todoInput}
                onChange={handleChanges}
            />
            
            <button onClick={() => dispatch({type: "ADD_TODO", payload: todoInput })}>Add ToDo </button>
            <button>Clear</button>

            <TodoList state={state} dispatch={dispatch}/>
        </form>

    </div>
    )
}

export default TodoForm;