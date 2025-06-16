import React, { useState } from 'react';
import ThoughtSpotEmbed from './components/ThoughtSpotEmbed';

function App() {
  const getDefaultDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [days, setDays] = useState(getDefaultDateTime());
  const columnName = "Click Date Time AZ";

  return (
    <div>
      <h2>ThoughtSpot Visualization</h2>
      <label>
        Select Date From:
        <input
          type="date"
          value={days}
          onChange={(e) => {
            setDays(e.target.value); // Already in the correct format
          }}
        />
      </label>

      <ThoughtSpotEmbed days={days} columnName={columnName} />
    </div>
  );
}

export default App;
