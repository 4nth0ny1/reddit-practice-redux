import React from 'react';
import { editPost, deletePost } from './redux/actions/postActions';
import { useState } from 'react'; 
import PostEditForm from './PostEditForm';
import { connect } from 'react-redux'

const Post = props => {

    const [ showPostEditForm, setShowPostEditForm ] = useState(false)

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
            { showPostEditForm && <PostEditForm editPost={props.editPost} post={props.post} setShowPostEditForm={setShowPostEditForm} /> }

            <hr></hr>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      editPost: (post) => dispatch(editPost(post)), 
      deletePost: (id) => dispatch(deletePost(id)),
    }
  }
  
  
  export default connect(null, mapDispatchToProps)(Post);