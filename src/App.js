import React, {useState} from "react";
import "./App.css";
import Sidebar from "./components/SidebarItems/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Stellantis");

  const menuItems = [
        {
          key: "Stellantis",
          liveboardId: "ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1",
          tabs: [
            {
              tabLabel: "GPS",
              vizIds: [
                "5c627138-64d6-4087-9fb2-63576962a798",
                "1a15df7e-dd4c-4866-ad5d-307877ab8588", // Replace with actual second viz ID
                ],
            },
          ],
        }
      ];

  return (
    <div className="app-container">
      
      <div className="sidebar">
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} menuItems={menuItems}/>
      </div>

      <div className="main-content" style={{padding:"8px"}}>
        <Maincontent selectedMenu={selectedMenu} menuItems={menuItems}/>
      </div>
      
    </div>
  );
}

export default App;
