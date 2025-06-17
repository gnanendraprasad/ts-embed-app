import React, { useState } from "react";
import ThoughtSpotEmbed from "./components/ThoughtSpotEmbed";
import "./App.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabHandler from "./components/TabHandler";

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
            "12345678-9abc-def0-1234-56789abcdef0", // Replace with actual second viz ID
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
          <>
            <Tabs
              defaultActiveKey={`${selectedItem.tabs[selectedTabIndex].id}`}
              id="fill-tab-example"
              className="mb-3"
              fill
              onSelect={(k) => handleTabChange(parseInt(k))}
            >
              {selectedItem.tabs.map((tab, index) => {
                return (
                  <Tab eventKey={tab.id} title={tab.tabLabel}>
                    <TabHandler tab={tab} selectedItem={selectedItem} columnName={columnName} days={days} setDays={setDays}/>
                  </Tab>
                );
              })}
            </Tabs>
          </>
        )}

        {selectedMenu === "dashboard2" && (
          <div className="filter-row">
            <div>
              <label>Policy ID:</label>
              <input
                type="text"
                value={policyId}
                onChange={(e) => setPolicyId(e.target.value)}
              />
            </div>
            <div>
              <label>Device ID:</label>
              <input
                type="text"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
              />
            </div>
            <div>
              <label>Trip ID:</label>
              <input
                type="text"
                value={tripId}
                onChange={(e) => setTripId(e.target.value)}
              />
            </div>
          </div>
        )}
        {selectedItem.tabs[selectedTabIndex].vizIds.map(
                        (vizId, idx) => (
                          <ThoughtSpotEmbed
                            key={vizId + idx}
                            days={days}
                            columnName={columnName}
                            liveboardId={selectedItem.liveboardId}
                            vizId={vizId}
                            policyId={policyId}
                            deviceId={deviceId}
                            tripId={tripId}
                          />
                        )
                      )}
      </div>
      
    </div>
  );
}

export default App;
