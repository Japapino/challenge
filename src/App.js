import React, { useEffect, useState } from "react";
import "./App.css";
// import TypewritterText from "./TypewriterText";

const url =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656c61";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [screenText, setScreenText] = useState('');
  const [index, setIndex] = useState(0);
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

    // start with nothing
    // each iteration of useEffect will add 1 char until the whole word is added to 'screnText'


  // console.log("screenText: ", screenText);

  //TODO: update html, each character needs to be a list item

  // const text = TypewritterText(htmlContent); 
  console.log("htmlContent: ", htmlContent); 
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="main-container">
        {!isLoading ? (
          <div className="flag">
            {/* {TypewritterText()} */}
            <ul className="list" id={"charList"} >
            {htmlContent.map((c,i) => {
              return (
              <li className="char" key={i}>
                {c}
              </li>
              )
            })}
            </ul>
          </div>
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
}

export default App;
