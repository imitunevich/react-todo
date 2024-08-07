import { TodoItem } from "../../todo-types";
import { TodoCard } from "../TodoCard/TodoCard";

export function TodoList(p: {
  todoList: TodoItem[];
  onDelete: (todoId: number) => void;
  updateItem: (item: TodoItem) => void;
}) {
  const renderTodoList: React.ReactNode = p.todoList.map((item: TodoItem) => (
    <div key={item.id} className="col-md-6 col-lg-4 mb-3">
      <TodoCard
        item={item}
        onDelete={() => p.onDelete(item.id)}
        updateItem={p.updateItem}
      />
    </div>
  ));
  return (
    <div className="row">
      <h2 className={"mb-2"}>Todo List:</h2>
      {renderTodoList}
    </div>
  );
}
