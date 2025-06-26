import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import NovobizCommon from "./novobizcommon";
import Select from "react-select";
import { TS_HOST } from "../../config";

const API_URL = `${TS_HOST}/api/rest/2.0/searchdata`;

const Novobiz = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [tabID, setTabId] = useState("9be58c6c-8c86-4f5d-8e89-c7cf9a4b6fd7");
  const [selectedDate, setSelectedDate] = useState("");

  const [partnerOptions, setPartnerOptions] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [loadingPartners, setLoadingPartners] = useState(true);

  const liveboardId = "95eff71c-a2f6-48e3-ba01-78d94fb1d6cf";

  const navItems = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
    { key: "partner_quote", label: "Partner Quote" },
  ];

  // Fetch partner options
  useEffect(() => {
    const fetchPartnerOptions = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            query_string: "[Partner]",
            logical_table_identifier: "7d9e9cec-087a-4b30-a820-1e5100be6486",
            record_size: 1000,
          }),
        });
        const json = await res.json();
        const rows = json?.contents?.[0]?.data_rows || [];

        const options = rows
          .map((row) => row[0])
          .filter(Boolean)
          .map((id) => ({ value: id, label: id }));

        setPartnerOptions(options);
      } catch (err) {
        console.error("Failed to fetch partner options", err);
      } finally {
        setLoadingPartners(false);
      }
    };

    fetchPartnerOptions();
  }, []);

  // Update tabID based on activeTab
  useEffect(() => {
    const tabMap = {
      daily: "9be58c6c-8c86-4f5d-8e89-c7cf9a4b6fd7",
      weekly: "d35ca0ff-b10d-4e81-b4b5-7ce4a85dd789",
      monthly: "860f7068-c9bd-4179-ac45-9b5c75dd3789",
      partner_quote: "2405ebb3-c9bc-4210-9073-510ec0ca0623",
    };

    setTabId(tabMap[activeTab] || "");
  }, [activeTab]);

  const selectStyles = {
    container: (provided) => ({
      ...provided,
      minWidth: 300,
      flex: 1,
      marginLeft: "1rem",
    }),
  };

  return (
    <>
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <div>
          <label htmlFor="datePicker" style={{ marginRight: "8px" }}>
            Select Date:
          </label>
          <input
            id="datePicker"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div style={{ flex: 0.2 }}>
          {loadingPartners ? (
            <p>Loading partners...</p>
          ) : (
            <Select
              isMulti
              options={partnerOptions}
              value={partnerOptions.filter((opt) =>
                selectedPartners.includes(opt.value)
              )}
              onChange={(selected) =>
                setSelectedPartners(selected.map((opt) => opt.value))
              }
              placeholder="Select Partner(s)"
              styles={selectStyles}
              isClearable
            />
          )}
        </div>
      </div>

      <div style={{ paddingTop: "0px" }}>
        <NovobizCommon
          liveboardId={liveboardId}
          tabID={tabID}
          selectedDate={selectedDate}
          partners={selectedPartners}
        />
      </div>
    </>
  );
};

export default Novobiz;
