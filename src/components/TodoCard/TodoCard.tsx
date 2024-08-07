/// <reference types="vite-plugin-svgr/client" />
import { TodoItem } from "../../todo-types";
import DeleteIcon from "../../assets/x-lg.svg?react";

export function TodoCard(p: { item: TodoItem; onDelete: () => void }) {
  return (
    <div className="card">
      <div className="card-header d-flex flex-row justify-content-between">
        <span>Todo item</span>
        <button className={"btn btn-secondary"} onClick={p.onDelete}>
          <DeleteIcon />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{p.item.name}</h5>
        <p className="card-text">{p.item.content}</p>
      </div>
    </div>
  );
}
