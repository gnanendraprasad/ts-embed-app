import React, { useEffect, useRef } from 'react';
import {
  init,
  LiveboardEmbed,
  //EmbedEvent,
  Action,
  RuntimeFilterOp,
} from '@thoughtspot/visual-embed-sdk';
import { TS_HOST, LIVEBOARD_ID, VIZ_ID } from '../config';

const ThoughtSpotEmbed = ({ days, columnName }) => {
  const embedRef = useRef(null);

  useEffect(() => {
    // Initialize ThoughtSpot SDK
    init({
      thoughtSpotHost: TS_HOST,
      authType: 'None', // or 'None' if public embed with no login
    });
  }, []);

  useEffect(() => {
    if (embedRef.current) {
      embedRef.current.innerHTML = '';
    }

    const embed = new LiveboardEmbed('#ts-embed', {
      liveboardId: LIVEBOARD_ID,
      vizId: VIZ_ID,
      visibleActions: [Action.Save],
      //hiddenActions: [Action.DownloadAsCSV],
      runtimeFilters: [
        {
          columnName: 'Click Date Time AZ',
          operator: RuntimeFilterOp.LAST_N_DAYS,
          values: [days],
        },
      ],
    });

    embed.render();
    embedRef.current = embed;

  }, [days, columnName]);

  return <div id="ts-embed" style={{ height: '600px', width: '100%' }} />;
};

export default ThoughtSpotEmbed;