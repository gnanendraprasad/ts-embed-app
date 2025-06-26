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
        {"Telematics"}
        </div>
        <div key={"Novonsp"} className={`menu-item ${selectedMenu === "Novonsp" ? "active" : ""}`} onClick={()=>{setSelectedMenu("Novonsp");}}>
        {"NSP Prod"}
        </div>
        <div key={"Novobiz"} className={`menu-item ${selectedMenu === "Novobiz" ? "active" : ""}`} onClick={()=>{setSelectedMenu("Novobiz");}}>
        {"Biz Report"}
        </div>
        <div key={"prod_mob"} className={`menu-item ${selectedMenu === "prod_mob" ? "active" : ""}`} onClick={()=>{setSelectedMenu("prod_mob");}}>
        {"Mob App Report"}
        </div>
        <div key={"team_productivity"} className={`menu-item ${selectedMenu === "team_productivity" ? "active" : ""}`} onClick={()=>{setSelectedMenu("team_productivity");}}>
        {"Team Productivity"}
        </div>
    </>
  );
};

export default Sidebar;