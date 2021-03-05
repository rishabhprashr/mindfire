import Form from "./Form";
import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "./App.css";
import FRParentInput from "./FRParentInput";
import ComponentC from "./ComponentC";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

export const userContext = React.createContext();
export const ageContext = React.createContext();

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <br></br>
        <ClickCounter />
        <HoverCounter />
        <FRParentInput />
        <userContext.Provider value={"rishabh"}>
          <ageContext.Provider value={"22"}>
            <ComponentC />
          </ageContext.Provider>
        </userContext.Provider>
        <CounterOne/>
        <br></br>
        <CounterTwo/>
      </div>
    </div>
  );
}

export default App;
