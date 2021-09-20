import Comment from './Comment';
import React from 'react';
import { fetchComments } from "./redux/actions/commentActions";
import { connect } from 'react-redux';

class CommentContainer extends React.Component {

    componentDidMount() {
        this.props.fetchComments()
    }
       
    render() {
        
        return (
            <>
                {this.props.comments > 0 && (this.props.comments).map(comment => <Comment key={comment.id} comment={comment} /> )}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
