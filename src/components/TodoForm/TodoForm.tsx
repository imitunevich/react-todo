import { TodoItem } from "../../todo-types";
import { ChangeEvent, useState } from "react";

type Props = {
  item?: TodoItem;
  onSubmit: (item: TodoItem) => void;
};

export function TodoForm({ item, onSubmit }: Props) {
  const [formData, setFormData] = useState<TodoItem>(
    item || { id: Date.now(), name: "", content: "", isDone: false },
  );

  function setValue(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitForm() {
    onSubmit({ ...formData, id: Date.now() });

    //clear form;
    setFormData({ id: Date.now(), name: "", content: "", isDone: false });
  }

  return (
    <div className={"container"}>
      <div className={"row"}>
        <h2>Add Todo here:</h2>

        <div className={"mb-2"}>
          <label>Name:</label>
          <input
            className={"form-control"}
            type={"text"}
            name={"name"}
            value={formData.name}
            onChange={setValue}
          />
        </div>

        <div className={"mb-2"}>
          <label>Content:</label>
          <textarea
            className={"form-control"}
            name={"content"}
            value={formData.content}
            onChange={setValue}
          ></textarea>
        </div>

        <button className={"btn btn-primary w-auto ms-2"} onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
}
