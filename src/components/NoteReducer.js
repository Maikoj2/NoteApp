

export const noteReducer = (initialState, action) => {


    switch (action.type) {
        case '[NOTE] Add Note':
            return [action.payload, ...initialState]
        case '[NOTE] deletedFirt Note':
            return initialState.filter( note => note.id !== action.payload )
        case '[NOTE] Update Note':
            return initialState.map( note => (note.id === action.id)?{ ...note, Message: action.payload, Date:new Date().toLocaleString()}:note )
        default:
            return initialState;
    }
}