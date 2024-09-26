/// <reference types="vite-plugin-svgr/client" />
import { TodoCategory, TodoItem, TodoStatus } from "../../todo-types";
import DeleteIcon from "../../assets/x-lg.svg?react";
import { ChangeEvent, useState } from "react";
import s from "./style.module.scss";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

type Props = {
  item: TodoItem;
  category: TodoCategory;
  onDelete: () => void;
  updateItem: (item: TodoItem) => void;
};

export function TodoCard({ item, category, onDelete, updateItem }: Props) {
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);

  function setDone(e: ChangeEvent<HTMLInputElement>) {
    const updatedStatus = e.target.checked ? TodoStatus.Done : TodoStatus.Todo;

    if (updatedStatus === TodoStatus.Todo) {
      setIsStatusModalVisible(true);
      return;
    }

    updateItem({
      ...item,
      status: TodoStatus.Done,
    });
  }

  function onConfirm() {
    setIsStatusModalVisible(false);
    updateItem({
      ...item,
      status: TodoStatus.Todo,
    });
  }

  function onReject() {
    setIsStatusModalVisible(false);
  }

  function setOnHold(e: ChangeEvent<HTMLInputElement>) {
    updateItem({
      ...item,
      status: e.target.checked ? TodoStatus.OnHold : TodoStatus.Todo,
    });
  }
  return (
    <div
      className={`card ${item.status === TodoStatus.Done ? s["is-done"] : ""}  ${item.status === TodoStatus.OnHold ? s["on-hold"] : ""}`}
    >
      <div className="card-header d-flex flex-row justify-content-between">
        <span>Todo item</span>
        <button className={"btn btn-secondary"} onClick={onDelete}>
          <DeleteIcon />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text mb-1">{item.content}</p>
        <p className="card-text">{category && category.name}</p>
      </div>
      <div className="card-footer">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={item.status === TodoStatus.Done}
            disabled={item.status === TodoStatus.OnHold}
            onChange={setDone}
            id={`isDone_${item.id}`}
          />
          <label className="form-check-label" htmlFor={`isDone_${item.id}`}>
            Done
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={item.status === TodoStatus.OnHold}
            disabled={item.status === TodoStatus.Done}
            onChange={setOnHold}
            id={`onHold_${item.id}`}
          />
          <label className="form-check-label" htmlFor={`onHold_${item.id}`}>
            onHold
          </label>
        </div>
      </div>
      {isStatusModalVisible && (
        <ConfirmationModal
          modalId={"doneModal"}
          title={"Confirmation modal"}
          message="Are you sure you want to mark this as todo?"
          onConfirm={onConfirm}
          onReject={onReject}
          setModalVisible={setIsStatusModalVisible}
        />
      )}
    </div>
  );
}
