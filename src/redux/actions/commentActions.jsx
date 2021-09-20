export const fetchComments = (comments) => {
    
    return (dispatch) => {
        
        fetch(`http://localhost:3000/comments`)
        .then(res => res.json())
        .then(comments => {
            dispatch({type: "FETCH_COMMENTS", comments: comments})
        })
    }
}