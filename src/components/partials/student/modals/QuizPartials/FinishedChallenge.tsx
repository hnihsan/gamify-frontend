import React from "react";
// @ts-ignore
import winner from "~src/assets/media/illstrations/7.png"; // @ts-ignore
import badge from "~src/assets/media/achievements/badge8.png";
const winnerBgImage = {
  backgroundImage: "url(" + winner + ")",
};

interface modalProp {
  onContinue: () => void;
  score: number;
  isPassed: boolean;
}

const ModalFinishedChallenge = ({ onContinue, score, isPassed }: modalProp) => {
  return (
    <>
      <div style={{ zIndex: 109 }} className="drawer-overlay"></div>
      <div
        className="modal fade show"
        id="finish_quiz_modal"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "block", zIndex: 110 }}
        aria-modal="true"
        role={"dialog"}
      >
        {/*begin::Modal dialog*/}
        <div className="modal-dialog modal-dialog-centered mw-900px">
          {/*begin::Modal content*/}
          <div className="modal-content">
            {/*begin::Modal body*/}
            <div className="modal-body py-lg-10 px-lg-10">
              <div className="d-flex flex-row-fluid flex-column flex-column-fluid text-center p-10">
                {/*begin::Logo*/}
                <div
                  className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-350px"
                  style={winnerBgImage}
                ></div>
                <h1 className="fw-bold fs-1qx text-gray-800">Your score:</h1>
                <h1
                  className={
                    "fw-bolder fs-3qx " +
                    (isPassed ? "text-success" : "text-danger")
                  }
                >
                  {score}
                </h1>

                <div className="fw-bold fs-3 text-muted mb-7">
                  {isPassed
                    ? "Congratulations! You pass this Challenge."
                    : "You can do it better next time!"}
                </div>

                {/*begin::Action*/}
                <div className="text-gray-700 fw-bold fs-4 pt-7">
                  You also achieve a badge for
                </div>
                <div className="text-primary fw-bolder mb-4">
                  Complete the Challenge with a perfect Score
                </div>
                <div className="symbol symbol-100px symbol-fixed text-center mb-4">
                  <img src={badge} />
                </div>
                {/*end::Action*/}
              </div>
              <div className="d-flex flex-center flex-row-fluid pt-12">
                <button
                  onClick={() => onContinue()}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
            {/*end::Modal body*/}
          </div>
          {/*end::Modal content*/}
        </div>
        {/*end::Modal dialog*/}
      </div>
    </>
  );
};

export default ModalFinishedChallenge;
