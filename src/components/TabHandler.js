import React from "react";
import ThoughtSpotEmbed from "./ThoughtSpotEmbed";


const TabHandler = ({tab,selectedItem,selectedTabIndex,days, setDays, columnName}) => {
  

  return(
                    <>
                      {tab.isDatepicker ? (
                        <div className="date-picker">
                          <label htmlFor="dateInput">Select Date From:</label>
                          <input
                            id="dateInput"
                            type="date"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                          />
                        </div>
                      ) : null}

                      {selectedItem?.tabs[selectedTabIndex]?.vizIds?.map(
                        (vizId, idx) => (
                          <ThoughtSpotEmbed
                            key={vizId + idx}
                            days={days}
                            columnName={'Click Date Time AZ'}
                            liveboardId={selectedItem.liveboardId}
                            vizId={vizId}
                          />
                        )
                      )}
                    </>
  );}
  export default TabHandler;