import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import ProdmobCommon from "./ProdmobCommon";

const ProdMob = () => {
  const [activeTab, setActiveTab] = useState("user_activity");
  const [tabID, setTabId] = useState("a333d850-764b-44cb-8095-35bb80b0a59a");

  const liveboardId = "0d82418d-3ff2-48a5-887a-9a83aa9b3be5";

  const navItems = [
    { key: "user_activity", label: "User Activity" },
    { key: "onboarding", label: "Onboarding" },
  ];

  // Update tabID based on activeTab
  useEffect(() => {
    const tabMap = {
      user_activity: "a333d850-764b-44cb-8095-35bb80b0a59a",
      onboarding:"7f1489d0-756d-4ecf-a9e4-151738a8c5c6",
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
        <ProdmobCommon liveboardId={liveboardId} tabID={tabID} />
      </div>
    </>
  );
};

export default ProdMob;
