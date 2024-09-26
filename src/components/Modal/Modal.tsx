import { forwardRef, useEffect, useImperativeHandle } from "react";
import { Modal as BootstrapModal } from "bootstrap";

type Props = {
  children: React.ReactNode;
  modalId: string;
  title: string;
  setModalVisible: (status: boolean) => void;
};

export type ModalHandle = {
  hideModal: () => void;
};
export const Modal = forwardRef<ModalHandle, Props>(function Modal(
  { children, modalId, title, setModalVisible }: Props,
  ref,
) {
  let modal: BootstrapModal;

  useEffect(() => {
    modal = new window.bootstrap.Modal(`#${modalId}`, {
      keyboard: false,
    });
    modal.show();

    return () => {
      modal && modal.hide();
    };
  }, []);

  useImperativeHandle(ref, () => {
    return {
      hideModal() {
        hideModal();
      },
    };
  }, []);

  function hideModal() {
    if (modal) {
      modal.hide();
      setModalVisible(false);
    }
  }

  return (
    <div id={modalId} className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={hideModal}
            ></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
});
