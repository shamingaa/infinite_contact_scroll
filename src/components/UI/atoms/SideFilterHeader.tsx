import { Nav } from "react-bootstrap";

const SideFilterHeader = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h5 className="headStyle">Filter By</h5>
    </Nav>
  );
};

export default SideFilterHeader;
