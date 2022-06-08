import { Form } from "react-bootstrap";
import ContactSearchButton from "../atoms/ContactSearchButton";
import ContactSearchInput from "../atoms/ContactSearchInput";

const ContactSearchForm = (): JSX.Element => {
  return (
    <Form className="d-flex shiftDown">
      <ContactSearchInput />
      <ContactSearchButton />
    </Form>
  );
};

export default ContactSearchForm;
