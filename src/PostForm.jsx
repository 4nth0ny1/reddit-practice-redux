import React, { Component } from "react";
import { addPost } from "./redux/actions/postActions";
import { connect } from 'react-redux'

class PostForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: '', 
            content: '', 
            subreddit: '',
            id: '',
            count: 0 
        }
    }
    
    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addPost(this.state)
            this.props.setShowPostForm(false)
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            )
            this.setState({
                [event.target.name]: [{}]
            })
        }

        return(
            <>
                <form className="post-form" onSubmit={handleSubmit}>
                    <input className="post-form-input" type="text" onChange={onChange} name="title" id="title" placeholder="title" />
                    <input className="post-form-input post-content" type="text" onChange={onChange} name="content" id="content" placeholder="content" />
                    <input className="post-form-input" type="text" onChange={onChange} name="subreddit" id="subreddit" placeholder="subreddit" />
                    <button type="submit">Create Post</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(PostForm);