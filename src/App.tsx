import "./App.scss";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { useState } from "react";
import { INIT_TODO_LIST } from "./utils/constants";
import { TodoItem, TodoStatus } from "./todo-types";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FilterBar } from "./components/FilterBar/FilterBar";

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>(INIT_TODO_LIST);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredTodos: TodoItem[] = todoList.filter(
    (item: TodoItem) =>
      item.name.indexOf(searchTerm.trim().toLowerCase()) !== -1 &&
      (statusFilter === "" || item.status === statusFilter),
  );

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

        <div className={"mb-2"}>
          <SearchBar
            updateSearchTerm={setSearchTerm}
            placeholder={"Search by name"}
          />
        </div>

        <div className={"mb-5"}>
          <FilterBar
            options={Object.values(TodoStatus)}
            updateFilter={setStatusFilter}
          />
        </div>
        {filteredTodos.length ? (
          <TodoList
            todoList={filteredTodos}
            onDelete={deleteItem}
            updateItem={updateItem}
          />
        ) : (
          <p className={"h3"}>No todos found</p>
        )}
      </div>
    </section>
  );
}

export default App;
