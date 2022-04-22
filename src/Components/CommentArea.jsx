import React, {Component} from 'react'

class  CommentArea extends Component {
render() {
    return (
        <li>
            {this.props.comments.map(comment => <CommentArea comment={comment} />)}
        </li>
    )
}
}
export default CommentArea