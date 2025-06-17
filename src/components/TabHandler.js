import React from "react";
import ThoughtSpotEmbed from "./ThoughtSpotEmbed";

const TabHandler = ({ tab, selectedItem, days, setDays, columnName }) => {
  const filterDays = tab.isDatepicker ? days : null;
  const filterColumn = tab.isDatepicker ? columnName : null;

  return (
    <>
      {tab.isDatepicker && (
        <div className="date-picker">
          <label htmlFor="dateInput">Select Date From:</label>
          <input
            id="dateInput"
            type="date"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
      )}

      {tab.vizIds?.map((vizId, idx) => (
        <ThoughtSpotEmbed
          key={vizId + idx}
          days={filterDays}
          columnName={filterColumn}
          liveboardId={selectedItem.liveboardId}
          vizId={vizId}
        />
      ))}
    </>
  );
};

export default TabHandler;
