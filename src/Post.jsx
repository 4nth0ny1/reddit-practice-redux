import React from 'react';
import { editPost, deletePost } from './redux/actions/postActions';
import { useState } from 'react'; 
import PostEditForm from './PostEditForm';
import { connect } from 'react-redux'
import CommentContainer from "./CommentContainer"

const Post = props => {
    
    const [ showPostEditForm, setShowPostEditForm ] = useState(false)
    const [ showComments, setShowComments ] = useState(props.post.comments)

    const handleDelete = (e) => {
        props.deletePost(props.post.id)
    }

    return(
        <>
            <p>{props.post.title}</p>
            <p>{props.post.content}</p>
            <p>{props.post.subreddit}</p>

            <button onClick={() => setShowPostEditForm(!showPostEditForm)}>edit post</button>
            <button onClick={handleDelete}>delete post</button>
            <button onClick={() => setShowComments(!showComments)}>show comments</button>

            { showPostEditForm && <PostEditForm editPost={props.editPost} post={props.post} setShowPostEditForm={setShowPostEditForm} /> }
            { showComments && <CommentContainer comments={props.post.comments} setShowComments={setShowComments} /> }
            <hr></hr>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

      editPost: (post) => dispatch(editPost(post)), 
      deletePost: (id) => dispatch(deletePost(id))
    }
  }
  
  
  export default connect(null, mapDispatchToProps)(Post);