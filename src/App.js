import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <h1> App Router</h1>
      </div>
    </>
  );
}

export default App;
