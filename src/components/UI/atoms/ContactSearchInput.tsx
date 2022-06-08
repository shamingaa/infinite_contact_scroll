import { FormControl } from "react-bootstrap";

const ContactSearchInput = (): JSX.Element => {
  return (
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2 search"
      aria-label="Search"
    />
  );
};

export default ContactSearchInput;
