import React, { useState } from 'react';
import ThoughtSpotEmbed from './components/ThoughtSpotEmbed';
import './App.css';

function App() {
  const getDefaultDateTime = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };

  const [days, setDays] = useState(getDefaultDateTime());
  const [selectedMenu, setSelectedMenu] = useState('dashboard1');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const [policyId, setPolicyId] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [tripId, setTripId] = useState('');

  const columnName = 'Click Date Time AZ';

  const menuItems = [
    {
      key: 'dashboard1',
      label: 'Quotes & Binds',
      liveboardId: 'ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1',
      tabs: [
        {
          tabLabel: 'Overview',
          vizIds: ['a1cdfa62-6db6-446b-9cc2-692a9d26ee2f']
        },
        {
          tabLabel: 'Details',
          vizIds: ['viz-id-2', 'viz-id-3']
        }
      ]
    },
    {
      key: 'dashboard2',
      label: 'Stellantis',
      liveboardId: '610981b7-bd20-4ffd-89a0-53a159f36c43',
      tabs: [
        {
          tabLabel: 'Summary',
          vizIds: [
            'bdb45b2c-1be6-4642-861b-e628d50b2215',
            '12345678-9abc-def0-1234-56789abcdef0' // Replace with actual second viz ID
          ]
        }
      ]
    }
  ];

  const selectedItem = menuItems.find(item => item.key === selectedMenu);

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="brand">Novo</div>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
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
        <h2>{selectedItem.label}</h2>

        <div className="tabs">
          {selectedItem.tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${selectedTabIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        {selectedMenu === 'dashboard1' && (
          <div className="date-picker">
            <label htmlFor="dateInput">Select Date From:</label>
            <input
              id="dateInput"
              type="date"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
        )}

        {selectedMenu === 'dashboard2' && (
          <div className="filter-row">
            <div>
              <label>Policy ID:</label>
              <input type="text" value={policyId} onChange={(e) => setPolicyId(e.target.value)} />
            </div>
            <div>
              <label>Device ID:</label>
              <input type="text" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} />
            </div>
            <div>
              <label>Trip ID:</label>
              <input type="text" value={tripId} onChange={(e) => setTripId(e.target.value)} />
            </div>
          </div>
        )}

        {selectedItem.tabs[selectedTabIndex].vizIds.map((vizId, idx) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
