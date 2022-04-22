import React from 'react'
import TheOneBook from "./TheOneBook"
import {Col, Container, Form, Row} from "react-bootstrap";

class TheManyBooks extends React.Component {
state = {
    comments: [],
    searchQuery: ''
}
render() {
    return(
<Container>
    <Row>
        <Col>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
            type='text'
            placeholder="Search Here"
            value={this.state.searchQuery}
            onChange={e => this.setState({searchQuery: e.target.value})}
            />
        </Form.Group>
        </Col>
    </Row>
    <Row>
        {
            this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                <Col xs={2}>
                <TheOneBook book={b}/>
                </Col>
            ))
        }
    </Row>
</Container>
    )
}
}
    export default TheManyBooks;