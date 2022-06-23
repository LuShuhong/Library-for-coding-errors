import React from "react";
import { useState } from "react";
 import logo from './Chris.png';

import "./App.css";

import index from "./index.js";
import Button from "./Button.js";
import DarkMode from "./DarkMode.js";


 
function App() {
  const [data, setData] = useState([]);

  async function npmErrorMsg(topicType) {
    //this needs the local host url from the backend server
    const response = await fetch(`http://localhost:3001/movies/${topicType}`);
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    console.log(data);
  }

  const payload = data.map((payload) => (
    <div>
      <div>{payload.question}</div>
      <div>{payload.answer}</div>
    </div>
  ));
  console.log(payload);

  return (
    <>
      <div className="App">
        <header className="App-header">
         
          <div className="groupTitle"></div>
        </header>

        {/* </div> <img src={logo} className="App-logo" alt="logo" /> */}
      </div>{" "}
      <img src={logo} className="App-logo" alt="logo" />
      <>
       

        <div className="drinksdata">{payload}</div>

        <div className="wrapper">
          <Button label="VS CODE" topicType="VS" onClick={npmErrorMsg} />
          <Button
            label="NPM"
            topicType="npm"
            styleType="in"
            onClick={npmErrorMsg}
          />
          <Button label="GITHUB" topicType="Git" onClick={npmErrorMsg} />
          
        </div>
        <p className ="dataText">{payload}</p>
        <DarkMode id= 'toggle'/>
      </>
    </>
  );
}
export default App;
