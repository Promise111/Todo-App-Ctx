import { createContext } from "react";
const initialCtx = {
  todos: [],
  removeFromList(id) {},
  addToList(name, description) {},
  editItem(id) {},
  deleteItem(id) {},
  completeItem(id) {},
};

const TodoContext = createContext(initialCtx);

export default TodoContext;
