import React, { useState } from 'react';
import ThoughtSpotEmbed from './components/ThoughtSpotEmbed';

function App() {
  const [days, setDays] = useState(30);
  const columnName = "Click Date Time AZ";

  return (
    <div>
      <h2>ThoughtSpot Visualization</h2>
      <label>
        Select Time Range:
        <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
          <option value={30}>Last 30 Days</option>
          <option value={60}>Last 60 Days</option>
          <option value={90}>Last 90 Days</option>
        </select>
      </label>

     <ThoughtSpotEmbed days={days} columnName={columnName} />
    </div>
  );
}

export default App;