import TodoForm from "../components/TodoForm";

function TodoNew({ onAdd }) {
  return (
    <div>
      <h1>새 할 일 추가</h1>
      <TodoForm onSubmit={onAdd} />
    </div>
  );
}

export default TodoNew;
