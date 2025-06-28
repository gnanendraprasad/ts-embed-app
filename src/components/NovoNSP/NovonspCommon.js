import { useEffect, useRef } from "react";
import {
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
} from "@thoughtspot/visual-embed-sdk";
import {convertDateEpoch} from "../../ConvertDateEpoch";

const NovonspCommon = ({ liveboardId, vizId, selector, selectedDate, frameParams }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !liveboardId || !vizId) return;

    ref.current.innerHTML = "";

    const runtimeFilters = [];

  if (selectedDate) {
  const endDate = new Date(); // now

  const startEpoch = convertDateEpoch(selectedDate);
  const endEpoch = convertDateEpoch(endDate);     // in seconds

  runtimeFilters.push({
    columnName: "Event At",
    operator: RuntimeFilterOp.BW, // Between
    values: [startEpoch, endEpoch],
  });
  runtimeFilters.push({
    columnName: "Policy Effective Date",
    operator: RuntimeFilterOp.BW, // Between
    values: [startEpoch, endEpoch],
  });
  runtimeFilters.push({
    columnName: "Bind Effective Date",
    operator: RuntimeFilterOp.BW, // Between
    values: [startEpoch, endEpoch],
  });
  runtimeFilters.push({
    columnName: "Enrollment Date",
    operator: RuntimeFilterOp.BW, // Between
    values: [startEpoch, endEpoch],
  });
  runtimeFilters.push({
    columnName: "Start Time Utc Date",
    operator: RuntimeFilterOp.BW, // Between
    values: [startEpoch, endEpoch],
  });
}

    const embed = new LiveboardEmbed(`#${selector}`, {
      liveboardId,
      vizId, // no wrapping
      frameParams,
      hiddenActions: [
        Action.CopyLink,
        Action.Download,
        Action.ShowUnderlyingData,
        Action.Pin,
        Action.SpotIQAnalyze,
        Action.RenameModalTitleDescription,
        Action.SpotterFeedback,
        Action.CreateMonitor,
      ],
      runtimeFilters,
      
      
    });

    embed.render();
  }, [liveboardId, vizId, selector, selectedDate, frameParams]);

  return (
    <div
      id={selector}
      style={{height:"inherit"}}
      ref={ref}
    />
  );
};

export default NovonspCommon;
