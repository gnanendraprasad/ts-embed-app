import React from "react";

const Sidebar = ({selectedMenu, setSelectedMenu, menuItems}) => {

  return (
    <>
    <div className="brand">Novo</div>
        {/* {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? "active" : ""}`}
            onClick={() => {
              setSelectedMenu(item.key);
            }}
          >
            {item.key}
          </div>
        ))} */}
        <div key={"Stellantis"} className={`menu-item ${selectedMenu === "Stellantis" ? "active" : ""}`} onClick={()=>{setSelectedMenu("Stellantis");}}>
        {"Stellantis"}
        </div>
        <div key={"Data Check"} className={`menu-item ${selectedMenu === "Data Check" ? "active" : ""}`} onClick={()=>{setSelectedMenu("Data Check");}}>
        {"Data Check"}
        </div>
    </>
  );
};

export default Sidebar;