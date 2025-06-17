import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import ThoughtSpotEmbed from "../ThoughtSpotEmbed";
import TabHandler from "../TabHandler";

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
        {selectedItem.tabs.map((tab) => (
          <Tab eventKey={tab.id} title={tab.tabLabel} key={tab.id}>
            <TabHandler
              tab={tab}
              selectedItem={selectedItem}
              selectedTabIndex={selectedTabIndex}
              days={days}
              setDays={setDays}
              columnName={columnName}
            />
          </Tab>
        ))}
      </Tabs>

      {selectedItem.tabs[selectedTabIndex].vizIds.map((vizId, idx) => (
        <ThoughtSpotEmbed
          key={vizId + idx}
          days={days}
          columnName={columnName}
          liveboardId={selectedItem.liveboardId}
          vizId={vizId}
        />
      ))}
    </>
  );
};

export default QuotesBinds;
