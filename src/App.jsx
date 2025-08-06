import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import TodoList from "./routes/TodoList";
import TodoNew from "./routes/TodoNew";
import TodoEdit from "./routes/TodoEdit";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "useState, useEffect 복습",
      completed: false,
    },
    {
      id: 2,
      title: "저녁 장보기",
      content: "우유, 계란, 빵 사기",
      completed: true,
    },
    {
      id: 3,
      title: "운동하기",
      content: "30분 이상 걷기",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const navigate = useNavigate();

  const handleAdd = (newTodo) => {
    const todoToAdd = {
      ...newTodo,
      id: Date.now(),
      completed: false,
    };
    setTodos([...todos, todoToAdd]);
    navigate("/todos");
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    navigate("/todos");
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/todos" />} />
      <Route
        path="/todos"
        element={
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        }
      />
      <Route path="/todos/new" element={<TodoNew onAdd={handleAdd} />} />
      <Route
        path="/todos/:id/edit"
        element={<TodoEdit todos={todos} onUpdate={handleUpdate} />}
      />
    </Routes>
  );
}

export default App;
