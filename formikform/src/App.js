import Form from "./Form";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <br></br>
        <ClickCounter />
        <HoverCounter />
      </div>
    </div>
  );
}

export default App;
