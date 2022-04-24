import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const Comments = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default Comments