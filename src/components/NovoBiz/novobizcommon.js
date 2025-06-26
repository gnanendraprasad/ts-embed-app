import React, { useEffect, useRef } from "react";
import { LiveboardEmbed, RuntimeFilterOp } from "@thoughtspot/visual-embed-sdk";


const NovobizCommon = ({ liveboardId, tabID, selectedDate, partners }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !liveboardId) return;

    ref.current.innerHTML = ""; // Clear previous embeds

    const runtimeFilters = [];

    if (selectedDate) {
      runtimeFilters.push({
        columnName: 'AZ log time',
        operator: RuntimeFilterOp.EQ,
        values: [selectedDate],
      });
    }

    if (partners) {
    runtimeFilters.push({
      columnName: 'Partner',
      operator: RuntimeFilterOp.IN,
      values: partners,
    });
  }

    const liveboard = new LiveboardEmbed(ref.current, {
      liveboardId,
      frameParams: {
        height: "100%",
        width: "100%",
      },
      hideLiveboardHeader: true,
      hideTabPanel: true,
      activeTabId: tabID,
      runtimeFilters,
    });
    console.log(runtimeFilters);
    liveboard.render();
  }, [liveboardId, tabID, selectedDate, partners]);

  return <div style={{ height: "100vh", width: "100%" }} ref={ref} />;
};

export default NovobizCommon;
