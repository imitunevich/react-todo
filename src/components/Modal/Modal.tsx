import { useEffect } from "react";
import { Modal as BootstrapModal } from "bootstrap";

type Props = {
  modalId: string;
  title: string;
  message: string;
  onConfirm: () => void;
  onReject: () => void;
};
export function Modal({ modalId, title, message, onConfirm, onReject }: Props) {
  let modal: BootstrapModal;

  useEffect(() => {
    modal = new window.bootstrap.Modal(`#${modalId}`, {
      keyboard: false,
    });
    modal.show();

    return () => {
      hideModal();
    };
  }, []);

  function hideModal() {
    modal && modal.hide();
  }

  function onCloseClick() {
    onReject();
    hideModal();
  }

  function onOkClick() {
    onConfirm();
    hideModal();
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
              onClick={onCloseClick}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCloseClick}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOkClick}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
