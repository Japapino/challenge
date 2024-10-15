import React, { useEffect, useState } from "react";
import "./App.css";

const url =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656c61";

function App() {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // TODO: implement blinking

  useEffect(() => {
    if (!htmlContent) {
      fetch(url)
        .then((response) => response.text())
        .then((data) => setHtmlContent(Array.from(data)));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  //TODO: update html, each character needs to be a list item

  console.log("htmlContent: ", htmlContent); 
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="main-container">
        {!isLoading ? (
          <div style={{display: "inline-block"}}>
            <div class="typing">
              something
              </div>
            {/* <ul className="list typing" id={"charList"} >
            {htmlContent.map((c,i) => {
              return (
              <li className="char" key={i}>
                {c}
              </li>
              )
            })}
            </ul> */}
          </div>
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
}

export default App;
