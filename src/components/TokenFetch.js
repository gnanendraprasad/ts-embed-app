import { useEffect, useState } from "react";
import { TS_HOST, username, password } from "../config";

const URL = TS_HOST + "/callosum/v1/tspublic/v1/session/login";

const TokenFetch = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const conn = async () => {
            try {
                const response = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Accept": "application/json",
                        "X-Requested-By": "ThoughtSpot"
                    },
                    body: new URLSearchParams({
                        username,
                        password,
                        rememberme: "false"
                    }),
                    credentials: "include" // Important for cookies!
                });

                if (response.status === 204 || response.ok) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    // Optionally, handle error response here
                }
            } catch (error) {
                console.error("Error fetching session:", error);
                setIsLoggedIn(false);
            }
        };
        conn();
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <div>Cookie is set</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TokenFetch;
