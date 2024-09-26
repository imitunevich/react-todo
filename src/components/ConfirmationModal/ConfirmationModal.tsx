import { Modal, ModalHandle } from "../Modal/Modal";
import { useRef } from "react";

type Props = {
  modalId: string;
  title: string;
  message: string;
  onConfirm: () => void;
  onReject: () => void;
  setModalVisible: (status: boolean) => void;
};
export function ConfirmationModal({
  modalId,
  title,
  message,
  onConfirm,
  onReject,
  setModalVisible,
}: Props) {
  const modalRef = useRef<ModalHandle>(null);

  function onCloseClick() {
    onReject();
    modalRef.current?.hideModal();
  }

  function onOkClick() {
    onConfirm();
    modalRef.current?.hideModal();
  }
  return (
    <Modal
      modalId={modalId}
      title={title}
      setModalVisible={setModalVisible}
      ref={modalRef}
    >
      <div className="modal-body">
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={onOkClick}>
          Yes
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={onCloseClick}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
