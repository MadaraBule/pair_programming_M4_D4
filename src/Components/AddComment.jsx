import React from 'react'

    class AddComment extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: '1'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
               Rate the book
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label>
          Rate the Book
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }
try {
   const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: 'POST',
        body: JSON.stringify(...this.state.AddComment),
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
export default AddComment