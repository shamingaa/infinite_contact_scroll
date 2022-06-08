import { useState } from "react";
import ContactFrame from "../templates/ContactFrame";

interface Istate{
  contact: {
    name: string,
    email: string
  }[]
}

const Contacts = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Istate["contact"]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return <ContactFrame />;
};

export default Contacts;
