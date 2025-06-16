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
      label: 'Sales Dashboard',
      liveboardId: 'abc123sales',
      vizId: 'sales-viz-1',
    },
    {
      key: 'dashboard2',
      label: 'Marketing Overview',
    },
    {
      key: 'dashboard3',
      label: 'Operations View',
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
            <p>Visualization not available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
