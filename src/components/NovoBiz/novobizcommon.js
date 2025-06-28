import React, { useEffect, useRef } from "react";
import { LiveboardEmbed, RuntimeFilterOp, Action } from "@thoughtspot/visual-embed-sdk";
import { convertDateEpoch } from "../../ConvertDateEpoch";


const NovobizCommon = ({ liveboardId, tabID, selectedDate, partners }) => {

  const ref = useRef(null);

  useEffect(() => {

    if (ref.current) {
      ref.current.innerHTML = '';
    }

    const runtimeFilters = [];

    if (selectedDate) {
      const epochDate = convertDateEpoch(selectedDate);
      runtimeFilters.push({
        columnName: 'AZ log time',
        operator: RuntimeFilterOp.EQ,
        values: [epochDate],
      });
    }

    if (partners) {
    runtimeFilters.push({
      columnName: "Partner",
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
      hiddenActions: [
              Action.CopyLink,
              Action.Download,
              Action.ShowUnderlyingData,
              Action.Pin,
              Action.SpotIQAnalyze,
              Action.RenameModalTitleDescription,
              Action.SpotterFeedback,
            ],
    });
    liveboard.render();
  }, [liveboardId, tabID, selectedDate, partners]);

  return <div style={{ height: "100vh", width: "100%" }} ref={ref} />;
};

export default NovobizCommon;
