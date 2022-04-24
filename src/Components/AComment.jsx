import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmU1Y2E5MDIzOTAwMTVkOTY1ZDIiLCJpYXQiOjE2NTA4Mjk3NTMsImV4cCI6MTY1MjAzOTM1M30.uVlMZjkhUUB8Qr6Conm8BYQtmMUhiUiknYf3x0UKQks"
        }
      }
    );
    if (response.ok) {
      alert("Deleted succesfully!");
    } else {
      alert("Failed to Delete!");
    }
  } catch (error) {
    alert("Something wen wrong!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-3"
      onClick={() => deleteComment(comment._id)}
    >
        Delete
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
