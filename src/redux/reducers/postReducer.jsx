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
        case "EDIT_POST": 
            const editPost = state.posts.map(post => post.id === action.post.id ? action.post : post)
            return {
                posts: editPost
            }
        case "DELETE_POST":
            const posts = state.posts.filter(post => post.id !== action.id)
            return {
                posts: posts
            }
        default: 
            return state
    }
}

export default postReducer