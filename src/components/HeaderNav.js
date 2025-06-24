import React from "react";

const HeaderNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { key: "gps", label: "GPS" },
  ];

  return (
    <div className="header-navbar" style={{borderRadius: "10px", padding: "5px"}}>
      {navItems.map((item) => (
        <div style={{paddingLeft: "3vw", paddingRight: "3vw"}}
          key={item.key}
          className={`nav-item ${activeTab === item.key ? "active" : ""}`}
          onClick={() => setActiveTab(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default HeaderNav;
