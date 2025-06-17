import React from "react";
import StellantisCommon from "../visualizations/StellantisCommon";

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
      <StellantisCommon
        liveboardId={selectedItem.liveboardId}
        policyId={policyId}
        deviceId={deviceId}
        tripId={tripId}
        vizId={"5c627138-64d6-4087-9fb2-63576962a798"}
        containerId={"stellantis-viz-one"}
      />
       <StellantisCommon
        liveboardId={selectedItem.liveboardId}
        policyId={policyId}
        deviceId={deviceId}
        tripId={tripId}
        vizId={"1a15df7e-dd4c-4866-ad5d-307877ab8588"}
        containerId={"stellantis-viz-two"}
      /> 
    </>
  );
};

export default Stellantis;
