import React from 'react'
import Todo from './Todo'


const TodoList = (props) => {
 console.log('!!!!!!!', props)
    return (
        <div>
            
            {props.state.map(todo => {
             return  <Todo todo={todo} dispatch={props.dispatch}/> 
            })}
       

           
        </div>
    )

}

export default TodoList;