import React from "react";
import { UserAttempt } from "../../../../../models/UserAttempt";

interface modalProp {
  userAttempts: Array<UserAttempt>;
  challengeTitle: string;
}

const FormatDuration = (duration: number) => {
  const HourSeconds = 3600;
  const MinuteSeconds = 60;

  let HourCount = Math.floor(duration / HourSeconds);
  let MinutesCount = Math.floor((duration % HourSeconds) / MinuteSeconds);
  let SecondsLeft =
    duration - HourCount * HourSeconds - MinutesCount * MinuteSeconds;

  return (
    (HourCount < 10 ? "0" + HourCount : HourCount) +
    ":" +
    (MinutesCount < 10 ? "0" + MinutesCount : MinutesCount) +
    ":" +
    (SecondsLeft < 10 ? "0" + SecondsLeft : SecondsLeft)
  );
};

export const AttemptHistoriesModal = ({
  userAttempts,
  challengeTitle,
}: modalProp) => {
  return (
    <div
      className="modal"
      tabIndex={-1}
      role="dialog"
      id="challengeAttemptHistoriesModal"
    >
      <div className="modal-dialog vertically-middle" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            <p>List attempts of</p>
            <h3>{challengeTitle}</h3>
            <div className="row mh-500px overflow-auto">
              {userAttempts.length > 0 ? (
                <>
                  {userAttempts.map((ua) => {
                    return (
                      <div key={ua._id.toString()} className="col-12">
                        <div className="card card-border-square card-flush">
                          <div className="card-body d-flex justify-content-sm-between align-items-center">
                            <div className="d-flex flex-column col-12">
                              <div className="d-flex d-inline-block justify-content-sm-between">
                                <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                                  Score:{" "}
                                  <span className="text-dark fw-bold fs-7 d-block text-start ps-0">
                                    {ua.score}
                                  </span>
                                </span>
                                <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                                  Duration:{" "}
                                  <span className="text-dark fw-bold fs-7 d-block text-start ps-0">
                                    {FormatDuration(ua.duration)}
                                  </span>
                                </span>
                                <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                                  Completed at:{" "}
                                  <span className="text-dark fw-bold fs-7 d-block text-start ps-0">
                                    {ua.createdAt.toString()}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="col-12">
                  <div className="card card-border-square card-flush">
                    <div className="card-body d-flex justify-content-sm-between align-items-center">
                      <div className="d-flex flex-column col-12">
                        <div className="d-flex d-inline-block justify-content-sm-between">
                          <h4>No attempt taken yet.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-info"
              data-bs-dismiss="modal"
            >
              <b>Okay</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
