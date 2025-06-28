import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import NovonspCommon from "./NovonspCommon";

const tabsConfig = {
  summary: {
    label: "Summary",
    vizIds: [
      "97ac5d65-e5e5-428c-8073-c05cd94c44b4",
      "f2c14b9a-c4c2-479a-95ee-cb844c194dfc",
      "0bd2d642-c1bf-4adf-aaff-78ba0d55c148",
      "68a02b24-f316-4a2c-8b49-d679ea7f5ba8",
      "c983d0cb-81c0-4ed3-bab2-e6c5dc77dada",
      "7acb28a7-64ad-4e95-a2f6-28ab1c2473b8",
      "0a999993-477a-4a74-935f-a35aabf88eb7",
      "befa9675-de35-4589-9b10-e2337dc47120",
      "98e6af75-762e-43bf-a5df-f04aa6f74f08",
      "0fcbe934-22bd-4338-8d36-dbf1c57edb05",
      "2618a505-6ad6-463e-860e-896b50270b2f",
      "3f2fbffb-0a4f-488c-a9bb-2a22ae0beadf",
      "09fdddd9-4f7e-4f4f-b756-1effcd546f9f",
      "8b5bec3f-1d11-4640-bf6d-86f7b29409f8",
    ],
  },
  // Add more tabs in the future like:
  // details: {
  //   label: "Details",
  //   vizIds: ["some-viz-id-1", "some-viz-id-2"],
  // },
};

const Novonsp = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [vizIds, setVizIds] = useState([]);

  const [selectedDate, setSelectedDate] = useState("");

  const liveboardId = "0e93b5c3-4d77-44c7-920b-ed14877d2ac9";

  const navItems = Object.keys(tabsConfig).map((key) => ({
    key,
    label: tabsConfig[key].label,
  }));

  useEffect(() => {
    const tabConfig = tabsConfig[activeTab];
    setVizIds(tabConfig?.vizIds || []);
  }, [activeTab]);

  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
      />

      <div>
        <label htmlFor="datePicker" style={{ marginRight: "8px" }}>
          Date
        </label>
        <input
          id="datePicker"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          // gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginTop: "10px",
        }}
      >
        {vizIds.slice(0, 6).map((id, idx) => (
          <NovonspCommon
            key={id}
            selector={`viz-${idx + 1}`}
            liveboardId={liveboardId}
            vizId={id}
            selectedDate={selectedDate}
            frameParams={{
              hideActionBar: true,
              hideTitle: true,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      <>
        {vizIds.length > 6 && (
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {vizIds.slice(6, 8).map((id, idx) => (
              <div key={id} style={{ width: "100%", height: "600px" }}>
                <NovonspCommon
                  key={id}
                  selector={`viz-${idx + 7}`}
                  liveboardId={liveboardId}
                  vizId={id}
                  selectedDate={selectedDate}
                  frameParams={{
                    hideActionBar: true,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </>

      <>
        {vizIds.length > 9 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 70%",
              gap: "16px",
              marginTop: "10px",
            }}
          >
            {vizIds.slice(9, 11).map((id, idx) => (
              <div key={id} style={{ width: "100%", height: "500px" }}>
                <NovonspCommon
                  key={id}
                  selector={`viz-${idx + 10}`}
                  liveboardId={liveboardId}
                  vizId={id}
                  selectedDate={selectedDate}
                  frameParams={{
                    hideActionBar: true,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </>

      <>
        {vizIds.length > 8 && (
          <div
            style={{
              margin: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              overflow: "auto", // Enable scrolling if content exceeds 400px
              border: "1px solid #ccc", // optional: visual boundary
              borderRadius: "8px", // optional styling
            }}
          >
            {vizIds.slice(8, 9).map((id, idx) => (
              <div key={id} style={{ width: "100%", height: "400px" }}>
                <NovonspCommon
                  key={id}
                  selector={`viz-${idx + 9}`}
                  liveboardId={liveboardId}
                  vizId={id}
                  selectedDate={selectedDate}
                  frameParams={{
                    hideActionBar: true,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </>

      <>
        {vizIds.length > 11 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 70%",
              gap: "16px",
              marginTop: "10px",
            }}
          >
            {vizIds.slice(11, 13).map((id, idx) => (
              <div key={id} style={{ width: "100%", height: "500px" }}>
                <NovonspCommon
                  key={id}
                  selector={`viz-${idx + 12}`}
                  liveboardId={liveboardId}
                  vizId={id}
                  selectedDate={selectedDate}
                  frameParams={{
                    hideActionBar: true,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </>

      <>
        {vizIds.length > 13 && (
          <div
            style={{
              display: "flex",
              // gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "10px",
            }}
          >
            {vizIds.slice(13).map((id, idx) => (
              <div key={id} style={{ width: "100%", height: "500px" }}>
                <NovonspCommon
                  key={id}
                  selector={`viz-${idx + 14}`}
                  liveboardId={liveboardId}
                  vizId={id}
                  selectedDate={selectedDate}
                  frameParams={{
                    hideActionBar: true,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </>

    </>
  );
};

export default Novonsp;
