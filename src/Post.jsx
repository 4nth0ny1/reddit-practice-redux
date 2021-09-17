
const Post = props => {
    console.log(props)
    return(
        <>
            <p>{props.post.title}</p>
            <p>{props.post.content}</p>
            <p>{props.post.subreddit}</p>
            <hr></hr>
        </>
    )
}

export default Post