import React, { useState } from "react";
import "./App.css";
import QuotesBinds from "./components/SidebarItems/QuotesBinds";
import Stellantis from "./components/SidebarItems/Stellantis";

function App() {
  const getDefaultDateTime = () => {
    const now = new Date();
    return now.toISOString().split("T")[0];
  };

  const [days, setDays] = useState(getDefaultDateTime());
  const [selectedMenu, setSelectedMenu] = useState("dashboard1");
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const [policyId, setPolicyId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [tripId, setTripId] = useState("");

  const columnName = "Click Date Time AZ";

  const handleTabChange = (k) => {
    let date = getDefaultDateTime();
    console.log(date);
    setDays(getDefaultDateTime());
    setSelectedTabIndex(parseInt(k));
  };

  const menuItems = [
    {
      key: "dashboard1",
      label: "Quotes & Binds",
      liveboardId: "ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1",
      tabs: [
        {
          id: 0,
          tabLabel: "Quotes Completion Rate",
          vizIds: ["a1cdfa62-6db6-446b-9cc2-692a9d26ee2f"],
          isDatepicker: true,
        },
        {
          id: 1,
          tabLabel: "Quotes Started by Month",
          vizIds: ["6930c1ca-e80f-444f-a090-e285d1e15cdf"],
          isDatepicker: false,
        },
      ],
    },
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
              setSelectedTabIndex(0);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="main-content">
        {/* <div className="tabs">
          {selectedItem.tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${selectedTabIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div> */}

        {selectedMenu === "dashboard1" && (
          <QuotesBinds
            selectedItem={selectedItem}
            selectedTabIndex={selectedTabIndex}
            handleTabChange={handleTabChange}
            days={days}
            setDays={setDays}
            columnName={columnName}
          />
        )}

        {selectedMenu === "dashboard2" && (
          <Stellantis
            selectedItem={selectedItem}
            selectedTabIndex={selectedTabIndex}
            days={days}
            columnName={columnName}
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
