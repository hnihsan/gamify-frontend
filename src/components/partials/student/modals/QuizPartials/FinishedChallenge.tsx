import React from "react";
// @ts-ignore
import winner from "~src/assets/media/illstrations/7.png"; // @ts-ignore
import loser from "~src/assets/media/illstrations/9.png"; // @ts-ignore
import { AchievementsIconLibrary } from "../../../../../lib/Tools";
import { Achievement } from "../../../../../models/Achievement";
const winnerBgImage = {
  backgroundImage: "url(" + winner + ")",
};

const loserBgImage = {
  backgroundImage: "url(" + loser + ")",
};

interface modalProp {
  onContinue: () => void;
  score: number;
  isPassed: boolean;
  challengeCode: string;
  achievement: Achievement;
}

const ModalFinishedChallenge = ({
  onContinue,
  score,
  isPassed,
  challengeCode,
  achievement,
}: modalProp) => {
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
                  style={isPassed ? winnerBgImage : loserBgImage}
                ></div>
                <h1 className="fw-bold fs-1qx text-gray-800">Skor:</h1>
                <h1
                  className={
                    "fw-bolder fs-3qx " +
                    (isPassed ? "text-success" : "text-danger")
                  }
                >
                  {score.toFixed(0)}
                </h1>
                <div className="fw-lighter fs-3">
                  {isPassed ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: achievement.successMessage,
                      }}
                    ></div>
                  ) : (
                    "Yah, sayang sekali kamu belum mencapai skor minimal. Yuk coba lagi!"
                  )}
                </div>
                {/*begin::Action*/}
                {AchievementsIconLibrary[challengeCode] && isPassed ? (
                  <>
                    <div className="text-gray-700 fw-bold fs-4 pt-7">
                      Achievement yang terbuka:
                    </div>
                    <div className="text-primary fs-3 fw-bolder mb-4">
                      {achievement.title}
                    </div>
                    <div className="symbol symbol-100px symbol-fixed text-center">
                      <img src={AchievementsIconLibrary[challengeCode]} />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/*end::Action*/}
              </div>
              <div className="d-flex flex-center flex-row-fluid ">
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
