import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useParams, Link,  Navigate } from 'react-router-dom';


const Post = () => {

  const {postId} = useParams();
  const postData = useSelector(state => getPostById(state, postId));

  if(!postData) return <Navigate to="/" />;
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs="12" lg="5">
        <Card className="border-0">
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Text className="mb-1"><b>Author:</b> {postData.author}</Card.Text>
              <Card.Text><b>Published:</b> {postData.publishedDate}</Card.Text>
              <Card.Text className="mt-2">{postData.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
        <Link to="/post/edit">
          <Button variant="outline-info" className="m-2">Edit</Button>
        </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Post;