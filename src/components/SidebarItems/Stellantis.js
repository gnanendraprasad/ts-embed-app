import React from "react";
import StellantisVizOne from "../visualizations/StellantisVizOne";
import StellantisVizTwo from "../visualizations/StellantisVizTwo";

const Stellantis = ({ selectedItem, policyId, setPolicyId, deviceId, setDeviceId, tripId, setTripId }) => {
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

      <StellantisVizOne
        liveboardId={selectedItem.liveboardId}
        policyId={policyId}
        deviceId={deviceId}
        tripId={tripId}
      />

      <StellantisVizTwo
        liveboardId={selectedItem.liveboardId}
        policyId={policyId}
        deviceId={deviceId}
        tripId={tripId}
      />
    </>
  );
};

export default Stellantis;
