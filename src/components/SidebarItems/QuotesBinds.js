import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import QuotesCompletionRate from "../visualizations/QuotesCompletionRate";
import QuotesStartedByMonth from "../visualizations/QuotesStartedByMonth";

const QuotesBinds = ({ selectedItem, selectedTabIndex, handleTabChange, days, setDays, columnName }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <>
      <Tabs
        defaultActiveKey={`${selectedItem.tabs[selectedTabIndex].id}`}
        id="fill-tab-example"
        className="mb-3"
        fill
        onSelect={(k) => handleTabChange(parseInt(k))}
      >
        <Tab eventKey={0} title="Quotes Completion Rate">
          <div className="date-picker">
            <label htmlFor="dateInput">Select Date From:</label>
            <input
              id="dateInput"
              type="date"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
          <QuotesCompletionRate
            liveboardId={selectedItem.liveboardId}
            days={days}
            columnName={columnName}
          />
        </Tab>
        <Tab eventKey={1} title="Quotes Started by Month">
          <QuotesStartedByMonth liveboardId={selectedItem.liveboardId} />
        </Tab>
      </Tabs>
    </>
  );
};

export default QuotesBinds;
