import { Link } from "react-router-dom";

function TodoItem({ todo, onDelete, onToggle }) {
  const itemStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "gray" : "black",
  };

  return (
    <li style={itemStyle}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => onToggle(todo.id)}>완료/미완료</button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
      <Link to={`/todos/${todo.id}/edit`}>
        <button>수정</button>
      </Link>
    </li>
  );
}

export default TodoItem;
