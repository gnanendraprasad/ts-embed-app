import { useEffect, useState } from "react";
import { TS_HOST, username, password } from "../config";

const URL = TS_HOST + "/callosum/v1/tspublic/v1/session/login";

const TokenFetch = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const conn = async () => {
            try {
                const response = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Accept": "application/json",
                        "X-Requested-By":"ThoughtSpot"
                    },
                    body: JSON.stringify({
                        "username":username,
                        "password":password,
                        "rememberme":"false"
                    })
                });

                const data = await response.json();
                setToken(data);
            } catch (error) {
                console.error("Error fetching token:", error);
            }
        };
        conn();
    }, []);

    return (
        <div>
            {token ? (
                <div>Cookie is set</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TokenFetch;
