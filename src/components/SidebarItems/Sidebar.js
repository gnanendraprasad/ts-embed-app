import React from "react";

const Sidebar = ({selectedMenu, setSelectedMenu, menuItems}) => {

  return (
    <>
    <div className="brand">Novo</div>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? "active" : ""}`}
            onClick={() => {
              setSelectedMenu(item.key);
            }}
          >
            {item.key}
          </div>
        ))}
    </>
  );
};

export default Sidebar;