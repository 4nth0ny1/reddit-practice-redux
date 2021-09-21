import PostContainer from './PostContainer'
import React from "react";
import PostForm from './PostForm';
import { useState } from 'react'
import Button from './Button'
import Timer from './Timer'

const Home = props => {

  const [ showPostForm, setShowPostForm ] = useState(false)

  return (
      <>
        <h1>Welcome to the site</h1>
        <Button />

        <Timer />

        <button onClick={() => setShowPostForm(!showPostForm)}>add post</button>
        { showPostForm && <PostForm addPost={props.addPost} post={props.post} setShowPostForm={setShowPostForm} /> }
        <hr></hr>
        <PostContainer />
      </>
  );
}

export default Home;