export const initialState = [
    {
        type: 'panic about Redux',
        completed: false,
        id: 1

    },
    {
        type: 'struggle with Redux',
        completed: false,
        id: 2
    },
    {
        type: 'pull hair out',
        completed: false,
        id: 3
    }
]

export const todoReducer = (state, action) => {
    switch (action.type){
        default: 
        return state; 
    }
   
}