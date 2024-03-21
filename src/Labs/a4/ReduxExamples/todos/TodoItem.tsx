// function TodoItem({ todo, deleteTodo, setTodo }: {
//   todo: { id: string; title: string };
//   deleteTodo: (id: string) => void;
//   setTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
//     <li key={todo.id} className="list-group-item">
//       <button onClick={() => deleteTodo(todo.id)}> Delete </button>
//       <button onClick={() => setTodo(todo)}> Edit </button>
//       {todo.title}
//     </li>
//   );
// }
// export default TodoItem;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LabState,TodoType } from "../../../store";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem(
 ) {
    const { todos } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <>
    {todos.map((todo: TodoType) => (
    <li key={todo.id} className="list-group-item">
    <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
    <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
        {todo.title}
    </li>
    ))}
    </>
  );
}
export default TodoItem;
