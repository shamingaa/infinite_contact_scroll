import { Row, Col, Form } from "react-bootstrap";

const InputFilter = (): JSX.Element  => {
  return (
    <div className="messageFilter">
      {/* ==================== Message Sent ============================= */}
      <Row style={{ margin: "0 0" }}>
        <span>Message Sent:</span>
        <Col>
          <Form.Group className="mb-3 controlStyle" controlId="sentMin">
            <Form.Control size="sm" type="number" placeholder="Min" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 controlStyle" controlId="sentMax">
            <Form.Control size="sm" type="number" placeholder="Max" />
          </Form.Group>
        </Col>
      </Row>

      {/* ==================== Message Recived ============================= */}
      <Row style={{ margin: "0 0" }}>
        <span>Message Recived:</span>
        <Col>
          <Form.Group className="mb-3 controlStyle" controlId="receivedMin">
            <Form.Control size="sm" type="number" placeholder="Min" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 controlStyle" controlId="receivedMax">
            <Form.Control size="sm" type="number" placeholder="Max" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default InputFilter;
