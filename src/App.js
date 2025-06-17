import React, { useState } from "react";
import "./App.css";
import Stellantis from "./components/SidebarItems/Stellantis";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard2");

  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");

  const menuItems = [
    {
      key: "dashboard2",
      label: "Stellantis",
      liveboardId: "610981b7-bd20-4ffd-89a0-53a159f36c43",
      tabs: [
        {
          tabLabel: "Summary",
          vizIds: [
            "bdb45b2c-1be6-4642-861b-e628d50b2215",
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
