import { useReducer } from "react";
import TodoContext from "./todo-context";
export const defaultTodoContext = {
  todos: [
    {
      id: 1,
      name: "Task 1",
      description: "Do something in the next 10 minutes",
      completed: true,
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newTodo = {
        id: (Math.random() * 1000).toFixed(1),
        name: action.obj.name,
        description: action.obj.description,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    }
    case "delete": {
      let newTodos = [...state.todos].filter((todo) => todo.id !== action.id);
      return { todos: newTodos };
    }
    case "complete": {
      const todoItemIndex = state.todos.findIndex(
        (todo) => todo.id === action.id
      );
      let copyTodos = state.todos.slice();
      let item = copyTodos[todoItemIndex];
      item.completed = !item.completed;
      copyTodos[todoItemIndex] = item;
      return { todos: copyTodos };
    }
    default:
      return state;
  }
};
const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultTodoContext);
  const todoContext = {
    todos: state.todos,
    addToList(name, description) {
      const todoObj = {
        name: name,
        description: description,
      };
      dispatch({ type: "add", obj: todoObj });
    },
    editItem(id) {},
    deleteItem(id) {
      dispatch({ type: "delete", id });
    },
    completeItem(id) {
      dispatch({ type: "complete", id });
    },
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
