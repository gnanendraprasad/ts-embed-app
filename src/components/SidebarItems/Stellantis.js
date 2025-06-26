import React, { useState, useEffect } from "react";
import Select from "react-select";
import StellantisCommon from "./StellantisCommon";
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
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [tripOptions, setTripOptions] = useState([]);

  const [loadingPolicies, setLoadingPolicies] = useState(true);
  const [loadingDevices, setLoadingDevices] = useState(false);
  const [loadingTrips, setLoadingTrips] = useState(false);

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "30px",
      fontSize: "12px",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "12px",
    }),
    multiValue: (provided) => ({
      ...provided,
      fontSize: "12px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontSize: "12px",
    }),
  };

  // Load Policy options on component mount
  useEffect(() => {
    const fetchPolicyOptions = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query_string: "[Policy ID] AND [Policy Status]='INFORCE'",
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

        setPolicyOptions(options);
      } catch (err) {
        console.error("Failed to fetch policy options", err);
      } finally {
        setLoadingPolicies(false);
      }
    };

    fetchPolicyOptions();
  }, []);

  // Load Device options based on selected Policy ID
  useEffect(() => {
    const fetchDeviceOptions = async () => {
      if (!policyId) {
        setDeviceOptions([]);
        setDeviceId("");
        return;
      }

      setLoadingDevices(true);
      setDeviceId("");
      setTripId("");

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query_string: `[Device Id], [Policy Id] = '${policyId}'`,
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

        setDeviceOptions(options);
      } catch (err) {
        console.error(`Failed to fetch device data for policy: ${policyId}`, err);
      } finally {
        setLoadingDevices(false);
      }
    };

    fetchDeviceOptions();
  }, [policyId, setDeviceId, setTripId]);

  // Load Trip options based on selected Device ID
  useEffect(() => {
    const fetchTripOptions = async () => {
      if (!deviceId) {
        setTripOptions([]);
        setTripId("");
        return;
      }

      setLoadingTrips(true);
      setTripId("");

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query_string: `[Id], [Device Id] = '${deviceId}'`,
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

        setTripOptions(options);
      } catch (err) {
        console.error(`Failed to fetch trip data for device: ${deviceId}`, err);
      } finally {
        setLoadingTrips(false);
      }
    };

    fetchTripOptions();
  }, [deviceId, setTripId]);

  if (!selectedItem) return null;

  return (
    <>
      <div className="filter-row" style={{marginBottom:"5px"}}>
        <div>
          {loadingPolicies ? (
            <p>Loading policies...</p>
          ) : (
            <Select
              options={policyOptions}
              value={policyOptions.find((opt) => opt.value === policyId)}
              onChange={(selected) => setPolicyId(selected?.value || "")}
              placeholder="Select a Policy ID"
              isClearable
              styles={selectStyles}
            />
          )}
        </div>

        <div>
          {loadingDevices ? (
            <p>Loading devices...</p>
          ) : (
            <Select
              options={deviceOptions}
              value={deviceOptions.find((opt) => opt.value === deviceId)}
              onChange={(selected) => setDeviceId(selected?.value || "")}
              placeholder="Select a Device ID"
              isClearable
              styles={selectStyles}
              isDisabled={!policyId}
            />
          )}
        </div>

        <div>
          {loadingTrips ? (
            <p>Loading trips...</p>
          ) : (
            <Select
              options={tripOptions}
              value={tripOptions.find((opt) => opt.value === tripId)}
              onChange={(selected) => setTripId(selected?.value || "")}
              placeholder="Select a Trip ID"
              isClearable
              styles={selectStyles}
              isDisabled={!deviceId}
            />
          )}
        </div>
      </div>
      <div style={{ marginLeft: "3px", marginBottom: "10px", fontSize: "12px", color: "#666" }}>
        First select a <strong>Policy ID</strong>. Device ID and Trip ID dropdowns will populate based on your selection.
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
