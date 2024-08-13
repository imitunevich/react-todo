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
  function updateItem(item: TodoItem): void {
    setTodoList((prevState: TodoItem[]) =>
      prevState.map((todoItem: TodoItem) =>
        todoItem.id === item.id ? { ...todoItem, ...item } : todoItem,
      ),
    );
  }

  return (
    <section>
      <div className="container">
        <div className={"mb-5"}>
          <TodoForm onSubmit={addItem} />
        </div>

        <TodoList
          todoList={todoList}
          onDelete={deleteItem}
          updateItem={updateItem}
        />
      </div>
    </section>
  );
}

export default App;
