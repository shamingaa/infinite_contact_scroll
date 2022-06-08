import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Contacts from "./components/pages/Contacts";

export interface Istate {
  contact: {
    id: any;
    name: string;
    email: string;
  }[];
}

export const contactContext = React.createContext<any>([]);

function App(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const [contact, setContact] = useState<Istate["contact"]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [elem, setElem] = useState<HTMLDivElement | null>(null);
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
  const contextValue = { contact, setElem, loading, error };

  // Create observer object
  const observer = useRef(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prev) => prev + 1);
    })
  );

  useEffect(() => {
    setLoading(true);
    async function getData(): Promise<void> {
      try {
        const response = await fetch(url, fetchHeader);
        const data = await response.json();
        setLoading(false);
        setContact((prevState) => [...prevState, ...data.contacts]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page]);

  useEffect(() => {
    const currentElement = elem;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [elem]);

  return (
    <contactContext.Provider value={contextValue}>
      <Contacts />;
    </contactContext.Provider>
  );
}

export default App;
