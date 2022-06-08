import { Accordion } from "react-bootstrap";

const AccordionMolecule = (): JSX.Element => {
  return (
    <Accordion className="accordionStyle" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Include Tags</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Exclude Tags</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionMolecule;
