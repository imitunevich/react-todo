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
    const itemToUpdateIndex: number = todoList.findIndex(
      (todo: TodoItem) => todo.id == item.id,
    );
    const itemToUpdate: TodoItem = todoList[itemToUpdateIndex];
    const updatedTodoList = [...todoList];
    updatedTodoList[itemToUpdateIndex] = { ...itemToUpdate, ...item };
    setTodoList(updatedTodoList);
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
