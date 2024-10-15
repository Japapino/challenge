import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import Typewriter from "./Typewriter.js";
const url =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656c61";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.text();
      setHtmlContent(Array.from(data));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    if (!htmlContent) {
      fetchData();
    }
  }, [htmlContent]);


  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main-container">
        {!isLoading ? (
          <div>
            <Typewriter text={htmlContent} />
          </div>
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
}

export default App;
