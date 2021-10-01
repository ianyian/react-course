import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text="Alex" />
      <Todo text="Micheal" />
      <Todo text="James" />
    </div>
  );
}

export default App;
