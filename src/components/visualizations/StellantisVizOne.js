import React, { useEffect, useRef } from 'react';
import { embedViz, RuntimeFilterOp } from '../../tsEmbed';

const vizId = 'bdb45b2c-1be6-4642-861b-e628d50b2215';

const StellantisVizOne = ({ liveboardId, policyId, deviceId, tripId }) => {
  const containerId = 'stellantis-viz-one';
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
  }, [liveboardId, policyId, deviceId, tripId]);

  return <div id={containerId} style={{ height: '600px', width: '100%' }} ref={ref} />;
};

export default StellantisVizOne;
