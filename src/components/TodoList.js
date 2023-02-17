import styled from "styled-components";
import { useContext } from "react";
import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";

const Div = styled.div`
  max-width: 80%;
  height: auto;
  background-color: #524f4fa6;
  margin: 2rem auto 0 auto;
  //   padding: 0.1rem;

  & .nothing {
    text-align: center;
    color: white;
    padding: 1rem 0;
    font-size: 23px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoList = (props) => {
  const ctx = useContext(TodoContext);
  const todoItems = ctx.todos.map((todo) => (
    <TodoItem key={todo.id} data={todo} />
  ));
  if (ctx.todos.length <= 0) {
    return (
      <Div>
        <p className="nothing">Add new task!</p>
      </Div>
    );
  }

  return (
    <Div>
      <Ul>{todoItems}</Ul>
    </Div>
  );
};

export default TodoList;
