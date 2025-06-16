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
  const columnName = 'Click Date Time AZ';

  const menuItems = [
    {
      key: 'dashboard1',
      label: 'Quotes & Binds',
      liveboardId: 'ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1',
      vizId: 'a1cdfa62-6db6-446b-9cc2-692a9d26ee2f',
    },
    {
      key: 'dashboard2',
      label: 'Stellantis',
      liveboardId: '610981b7-bd20-4ffd-89a0-53a159f36c43',
      vizId: 'bdb45b2c-1be6-4642-861b-e628d50b2215',
    },
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
            onClick={() => setSelectedMenu(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="main-content">
        <h2>{selectedItem.label}</h2>

        {selectedMenu === 'dashboard1' ? (
          <>
            <div className="date-picker">
              <label htmlFor="dateInput">Select Date From:</label>
              <input
                id="dateInput"
                type="date"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>

            <ThoughtSpotEmbed
              days={days}
              columnName={columnName}
              liveboardId={selectedItem.liveboardId}
              vizId={selectedItem.vizId}
            />
          </>
        ) : (
          <div className="placeholder">
            <ThoughtSpotEmbed
              days={days}
              columnName={columnName}
              liveboardId={selectedItem.liveboardId}
              vizId={selectedItem.vizId}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
