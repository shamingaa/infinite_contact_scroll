import { Container, Row, Col } from "react-bootstrap";
import TotalContacts from "../atoms/TotalContacts";
import ContactSearchForm from "../moleules/ContactSearchForm";

const ContactTopNav = (): JSX.Element => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} sm={12}>
          <ContactSearchForm />
        </Col>
        <Col>
          <TotalContacts />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactTopNav;
