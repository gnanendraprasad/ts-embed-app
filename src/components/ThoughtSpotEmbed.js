import React, { useEffect, useRef } from 'react';
import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
} from '@thoughtspot/visual-embed-sdk';
import { TS_HOST } from '../config';

const ThoughtSpotEmbed = ({
  days,
  columnName,
  liveboardId,
  vizId,
  policyId,
  deviceId,
  tripId
}) => {
  const embedRef = useRef(null);

  useEffect(() => {
    init({
      thoughtSpotHost: TS_HOST,
      authType: 'None',
    });
  }, []);

  useEffect(() => {
    if (embedRef.current) {
      embedRef.current.innerHTML = '';
    }

    const runtimeFilters = [];

    if (days && columnName) {
      runtimeFilters.push({
        columnName,
        operator: RuntimeFilterOp.GT,
        values: [new Date(days).getTime() / 1000],
      });
    }

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

    const embed = new LiveboardEmbed(`#ts-embed-${vizId}`, {
      liveboardId,
      vizId,
      hiddenActions: [
        Action.CopyLink,
        Action.Download,
        Action.ShowUnderlyingData,
        Action.Pin,
        Action.SpotIQAnalyze,
        Action.RenameModalTitleDescription,
        Action.SpotterFeedback
      ],
      runtimeFilters,
    });

    embed.render();
  }, [days, columnName, liveboardId, vizId, policyId, deviceId, tripId]);

  return <div id={`ts-embed-${vizId}`} style={{ height: '600px', width: '100%' }} ref={embedRef} />;
};

export default ThoughtSpotEmbed;
