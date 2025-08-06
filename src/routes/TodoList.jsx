import TodoItem from "../components/TodoItem";

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div>
      <h1>할 일 목록</h1>
      <a href="/todos/new">
        <button>새 할 일 추가</button>
      </a>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
