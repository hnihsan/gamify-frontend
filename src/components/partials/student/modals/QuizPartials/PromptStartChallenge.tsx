import React from "react";

interface modalProp {
  onNotReady: () => void;
  onStartChallenge: () => void;
  isEligible: boolean;
}

export const PromptStartChallenge = ({
  onNotReady,
  onStartChallenge,
  isEligible,
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
          {isEligible ? (
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
          ) : (
            <div className="modal-content">
              <div className="modal-body text-center">
                <h3>Memuat ..</h3>
                <p>Mempersiapkan quiz, harap tunggu sebentar!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
