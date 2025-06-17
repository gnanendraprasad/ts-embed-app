import React from "react";
import ThoughtSpotEmbed from "../ThoughtSpotEmbed";

const Stellantis = ({ selectedItem, selectedTabIndex, days, columnName, policyId, setPolicyId, deviceId, setDeviceId, tripId, setTripId }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <>
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
    </>
  );
};

export default Stellantis;
