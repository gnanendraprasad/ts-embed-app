import React, { useState } from "react";
import Stellantis from "./SidebarItems/Stellantis";
import HeaderNav from "./HeaderNav";

const Maincontent = ({ selectedMenu, menuItems }) => {
  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");
  const [activeTab, setActiveTab] = useState("gps");

  const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  return (
    <div>
      {selectedMenu === "Stellantis" && (
        <>
          <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "gps" && (
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
        </>
      )}
    </div>
  );
};

export default Maincontent;
