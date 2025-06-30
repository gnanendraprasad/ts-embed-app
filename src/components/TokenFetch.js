import { useEffect, useState } from "react";
import { TS_HOST, USERNAME, PASSWORD } from "../env";
import App from "../App";
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
                        username: USERNAME,
                        password: PASSWORD,
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
        <>
            {isLoggedIn ? (
            <>
                <App />
            </>
        ) : (
            <>
                <p>Loading..If it's too long check for login</p>
            </>
        )}
        </>
    );
};

export default TokenFetch;
