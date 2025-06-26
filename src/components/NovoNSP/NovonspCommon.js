import React, { useEffect, useRef } from 'react';
import { LiveboardEmbed } from '@thoughtspot/visual-embed-sdk';

const NovonspCommon = ({ liveboardId, tabID }) => {
  const ref = useRef(null);

  useEffect(() => {
  if (!ref.current || !liveboardId) return;

  ref.current.innerHTML = ''; // Clear previous embeds

  // const runtimeFilters = [];

  //     runtimeFilters.push({
  //       columnName: 'Event At',
  //       operator: RuntimeFilterOp.GT,
  //       values: ['04/01/2025'],
  //     });

  const liveboard = new LiveboardEmbed(ref.current, {
    liveboardId,
    frameParams: {
      height: '100%',
      width: '100%',
    },
    hideLiveboardHeader: true,
    activeTabId: tabID,
    // runtimeFilters,
  });

  liveboard.render();
}, [liveboardId, tabID]);

  return <div style={{ height: '100vh', width: '100%' }} ref={ref} />;
};

export default NovonspCommon;
