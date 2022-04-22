import React, {Component} from 'react'
import CommentListItem from './CommentArea'

class  Comments extends Component {
 
    state = {
        selected: false,

    }

render() {
    return (
        <ul>
                   {this.props.comments && this.props.comments.map(comments => <CommentListItem key={comments._id} comment={comments} />)}
        </ul>
    )
}
}
export default Comments