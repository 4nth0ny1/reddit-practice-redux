import Comment from './Comment';
import React from 'react';

class CommentContainer extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <>
                {this.props.comments.map(comment => <Comment key={comment.id} comment={comment} /> )}
            </>
        )
    }
}


export default CommentContainer;
