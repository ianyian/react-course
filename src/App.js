import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>my todos</h1>
      <div className="card">
        <h2>Title</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
