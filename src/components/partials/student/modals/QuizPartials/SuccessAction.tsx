import React from "react"; // @ts-ignore
import success from "~/src/assets/icons/success.png";

interface modalProp {
  show: boolean;
  message: string;
}

export const SuccessActionModal = ({ message, show }: modalProp) => {
  return (
    <div
      className={"modal " + (show ? "fade show" : "")}
      tabIndex={-1}
      role="dialog"
      id="successActionModal"
    >
      <div className="modal-dialog vertically-middle" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            <img src={success} style={{ maxHeight: "200px" }} />
            <p className="fs-2x fs-bold">{message}</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              <b>Okay!</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
