import React, {useState} from "react";
import Stellantis from "./SidebarItems/Stellantis"

const Maincontent = ({selectedMenu, menuItems}) => {
    
      const [policyId, setPolicyId] = useState("");
      const [deviceId, setDeviceId] = useState("");
      const [tripId, setTripId] = useState("");
    
    const selectedItem = menuItems.find((item) => item.key === selectedMenu);

  return (
    <>
    {selectedMenu === "Stellantis" && (
          <Stellantis            
            selectedItem={selectedItem}
            policyId={policyId}
            setPolicyId={setPolicyId}
            deviceId={deviceId}
            setDeviceId={setDeviceId}
            tripId={tripId}
            setTripId={setTripId}
          />
        )    
    }
    </>
  );
};

export default Maincontent;
