/// <reference types="vite-plugin-svgr/client" />
import { TodoItem } from "../../todo-types";
import DeleteIcon from "../../assets/x-lg.svg?react";
import { ChangeEvent } from "react";

export function TodoCard(p: {
  item: TodoItem;
  onDelete: () => void;
  updateItem: (item: TodoItem) => void;
}) {
  function setDone(e: ChangeEvent<HTMLInputElement>) {
    p.updateItem({ ...p.item, isDone: e.target.checked });
  }
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
      <div className="card-footer text-muted">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={p.item.isDone}
            onChange={setDone}
            id="isDone"
          />
          <label className="form-check-label" htmlFor="done">
            Done
          </label>
        </div>
      </div>
    </div>
  );
}
