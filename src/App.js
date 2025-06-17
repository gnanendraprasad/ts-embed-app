import React, { useState } from "react";
import "./App.css";
import Stellantis from "./components/SidebarItems/Stellantis";
//import StellantisVizTwo from "./components/visualizations/StellantisVizTwo";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard2");

  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");

  const menuItems = [
    {
      key: "dashboard2",
      label: "Stellantis",
      liveboardId: "ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1",
      tabs: [
        {
          tabLabel: "Summary",
          vizIds: [
            "5c627138-64d6-4087-9fb2-63576962a798",
            "1a15df7e-dd4c-4866-ad5d-307877ab8588", // Replace with actual second viz ID
          ],
        },
      ],
    },
  ];

  const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="brand">Novo</div>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? "active" : ""}`}
            onClick={() => {
              setSelectedMenu(item.key);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="main-content">

        {selectedMenu === "dashboard2" && (
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
      </div>
      
    </div>
  );
}

export default App;
