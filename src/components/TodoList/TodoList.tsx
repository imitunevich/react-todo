import { TodoItem } from "../../todo-types";
import { TodoCard } from "../TodoCard/TodoCard";

type Props = {
  todoList: TodoItem[];
  onDelete: (todoId: number) => void;
  updateItem: (item: TodoItem) => void;
};

export function TodoList({ todoList, onDelete, updateItem }: Props) {
  const renderTodoList: React.ReactNode = todoList.map((item: TodoItem) => (
    <div key={item.id} className="col-md-6 col-lg-4 mb-3">
      <TodoCard
        item={item}
        onDelete={() => onDelete(item.id)}
        updateItem={updateItem}
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
