import React, { useEffect, useState } from "react";
import { UserSubject } from "../../../../models/UserSubject";
import { Link } from "react-router-dom";
import { Subject } from "../../../../models/Subject";
import Loading from "../../shared/LoadingComponent";
import { getSubject } from "../../../../services/GetSubject";
class SubjectItemProp {
  userSubject: UserSubject;
  subject: Subject;
}

export const SubjectItem = (props: SubjectItemProp) => {
  const [userSubject, setUserSubject] = useState<UserSubject>(
    props.userSubject
  );

  const [subject, setSubject] = useState<Subject>(props.subject);

  return (
    <div>
      <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        <div className="card card-flush card-subjects">
          <div className="card-header pt-5">
            <div className="card-title d-flex flex-column">
              {/* Title Section */}
              <span className="fs-2hx fw-bolder text-dark me-2 lh-1">
                {subject.title}
              </span>
              <span className="text-gray-400 pt-1 fw-bold fs-6">
                {subject.creator}
              </span>
            </div>
          </div>
          {/* Body Section */}
          <div className="card-body d-flex flex-column justify-content-end pt-0">
            {/*begin::Progress*/}
            <div className="d-flex align-items-center flex-column mt-3 w-100">
              <div className="h-8px mx-3 w-100 bg-light-success rounded">
                <div
                  className="bg-success rounded h-8px"
                  role="progressbar"
                  style={{
                    width:
                      (userSubject.finishedChallengesCount /
                        subject.challengeCount) *
                        100 +
                      "%",
                  }}
                  aria-valuenow={
                    (userSubject.finishedChallengesCount /
                      subject.challengeCount) *
                    100
                  }
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="d-flex justify-content-between w-100 mt-2 mb-2">
                <span className="fw-light fs-6 text-gray-400">
                  ({userSubject.finishedChallengesCount} /{" "}
                  {subject.challengeCount} challenges completed)
                </span>
                <span className="fw-boldest fs-6 text-dark">
                  {(userSubject.finishedChallengesCount /
                    subject.challengeCount) *
                    100}
                  %
                </span>
              </div>
            </div>
            {/*end::Progress*/}
            {/*begin::Title*/}
            <span className="fs-6 fw-boldest text-gray-800 d-block mb-2">
              Available Achievements
            </span>
            {/*end::Title*/}
            {/*begin::Achievement group*/}
            <div className="symbol-group symbol-hover">
              {subject.achievements.slice(0, 5).map((ach) => {
                return (
                  <div
                    key={ach._id}
                    className="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    title={ach.title}
                  >
                    <img alt={ach.title} src={ach.image} />
                  </div>
                );
              })}
              {subject.achievements.length - 5 > 0 ? (
                <>
                  <a href="#" className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-gray-900 text-gray-300 fs-8 fw-bolder">
                      +{subject.achievements.length - 5}
                    </span>
                  </a>
                </>
              ) : (
                <></>
              )}
            </div>
            {/*end::Users group*/}
            <div className="d-flex flex-column mt-3 w-100">
              <Link
                to={`/SubjectDetail/${userSubject._id}`}
                className="btn btn-success btn-lg"
              >
                {userSubject.finishedChallengesCount > 0
                  ? "Continue Subject"
                  : "Start Subject"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
