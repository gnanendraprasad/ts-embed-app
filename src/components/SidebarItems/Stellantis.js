import React, { useState, useEffect } from "react";
import Select from "react-select";
import StellantisCommon from "../visualizations/StellantisCommon";
import { TS_HOST } from "../../config";

const API_URL = `${TS_HOST}/api/rest/2.0/searchdata`;

const Stellantis = ({
  selectedItem,
  policyId,
  setPolicyId,
  deviceId,
  setDeviceId,
  tripId,
  setTripId,
}) => {
  const [policyOptions, setPolicyOptions] = useState([]);
  const [tripOptions, setTripOptions] = useState([]);
  const [deviceOptions, setDeviceOptions] = useState([]);

  const [loadingPolicies, setLoadingPolicies] = useState(true);
  const [loadingTrips, setLoadingTrips] = useState(true);
  const [loadingDevices, setLoadingDevices] = useState(true);

  useEffect(() => {
    const fetchDropdownData = async (query_string, setter, setLoading) => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query_string,
            logical_table_identifier: "7c6c5199-c40a-4339-96d9-144c890af78d",
            record_size: 1000,
          }),
        });

        const json = await res.json();
        const rows = json?.contents?.[0]?.data_rows || [];

        const options = rows
          .map((row) => row[0])
          .filter(Boolean)
          .map((id) => ({ value: id, label: id }));

        setter(options);
      } catch (err) {
        console.error(`Failed to fetch data for query: ${query_string}`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchDropdownData("[Policy ID] AND [Policy Status]='INFORCE'", setPolicyOptions, setLoadingPolicies);
    fetchDropdownData("[Id]", setTripOptions, setLoadingTrips);
    fetchDropdownData("[Device Id]", setDeviceOptions, setLoadingDevices);
  }, []);

  if (!selectedItem) return null;

  return (
    <>
      <div className="filter-row">
        <div>
          <label>Policy ID:</label>
          {loadingPolicies ? (
            <p>Loading...</p>
          ) : (
            <Select
              options={policyOptions}
              value={policyOptions.find((opt) => opt.value === policyId)}
              onChange={(selected) => setPolicyId(selected?.value || "")}
              placeholder="Select a Policy ID"
              isClearable
            />
          )}
        </div>

        <div>
          <label>Device ID:</label>
          {loadingDevices ? (
            <p>Loading...</p>
          ) : (
            <Select
              options={deviceOptions}
              value={deviceOptions.find((opt) => opt.value === deviceId)}
              onChange={(selected) => setDeviceId(selected?.value || "")}
              placeholder="Select a Device ID"
              isClearable
            />
          )}
        </div>

        <div>
          <label>Trip ID:</label>
          {loadingTrips ? (
            <p>Loading...</p>
          ) : (
            <Select
              options={tripOptions}
              value={tripOptions.find((opt) => opt.value === tripId)}
              onChange={(selected) => setTripId(selected?.value || "")}
              placeholder="Select a Trip ID"
              isClearable
            />
          )}
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
