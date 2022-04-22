import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
const AddComment = () => {
<Form onSubmit={this.handleSubmit}>
<Form.Group>
    <Form.Label>Comment on book</Form.Label>
    <Form.Control as="textarea" value={this.state.value} rows={3} />
  </Form.Group>
  <Form.Row>
    <Col xs="auto" className="my-1">
      <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Rate The Book
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Rate...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
      </Form.Control>
    </Col>
    </Form.Row>
    <Button>Submit</Button>
</Form>

try {
   const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: 'POST',
        body: JSON.stringify(this.state.AddComment),
        headers: {
            'Content-type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTA2Mjk4ODMsImV4cCI6MTY1MTgzOTQ4M30.OpOPM6TnHE4ppJTB-f6ZrhEwTspIxuh9U6yg3Y0eCRc"
        }
    })
    if (response.ok) {
        alert('comment posted')
      }
    } catch (e) {
        console.log(e)
    }
}
export default AddComment