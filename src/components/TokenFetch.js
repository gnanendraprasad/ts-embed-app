import { useEffect, useState } from "react";
import { TS_HOST, username, password } from "../config";

const URL = TS_HOST + "/api/rest/2.0/auth/token/full";

const TokenFetch = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const conn = async () => {
            try {
                const response = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
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
                <div>Token: {JSON.stringify(token.token)}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TokenFetch;
