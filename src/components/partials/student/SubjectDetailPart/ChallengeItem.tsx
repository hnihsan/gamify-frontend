import React, { useEffect, useState } from "react";
import { Challenge } from "../../../../models/Challenge";
import { Link } from "react-router-dom";
class ChallengeItemProp {
  challenge: Challenge;
}

export const ChallengeItem = (props: ChallengeItemProp) => {
  const [challenge, setChallenge] = useState<Challenge>(props.challenge);
  const [badgeStyle, setBadgeStyle] = useState<string>("badge-light-success");

  useEffect(() => {
    switch (challenge.difficulty) {
      case "Easy":
        setBadgeStyle("badge-light-success");
        break;
      case "Intermediate":
        setBadgeStyle("badge-light-warning");
        break;
      case "Hard":
        setBadgeStyle("badge-light-danger");
        break;
    }
  });
  return (
    <div className="col-12">
      <div className="card card-border-square card-flush">
        <div className="card-body d-flex justify-content-sm-between align-items-center">
          <div className="d-flex flex-column col-8">
            <h1>{challenge.title}</h1>
            <div className="d-flex d-inline-block justify-content-sm-between">
              <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                Passing Score:{" "}
                <span className="text-dark fw-bold fs-7 d-block text-start ps-0">
                  {challenge.passingScore}
                </span>
              </span>
              <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                Attempt:{" "}
                <span className="text-dark fw-bold fs-7 d-block text-start ps-0">
                  {challenge.attemptLimit}
                </span>
              </span>
              <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
                Difficulty:{" "}
                <span className={"d-block badge " + badgeStyle}>
                  {challenge.difficulty}
                </span>
              </span>
            </div>
          </div>
          <div className="d-flex flex-column col-auto">
            <Link
              to={`/Quiz/${challenge.subjectId}/${challenge._id}`}
              className="btn btn-sm btn-primary"
            >
              Solve
            </Link>
            {/* Solved <i className="bi bi-check2-circle"></i>             */}
          </div>
        </div>
      </div>
    </div>
  );
};
