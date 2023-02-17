import classes from "./App.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className={classes.App}>
      <h1>My Todos Context</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
