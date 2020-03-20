export const initialState = [
    {
        item: 'panic about Redux',
        completed: false,
        id: 1

    },
    {
        item: 'struggle with Redux',
        completed: false,
        id: 2
    },
    {
        item: 'pull hair out',
        completed: false,
        id: 3
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case "TOGGLE_TODO":
            console.log(state)
            return state.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...state,
                        completed: !item.completed
                    }
                }
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => {
                return todo.completed === false
            })
            default:  return state;
    }
        
            
    }

    // state.todos.map(todo => {
    //     return todo.id === action.payload.id ?
    //     { ...todo, completed: !completed} : todo;
    // })