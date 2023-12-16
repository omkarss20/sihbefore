import React, { useState } from "react";

const GovtCenter = () => {
  const [IPAdress, setIPAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState("");

  const getVistorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      console.log(data);
      setIPAddress(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${IPAdress}`);
      const data = await response.json();
      setGeoInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={getVistorIP}>Get IP</button>
      <div>{IPAdress}</div>

      <button onClick={fetchIPInfo}>Get UserLocation</button>
    </div>
  );
};

export default GovtCenter;
