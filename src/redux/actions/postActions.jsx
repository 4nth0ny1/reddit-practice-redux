export const fetchPosts = (posts) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(posts => dispatch({type: "FETCH_POSTS", posts: posts}))
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({post})
        }

        fetch(`http://127.0.0.1:3000/posts`, options)
        .then(res => res.json())
        .then(post => {
            dispatch({type: "ADD_POST", post: post})
        })
    }
}