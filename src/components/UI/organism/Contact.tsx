import { useContext } from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { contactContext } from "../../../App";
import { Istate } from "../../../App";

const Contact = (): JSX.Element => {
  const {contact, setElem} = useContext(contactContext);

  const contacts = (): JSX.Element[] => {
    return contact.map(({ id, name, email }: { id: any; name: string; email: string;}) => {
      return (
        <ListGroup.Item key={id} ref={setElem}>
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
