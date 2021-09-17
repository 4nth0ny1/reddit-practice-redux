npx create react app my-app

npm add react-redux redux-thunk react-router-dom redux-devtools-extension   try this next time

or 

npm add react-redux
npm add redux-thunk
npm add react-router-dom
npm add redux-devtools-extension
npm install

__________________________________________

// create store in index.js

// add these imports
import {BrowserRouter as Router} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//provider means anything child has access to what is passed in. in this case it's the redux store

ReactDOM.render(
  <Router>
    <Provider store={store}> 
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

//adding this will break the app, because you need a rootReducer. add the folders and then add a rootReducer
__________________________________________

// create folders => 
src 
    redux 
        actions
            postActions.jsx
        reducers  
            rootReducer.jsx
            postReducer.jsx
    components
        Home.jsx
        Posts
            PostContainer.jsx
            Post.jsx

__________________________________________

// rootReducer

import postReducer from './postReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    posts: postReducer
})

export default rootReducer;

__________________________________________

// postReducer

const postReducer = (state = { posts: [] }, action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return {
                posts: action.posts
            }
        default: 
            return state
    }
}

export default postReducer

___________________________________________

// postAction

export const fetchPosts = (posts) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(posts => dispatch({type: "FETCH_POSTS", posts: posts}))
    }
}

__________________________________________

// Router => home route 

import PostContainer from './PostContainer'
import React from "react";

const Home = () => {
  return (
      <>
        <h1>Welcome to the site</h1>
        <PostContainer />
      </>
  );
}

export default Home;
__________________________________________

App.js

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Navigation/Home'

function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={() => <Home />} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;

__________________________________________

// PostContainer 
//in charge of fetching all the posts 

import React from 'react';
import Post from './Post'
import { connect } from 'react-redux'
import { fetchPosts } from "./redux/actions/postActions";   //needs to call the functions we need from the postAction File 

class PostContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    //becasue we're calling an action we have to mapDispatchToProps it

    render(){
        return(
            <>
                {this.props.posts.map(post => <Post post={post}/>)}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

______________________________________________________

// create Post

const Post = props => {
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

_____________________________________________________