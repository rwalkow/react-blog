import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, actionText, ...props }) => {

  let navigate = useNavigate();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    navigate('/');
  }

  return (
    <Row>
      <Col md={{span: 6, offset: 3}}>
        <h1>Add post</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 w-50">
            <Form.Label >Title</Form.Label>
            <Form.Control value={title} type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label >Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label value={publishedDate}>Published</Form.Label>
            <Form.Control type="text" placeholder="dd-mm-yyyy" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
          </Form.Group>
          <Form.Group >
            <Form.Label value={shortDescription}>Short description</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group >
            <Form.Label value={content}>Main content</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} />
            </FloatingLabel>
          </Form.Group>
          <Button as="input" type="submit" value={actionText} />{' '}
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm;
