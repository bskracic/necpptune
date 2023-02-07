import React, { useState } from "react";
import axios from "axios";

const GithubLoginButton = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = async () => {
    const code = window.location.search.split("code=")[1];

    if (!code) {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID";
      return;
    }

    const response = await axios.post("https://github.com/login/oauth/access_token", {
      client_id: "YOUR_CLIENT_ID",
      client_secret: "YOUR_CLIENT_SECRET",
      code,
    });

    const token = response.data.split("access_token=")[1].split("&")[0];
    setAccessToken(token);
  };

  return (
    <div>
      {accessToken ? (
        <p>Welcome! Your access token is {accessToken}</p>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
};

export default GithubLoginButton;