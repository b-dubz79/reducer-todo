import React from 'react'

const Todo = (props) => {
console.log('&&&&', props.todo)
    const handleToggle = (id) => {
        props.dispatch({type:"TOGGLE_TODO", payload:id})
    }
    
    return (
        <div >
            <h1 className={props.todo.completed ? 'completed' : ''}
                onClick={() => handleToggle(props.todo.id)}
            >{props.todo.item}</h1>
        </div>
    )
}
export default Todo