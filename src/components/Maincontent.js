import React, { useState } from "react";
import Stellantis from "./SidebarItems/Stellantis";
import HeaderNav from "./HeaderNav";
import Novobiz from "./NovoBiz/novobiz";
import Novonsp from "./NovoNSP/Novonsp";
import ProdMob from "./ProdMob/ProdMob";
import TeamProductivity from "./TeamProductivity/TeamProductivity";

const Maincontent = ({ selectedMenu, menuItems }) => {
  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");
  const [activeTab, setActiveTab] = useState("gps");

  const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  const navItems = [
    { key: "gps", label: "GPS" },
  ];

  return (
    <div style={{backgroundColor: "#f0f0f0", padding: "3px"}}>
      {selectedMenu === "Stellantis" && (
        <>
          <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} />
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
      {selectedMenu === "Novobiz" && (
        <>
            <Novobiz />
        </>
      )}
      {selectedMenu === "Novonsp" && (
        <>
            <Novonsp />
        </>
      )}
      {selectedMenu === "prod_mob" && (
        <>
            <ProdMob />
        </>
      )}
      {selectedMenu === "team_productivity" && (
        <>
            <TeamProductivity />
        </>
      )}
    </div>
  );
};

export default Maincontent;
