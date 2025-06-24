import React, { useState } from "react";
import Stellantis from "./SidebarItems/Stellantis";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Maincontent = ({ selectedMenu, menuItems }) => {
  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");

  const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  return (
    <div>
    {selectedMenu === "Stellantis"?(
      <Tabs
        defaultActiveKey="gps"
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
      </Tabs>
      ):(
      <>
      </>
      )
    }
    </div>
  );
};

export default Maincontent;
