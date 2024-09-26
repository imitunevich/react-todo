import { Modal, ModalHandle } from "../Modal/Modal";
import { useRef } from "react";
import { TodoCategory, TodoItem } from "../../todo-types";
import { useForm } from "react-hook-form";

type Props = {
  modalId: string;
  title: string;
  onSubmit: (category: TodoCategory) => void;
  setModalVisible: (status: boolean) => void;
};
export function CategoryModal({
  modalId,
  title,
  onSubmit,
  setModalVisible,
}: Props) {
  const modalRef = useRef<ModalHandle>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      name: "",
    },
  });

  const submitForm = handleSubmit(async (formData) => {
    await onSubmit({ ...formData });
    modalRef.current?.hideModal();
  });
  return (
    <Modal
      modalId={modalId}
      title={title}
      setModalVisible={setModalVisible}
      ref={modalRef}
    >
      <div className="modal-body">
        <form id="addCategoryForm" onSubmit={submitForm}>
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
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          className={"btn btn-primary w-auto ms-2"}
          type="submit"
          form="addCategoryForm"
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}
