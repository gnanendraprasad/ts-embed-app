import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import TeamproductivityCommon from "./TeamproductivityCommon";

const TeamProductivity = () => {
  const [activeTab, setActiveTab] = useState("sprint_measure");
  const [tabID, setTabId] = useState("f54dda9a-a96f-4803-9cf0-08d886817b34");

  const liveboardId = "27e4c292-390f-44c1-a80a-912fd736cd52";

  const navItems = [
    { key: "sprint_measure", label: "Sprint Execution Measure" },
    { key: "productivity_measure", label: "Team Productivity Measure" },
  ];

  // Update tabID based on activeTab
  useEffect(() => {
    const tabMap = {
      user_activity: "f54dda9a-a96f-4803-9cf0-08d886817b34",
      onboarding:"19ef91b9-b402-45b6-8b27-5d975ba794f1",
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
        <TeamproductivityCommon liveboardId={liveboardId} tabID={tabID} />
      </div>
    </>
  );
};

export default TeamProductivity;
