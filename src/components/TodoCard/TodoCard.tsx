/// <reference types="vite-plugin-svgr/client" />
import { TodoItem } from "../../todo-types";
import DeleteIcon from "../../assets/x-lg.svg?react";
import { ChangeEvent } from "react";

type Props = {
  item: TodoItem;
  onDelete: () => void;
  updateItem: (item: TodoItem) => void;
};

export function TodoCard({ item, onDelete, updateItem }: Props) {
  function setDone(e: ChangeEvent<HTMLInputElement>) {
    updateItem({ ...item, isDone: e.target.checked });
  }
  return (
    <div className="card">
      <div className="card-header d-flex flex-row justify-content-between">
        <span>Todo item</span>
        <button className={"btn btn-secondary"} onClick={onDelete}>
          <DeleteIcon />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.content}</p>
      </div>
      <div className="card-footer text-muted">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={item.isDone}
            onChange={setDone}
            id="isDone"
          />
          <label className="form-check-label" htmlFor="isDone">
            Done
          </label>
        </div>
      </div>
    </div>
  );
}
