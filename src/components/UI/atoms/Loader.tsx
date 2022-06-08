import { Spinner } from "react-bootstrap";

const Loader = (): JSX.Element => {
  return (
    <div className="loaders">
      <Spinner animation="grow" size="sm" className="primarySpin spin" />
      <Spinner animation="grow" size="sm" className="secondarySpin spin" />
      <Spinner animation="grow" size="sm" className="tertiarySpin spin" />
    </div>
  );
};

export default Loader;
