//in charge of fetching all the posts 
import { connect } from 'react-redux'
import React from 'react';
//needs to call the functions we need from the postAction File 
import { fetchPosts } from "./redux/actions/postActions";
import Post from './Post'


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