import networkLogo from "../../../assets/badNetwork.png"

const NoNetwork = () => {
  return (
    <div className="loaders">
      <div>
        <img src={networkLogo} alt="Bad Network Icon" />
      </div>
    </div>
  );
};

export default NoNetwork;
