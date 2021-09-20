const commentReducer = (state = { comments: [] }, action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
            return {
                comments: action.comments
            }

        default: 
            return state
    }
}

export default commentReducer