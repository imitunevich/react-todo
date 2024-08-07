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

  function deleteItem(id: number): void {
    setTodoList(todoList.filter((todo: TodoItem) => todo.id !== id));
  }
  return (
    <section>
      <div className="container">
        <div className={"mb-5"}>
          <TodoForm onSubmit={addItem} />
        </div>

        <TodoList todoList={todoList} onDelete={deleteItem} />
      </div>
    </section>
  );
}

export default App;
