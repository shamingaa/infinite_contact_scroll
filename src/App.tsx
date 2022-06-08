import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/pages/Contacts";

export interface Istate {
  contact: {
    id: any;
    name: string;
    email: string;
  }[];
}

export const contactContext = React.createContext<Istate["contact"]>([]);

function App(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const [contact, setContact] = useState<Istate["contact"]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const url = "https://stoplight.io/mocks/chatdaddy/openapi/15107977/contacts";
  const token = "velit aliqua Excepteur Duis eiusmod";
  const fetchHeader = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Prefer: "code=200, dynamic=true",
      Authorization: `{   "access_token": ${token} }`,
    },
  };

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await fetch(url, fetchHeader);
      const data = await response.json();
      setContact((prevState) => [...prevState, ...data.contacts]);
    }
    getData();
  }, []);

  return (
    <contactContext.Provider value={contact}>
      <Contacts />;
    </contactContext.Provider>
  );
}

export default App;
