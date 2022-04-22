import React, { Form } from 'react'
const CommentArea =
<Form>
<Form.Group>
    <Form.Label>Comment on book</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Row className="align-items-center">
    <Col xs="auto" className="my-1">
      <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Preference
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
</Form>
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookInfo.asin, {
        method: 'POST',
        body: JSON.stringify({
            response: response,
            rating: 1-5,
        }),
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTA2Mjk4ODMsImV4cCI6MTY1MTgzOTQ4M30.OpOPM6TnHE4ppJTB-f6ZrhEwTspIxuh9U6yg3Y0eCRc"
        }
        })
export default CommentArea