import React from 'react'
import {Card } from 'react-bootstrap';
import Comments from './Comments';

class TheOneBook extends React.Component {

    state = {
        selected: false,
        comments: []
    }

    render() {
        return (
            <Card onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ border: this.state.selected ? '4px solid yellow' : '1px solid black' }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Comments comments={this.state.comments} />
                </Card.Body>
            </Card>
        )
    }
    componentDidMount = async () => {
        const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookInfo.asin, {
            headers: {
                method:"GET",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTA2Mjk4ODMsImV4cCI6MTY1MTgzOTQ4M30.OpOPM6TnHE4ppJTB-f6ZrhEwTspIxuh9U6yg3Y0eCRc"
            }
            })
            const gottenComments = await resp.json()
            this.setState({ comments: gottenComments })
            
}
}
export default TheOneBook