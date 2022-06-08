import { useContext } from "react";
import { contactContext } from "../../../App";

const TotalContacts = (): JSX.Element => {
  const { contact } = useContext(contactContext);

  return (
    <h5 className="contactcount shiftDown">All Contacts {contact.length}</h5>
  );
};

export default TotalContacts;
