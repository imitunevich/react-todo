import "./App.scss";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { useState } from "react";
import { INIT_TODO_LIST } from "./utils/constants";
import { TodoItem } from "./todo-types";

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>(INIT_TODO_LIST);
  function addItem(item: TodoItem): void {
    setTodoList([...todoList, item]);
  }
  return (
    <section>
      <div className="container">
        <div className={"mb-5"}>
          <TodoForm onSubmit={addItem} />
        </div>

        <TodoList todoList={todoList} />
      </div>
    </section>
  );
}

export default App;
