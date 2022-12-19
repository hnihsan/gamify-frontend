import React from "react";

interface modalProp {
  onSubmit: () => void;
}

export const PromptFinishQuiz = ({ onSubmit }: modalProp) => {
  return (
    <div
      className="modal"
      tabIndex={-1}
      role="dialog"
      id="promptIsFinishedModal"
    >
      <div className="modal-dialog vertically-middle" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            <h3>Finish the Quiz?</h3>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <b>No, not yet!</b>
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => onSubmit()}
            >
              <b>Yes, submit my answers!</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
