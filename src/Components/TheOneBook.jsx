import React from 'react'
import {Card } from 'react-bootstrap';
import AddComment from './AddComment';
import CommentArea from './CommentArea';
import Comments from './Comments';

class TheOneBook extends React.Component {

    state = {
        selected: false,
        comments: []
    }

    render() {
        return (
            <>
            <Card onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ border: this.state.selected ? '4px solid yellow' : '1px solid black' }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Comments comments={this.state.comments} />
                    <AddComment />
                </Card.Body>
            </Card>{
            this.state.selected && <CommentArea asin={this.props.book.asin} />
            }
            </>
            
        )
    }
}
export default TheOneBook