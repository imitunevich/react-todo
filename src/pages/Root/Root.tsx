import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoApi } from "../../api/TodoApi";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { TodoItem, TodoStatus } from "../../todo-types";
import { TodoList } from "../../components/TodoList/TodoList";

export function Root() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    TodoApi.getTodos().then((data: TodoItem[]) => {
      console.log("getTodos", data);
      setTodoList(data);
    });
  }, []);

  const filteredTodos: TodoItem[] = todoList.filter(
    (item: TodoItem) =>
      item.name.indexOf(searchTerm.trim().toLowerCase()) !== -1 &&
      (statusFilter === "" || item.status === statusFilter),
  );

  async function deleteItem(id: string): Promise<void> {
    await TodoApi.deleteTodo(id);
    setTodoList(todoList.filter((todo: TodoItem) => todo.id !== id));
  }
  async function updateItem(item: TodoItem): Promise<void> {
    const updatedItem = await TodoApi.updateTodo({ ...item });
    setTodoList((prevState: TodoItem[]) =>
      prevState.map((todoItem: TodoItem) =>
        todoItem.id === updatedItem.id
          ? { ...todoItem, ...updatedItem }
          : todoItem,
      ),
    );
  }

  return (
    <section>
      <div className="container">
        <Link to={"/todos/new"} className={"btn btn-primary mb-5 mt-2"}>
          Add new
        </Link>

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
