import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import NovonspCommon from "./NovonspCommon";

const Novonsp = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [tabID, setTabId] = useState("9edc7701-0a80-469e-97fb-098f208d2484");

  const liveboardId = "0e93b5c3-4d77-44c7-920b-ed14877d2ac9";

  const navItems = [
    { key: "summary", label: "Summary" },
  ];

  // Update tabID based on activeTab
  useEffect(() => {
    const tabMap = {
      summary: "9edc7701-0a80-469e-97fb-098f208d2484",
    };

    setTabId(tabMap[activeTab] || "");
  }, [activeTab]);

  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
      />

      <div style={{ paddingTop: "0px" }}>
        <NovonspCommon liveboardId={liveboardId} tabID={tabID} />
      </div>
    </>
  );
};

export default Novonsp;
