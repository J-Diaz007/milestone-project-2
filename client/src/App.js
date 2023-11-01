import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [secret, setSecret] = useState("Loading...");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${API_URL}/`)
      .then((resp) => {
        setMessage(resp.data.message);
        setSecret(resp.data.secret);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        setMessage("Error loading data.");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p><strong>Wazzzup??!! 🤪</strong></p>
        <p>Scotty</p>
        <p>Sasa</p>
        <p>Daniel</p>
        <h3>{message}</h3>
        <h4>Don't tell anyone this: {secret}</h4>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
