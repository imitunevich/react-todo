import { TodoItem, TodoStatus } from "../../todo-types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type Props = {
  item?: TodoItem;
  onSubmit: (item: TodoItem) => void;
};

export function TodoForm({ item, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<TodoItem>({
    defaultValues: item || {
      id: Date.now(),
      name: "",
      content: "",
      status: TodoStatus.Todo,
    },
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const submitForm = handleSubmit((formData) =>
    onSubmit({ ...formData, id: Date.now() }),
  );

  return (
    <div className={"container"}>
      <form onSubmit={submitForm}>
        <div className={"row"}>
          <h2>Add Todo here:</h2>

          <div className={"mb-2"}>
            <label>Name:</label>
            <input
              className={"form-control"}
              type={"text"}
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </div>

          <div className={"mb-2"}>
            <label>Content:</label>
            <textarea
              className={"form-control"}
              {...register("content", { required: true })}
            ></textarea>
            {errors.content?.type === "required" && (
              <p role="alert">Content is required</p>
            )}
          </div>

          <button className={"btn btn-primary w-auto ms-2"} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
