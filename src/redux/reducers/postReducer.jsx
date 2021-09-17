const postReducer = (state = { posts: [] }, action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return {
                posts: action.posts
            }
        case "ADD_POST":
            return {
                posts: [...state.posts, action.post]
            }
        default: 
            return state
    }
}

export default postReducer