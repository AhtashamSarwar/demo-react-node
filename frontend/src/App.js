import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Error fetching from backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "24px" }}>
      <h1>React + Node Demo 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

