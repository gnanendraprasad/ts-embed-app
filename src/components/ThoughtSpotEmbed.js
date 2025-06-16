import React, { useEffect, useRef } from 'react';
import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
} from '@thoughtspot/visual-embed-sdk';
import { TS_HOST } from '../config';

const ThoughtSpotEmbed = ({ days, columnName, liveboardId, vizId }) => {
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

    const embed = new LiveboardEmbed('#ts-embed', {
      liveboardId,
      vizId,
      hiddenActions: [Action.CopyLink, Action.Download, Action.ShowUnderlyingData, Action.Pin, Action.SpotIQAnalyze, Action.RenameModalTitleDescription, Action.SpotterFeedback],
      runtimeFilters: [
        {
          columnName,
          operator: RuntimeFilterOp.GT,
          values: [new Date(days).getTime() / 1000],
        },
      ],
    });

    embed.render();
  }, [days, columnName, liveboardId, vizId]);

  return <div id="ts-embed" style={{ height: '600px', width: '100%' }} ref={embedRef} />;
};

export default ThoughtSpotEmbed;
