import React, {useState, useReducer} from 'react'
import {todoReducer, initialState} from '../Reducer'
import TodoList from './TodoList'


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

    const handleClear = (e) => {
        e.preventDefault()
        dispatch({type: 'CLEAR_COMPLETED'})
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
            <button ONlCIK={ handleClear}>Clear Completed</button>

            <TodoList state={state} dispatch={dispatch}/>
        </form>

    </div>
    )
}

export default TodoForm;


// const clearCompleted = () => {
//     setTodoInput({
//         type: state.type.filter(todo => {
//             return(todo.completed !== false)
//         })
//     })
// }