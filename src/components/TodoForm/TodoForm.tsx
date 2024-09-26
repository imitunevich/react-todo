import { TodoCategory, TodoItem, TodoStatus } from "../../todo-types";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoApi } from "../../api/TodoApi";

const SELECT_CATEGORY = "Select category";

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
      name: "",
      content: "",
      status: TodoStatus.Todo,
      categoryId: "",
    },
  });

  const navigate = useNavigate();
  const [categories, setCategories] = useState<TodoCategory[]>([]);

  useEffect(() => {
    reset();
    TodoApi.getCategories().then((data: TodoCategory[]) => {
      setCategories(data);
    });
  }, [isSubmitSuccessful]);

  const submitForm = handleSubmit(async (formData) => {
    await onSubmit({ ...formData });
    navigate("/todos");
  });

  return (
    <div className={"container"}>
      <form onSubmit={submitForm}>
        <div className={"row"}>
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
          <div className={"mb-2"}>
            <label>Category</label>
            <select
              className="form-select"
              {...register("categoryId", { required: true })}
            >
              <option value={SELECT_CATEGORY}>{SELECT_CATEGORY}</option>
              {categories.map((category: TodoCategory) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId?.type === "required" && (
              <p role="alert">Category is required</p>
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
