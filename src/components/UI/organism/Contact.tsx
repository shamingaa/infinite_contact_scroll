import { Col, Container, ListGroup } from "react-bootstrap";

const Contact = (): JSX.Element => {
  return (
    <Container className="contacts">
      <ListGroup>
        <ListGroup.Item>
          <div className="contactDetails">
            <Col>
              <div className="profile"></div>
            </Col>
            <Col>
              <span className="name">
                Augustus Shaminga
              </span>
            </Col>
            <Col>
              <span className="email">
                shamingaa@gmail.com
              </span>
            </Col>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Contact;
