import { TodoItem } from "../../todo-types";

export function TodoCard(p: { item: TodoItem }) {
  return (
    <div className="card">
      <div className="card-header">Todo item</div>
      <div className="card-body">
        <h5 className="card-title">{p.item.name}</h5>
        <p className="card-text">{p.item.content}</p>
      </div>
    </div>
  );
}
