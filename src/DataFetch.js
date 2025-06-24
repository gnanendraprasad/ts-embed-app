import { useEffect, useState } from "react";
import { TS_HOST } from "./config";

const searchDataPath = "/api/rest/2.0/searchdata";
const URL = TS_HOST+searchDataPath;

const DataFetch = () => {
    const [dataValues, setDataValues] = useState();

    useEffect(() => {
        const data_conn = async() => {
            try {
                    const response = await fetch(URL, {
                    method: "POST",
                    headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                                },
                                body: JSON.stringify({                                   
                                    query_string: "[Policy ID] AND [Policy Status]='INFORCE'",
                                    logical_table_identifier: "0e11c040-2648-4621-964f-53dd3bde0eea",
                                    record_size: 1000
                                }),
                                credentials: "include",
                            });
            
                            if (response.status === 200 || response.ok) {
                                const json = await response.json();
                                console.log(json);
                                setDataValues(json?.contents[0]?.data_rows);
                            } else {
                                console.log("Check your API call for DataFetch");
                            }
                } catch (error) {
                        console.error("Error fetching data:", error);
                    }
        };
        data_conn();
    },[]);
    return (
        <>
    {
        dataValues.map((elem)=>{
            return <p>{elem[0]}</p>
        })
    }
        </>
    );
};

export default DataFetch;