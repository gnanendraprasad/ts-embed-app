import React, { useEffect, useRef } from 'react';
import { embedViz, RuntimeFilterOp } from '../../tsEmbed';

const StellantisCommon = ({containerId, vizId, liveboardId, policyId, deviceId, tripId }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
    }

    const runtimeFilters = [];
    if (policyId) {
      runtimeFilters.push({
        columnName: 'Policy ID',
        operator: RuntimeFilterOp.EQ,
        values: [policyId],
      });
    }
    if (deviceId) {
      runtimeFilters.push({
        columnName: 'Device ID',
        operator: RuntimeFilterOp.EQ,
        values: [deviceId],
      });
    }
    if (tripId) {
      runtimeFilters.push({
        columnName: 'Id',
        operator: RuntimeFilterOp.EQ,
        values: [tripId],
      });
      runtimeFilters.push({
        columnName: 'Trip ID',
        operator: RuntimeFilterOp.EQ,
        values: [tripId],
      });
    }

    embedViz(`#${containerId}`, { liveboardId, vizId, runtimeFilters });
  }, [liveboardId, policyId, deviceId, tripId, vizId, containerId]);

  return <div id={containerId} style={{ height: '600px', width: '100%' }} ref={ref} />;
};

export default StellantisCommon;
