import { useState, useEffect } from "react";

function TodoForm({ initialData, onSubmit }) {
  const [todo, setTodo] = useState({ title: "", content: "" });

  useEffect(() => {
    if (initialData) {
      setTodo(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    onSubmit(todo);

    if (!initialData) {
      setTodo({ title: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          name="content"
          value={todo.content}
          onChange={handleChange}
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
}

export default TodoForm;
