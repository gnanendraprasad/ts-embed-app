import React from "react";

const HeaderNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { key: "gps", label: "GPS" },
  ];

  return (
    <div className="header-navbar">
      {navItems.map((item) => (
        <div
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
