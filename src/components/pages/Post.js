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
      <h1>Single post</h1>
    </div>
  );
}

export default Post;
