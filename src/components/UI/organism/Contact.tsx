import { useContext } from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { contactContext } from "../../../App";

const Contact = (): JSX.Element => {
  let user = useContext(contactContext);

  const contacts = (): JSX.Element[] => {
    return user.map(({ id, name, email }) => {
      return (
        <ListGroup.Item key={id}>
          <div className="contactDetails">
            <Col>
              <div className="profile"></div>
            </Col>
            <Col>
              <span className="name">
                {name == null ? "Augustus Shaminga" : name}
              </span>
            </Col>
            <Col>
              <span className="email">
                {email == null ? "sample@email.com" : email}
              </span>
            </Col>
          </div>
        </ListGroup.Item>
      );
    });
  };

  return (
    <Container className="contacts">
      <ListGroup>{contacts()}</ListGroup>
    </Container>
  );
};

export default Contact;
