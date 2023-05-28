import React, { useEffect, useState } from "react";
import { Challenge } from "../../../../models/Challenge";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// @ts-ignore
import lock from "~/src/assets/icons/lock.png";
class ChallengeItemProp {
  challenge: Challenge;
  completedChallenges: Array<string> = [];
  userSubjectId: string;
  onSeeHistory: () => void;
}

export const ChallengeItem = (props: ChallengeItemProp) => {
  const [challenge, setChallenge] = useState<Challenge>(props.challenge);
  const [badgeStyle, setBadgeStyle] = useState<string>("badge-light-success");
  const [badgeLabel, setBadgeLabel] = useState<string>("Memuat..");
  const [attemptLeft, setAttemptLeft] = useState<number>(0);
  const getIsQa = () => {
    var str = Cookies.get("1ff6a62379dcf46ec91fd65451a959fc");
    return str == "cebf9416c97f4808312f215c569c73c4";
  };

  const OverlayBlockingComponent = (
    reqCode: string,
    codes: Array<string> = []
  ) => {
    if (getIsQa()) return;

    if (reqCode) {
      if (!codes.includes(reqCode)) {
        return (
          <div className="overlay-blocking">
            <img src={lock} />
          </div>
        );
      }
    }

    return <></>;
  };

  useEffect(() => {
    switch (challenge.difficulty) {
      case "Easy":
        setBadgeStyle("badge-light-success");
        setBadgeLabel("Easy");
        break;
      case "Intermediate":
        setBadgeStyle("badge-light-warning");
        setBadgeLabel("Medium");
        break;
      case "Hard":
        setBadgeStyle("badge-light-danger");
        setBadgeLabel("Hard");
        break;
      default:
        setBadgeStyle("badge-light-info");
        setBadgeLabel("Lainnya");
    }

    setAttemptLeft(challenge.attemptLimit - challenge.attemptsCount);
  }, []);

  return (
    <div className="col-12 p-relative">
      {OverlayBlockingComponent(
        challenge.requiredChallengeCode,
        props.completedChallenges
      )}
      <div className="card card-border-square card-flush">
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <h1>{challenge.title}</h1>
            </div>
            <div className="col-md-3 col-4 text-center mb-4">
              <span className="text-gray-400 fw-bolder fs-7 d-block ps-0">
                Nilai Kelulusan:{" "}
                <span className="text-dark fw-bolder fs-1 d-block ps-0">
                  {challenge.passingScore}
                </span>
              </span>
            </div>
            <div className="col-md-3 col-4 text-center mb-4">
              <span className="text-gray-400 fw-bold fs-7 d-block ps-0">
                Tingkat Kesulitan:{" "}
                <span className={"d-block badge fs-4 " + badgeStyle}>
                  {badgeLabel}
                </span>
              </span>
            </div>
            <div className="col-md-3 col-4 text-center my-auto">
              {challenge.attemptsCount > 0 ? (
                <span className="text-gray-400 fw-bolder fs-7 d-block ps-0">
                  Skor Tertinggi Anda:{" "}
                  <span
                    className={
                      "d-block success fs-1 fw-bolder " +
                      (challenge.playerHighscore < challenge.passingScore
                        ? "text-danger"
                        : "text-success")
                    }
                  >
                    {challenge.playerHighscore.toFixed(0)}
                  </span>
                </span>
              ) : (
                <span className="text-gray-400 fw-bolder fs-4 d-block ps-0">
                  Belum dikerjakan
                </span>
              )}
            </div>
            <div className="col-md-3 col-12 text-center my-auto">
              <Link
                to={`/Quiz/${props.userSubjectId}/${challenge.subjectId}/${challenge._id}`}
                className="btn btn-sm btn-primary mb-2 w-100"
              >
                Kerjakan
              </Link>
              {challenge.attemptsCount > 0 ? (
                <a
                  className="btn btn-secondary btn-sm mb-2 w-100"
                  data-bs-toggle="modal"
                  href="#challengeAttemptHistoriesModal"
                  onClick={() => props.onSeeHistory()}
                >
                  Lihat Histori Pengerjaan
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
