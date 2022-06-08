import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilterSideBar from "../UI/organism/FilterSideBar";

const ContactFrame = (): JSX.Element => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>
          <FilterSideBar />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ContactFrame;
