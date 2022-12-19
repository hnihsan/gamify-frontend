import React from "react";

interface modalProp {
  onNotReady: () => void;
  onStartChallenge: () => void;
}

export const PromptStartChallenge = ({
  onNotReady,
  onStartChallenge,
}: modalProp) => {
  return (
    <>
      <div style={{ zIndex: 109 }} className="drawer-overlay"></div>
      <div
        className="modal fade show"
        id="promptStartChallenge"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "block", zIndex: 110 }}
        aria-modal="true"
        role={"dialog"}
      >
        <div className="modal-dialog vertically-middle" role="document">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Start the Challenge?</h3>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onNotReady()}
              >
                <b>No, Go back!</b>
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => onStartChallenge()}
              >
                <b>Yes, let's Start!</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
