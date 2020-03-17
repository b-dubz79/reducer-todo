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
            default:  return state;
    }
        
            
    }