import React, { useState } from "react";
import Stellantis from "./SidebarItems/Stellantis";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TokenFetch from "./TokenFetch";

const Maincontent = ({ selectedMenu, menuItems }) => {
  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");

  const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  return (
    <>
    {selectedMenu === "Stellantis"?(
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="gps" title="GPS">
          {selectedMenu === "Stellantis" && (
            <Stellantis
              selectedItem={selectedItem}
              policyId={policyId}
              setPolicyId={setPolicyId}
              deviceId={deviceId}
              setDeviceId={setDeviceId}
              tripId={tripId}
              setTripId={setTripId}
            />
          )}
        </Tab>
        <Tab eventKey="opt2" title="Option2">

        </Tab>
      </Tabs>):(
        <TokenFetch />
      )
}
    </>
  );
};

export default Maincontent;
