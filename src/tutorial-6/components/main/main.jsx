import { Card, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      {[...Array(3)].map((_, i) => (
        <Col>
          <Card key={i}>
            <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
            <Card.Body>
              <Card.Title>
                <a href={`/post/${i+1}`}>{`Card title ${i+1}`}</a>
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Main;
