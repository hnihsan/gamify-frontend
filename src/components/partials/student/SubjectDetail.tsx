import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Challenge } from "../../../models/Challenge";
// @ts-ignore
import achv_1 from "~/src/assets/media/achievements/badge1.png";
import { getChallenges } from "../../../services/GetChallenges";
import { ChallengeItem } from "./SubjectDetailPart/ChallengeItem";
import { UserSubject } from "../../../models/UserSubject";
import { getUserSubject } from "../../../services/GetUserSubject";
import { NoChallenge } from "./SubjectDetailPart/NoChallenge";
import Loading from "../shared/LoadingComponent";
import Cookies from "js-cookie";
import { AttemptHistoriesModal } from "./modals/SubjectDetailPartials/AttemptHistories";
import { UserAttempt } from "../../../models/UserAttempt";

const SubjectDetail = () => {
  const { userSubjectId } = useParams();
  const [challenges, setChallenges] = useState<Array<Challenge>>([]);
  const [userSubject, setUserSubject] = useState<UserSubject>(
    new UserSubject({})
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingChallenge, setLoadingChallenge] = useState<boolean>(true);
  const [activeAchievement, setActiveAchievement] = useState<string>("");
  const [selectedUserAttempts, setSelectedUserAttempts] = useState<
    Array<UserAttempt>
  >([]);
  const [selectedChallengeTitle, setSelectedChallengeTitle] =
    useState<string>("");
  const getUserId = () => Cookies.get("userId");

  useEffect(() => {
    const fetchUserSubject = async () => {
      if (typeof userSubjectId == "string") {
        let usub = await getUserSubject(userSubjectId);
        setUserSubject(usub);
        if (usub.subject.achievements.length > 0)
          setActiveAchievement(usub.subject.achievements[0]._id);
        setLoading(false);
      }
    };

    fetchUserSubject();
  }, []);

  useEffect(() => {
    const fetchChallenges = async () => {
      let chs = await getChallenges(userSubject.subjectId, getUserId());
      setChallenges(chs);
    };

    fetchChallenges();
  }, [userSubject]);

  useEffect(() => {
    if (userSubject._id != undefined) setLoadingChallenge(false);
  }, [challenges]);

  return (
    <>
      {/*begin::Content*/}
      <div
        className="content d-flex flex-column flex-column-fluid content-bg"
        id="kt_content"
      >
        {/*begin::Container*/}
        <div
          id="kt_content_container"
          className="row container-fluid mt-4 mb-4"
        >
          <div className="col-12">
            <ul className="nav nav-tabs nav-pills flex-row border-0 me-5 mb-3 mb-md-0 fs-6">
              <li className="nav-item me-0 mb-md-2 col-6 w-50">
                <a
                  className="nav-link btn btn-flex btn-active-light-success active w-100"
                  data-bs-toggle="tab"
                  href="#challenges_tab"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen001.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-primary me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.0079 2.6L15.7079 7.2L21.0079 8.4C21.9079 8.6 22.3079 9.7 21.7079 10.4L18.1079 14.4L18.6079 19.8C18.7079 20.7 17.7079 21.4 16.9079 21L12.0079 18.8L7.10785 21C6.20785 21.4 5.30786 20.7 5.40786 19.8L5.90786 14.4L2.30785 10.4C1.70785 9.7 2.00786 8.6 3.00786 8.4L8.30785 7.2L11.0079 2.6C11.3079 1.8 12.5079 1.8 13.0079 2.6Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  <span className="d-flex flex-column align-items-start">
                    <span className="fs-4 fw-bolder">Challenges</span>
                    <span className="fs-7">
                      Increase your knowledge by completing the Challenges
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item me-0 mb-md-2 col-6 w-50">
                <a
                  className="nav-link btn btn-flex btn-active-light-info w-100"
                  data-bs-toggle="tab"
                  href="#lessons_tab"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen003.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.0079 2.6L15.7079 7.2L21.0079 8.4C21.9079 8.6 22.3079 9.7 21.7079 10.4L18.1079 14.4L18.6079 19.8C18.7079 20.7 17.7079 21.4 16.9079 21L12.0079 18.8L7.10785 21C6.20785 21.4 5.30786 20.7 5.40786 19.8L5.90786 14.4L2.30785 10.4C1.70785 9.7 2.00786 8.6 3.00786 8.4L8.30785 7.2L11.0079 2.6C11.3079 1.8 12.5079 1.8 13.0079 2.6Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  <span className="d-flex flex-column align-items-start">
                    <span className="fs-4 fw-bolder">Lessons</span>
                    <span className="fs-7">Learn about the subject</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="challenges_tab">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="row">
                    {loading ? (
                      <></>
                    ) : (
                      <div className="col-12">
                        <div className="card card-border-square card-flush">
                          <div className="card-body d-flex justify-content-center">
                            <h1>{userSubject.subject.title}</h1>
                          </div>
                        </div>
                      </div>
                    )}
                    {loadingChallenge ? (
                      <div className="col-12">
                        <div className="card card-border-square card-flush">
                          <div className="card-body d-flex justify-content-center">
                            <Loading />
                          </div>
                        </div>
                      </div>
                    ) : challenges.length == 0 ? (
                      <NoChallenge />
                    ) : (
                      challenges.map((ch) => {
                        return (
                          <div key={ch._id}>
                            <ChallengeItem
                              challenge={ch}
                              completedChallenges={
                                userSubject.completedChallengeCodes
                              }
                              onSeeHistory={() => {
                                setSelectedUserAttempts(ch.userAttempts);
                                setSelectedChallengeTitle(ch.title);
                              }}
                            />
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="row">
                    <div className="col-12 mb-2">
                      {loading ? (
                        <></>
                      ) : (
                        <>
                          <div className="d-flex align-items-center flex-column mt-3 w-100">
                            <h2>Challenges Progress</h2>
                            <div className="h-8px mx-3 w-100 bg-light-success rounded">
                              <div
                                className="bg-success rounded h-8px"
                                role="progressbar"
                                style={{
                                  width: `${
                                    (userSubject.finishedChallengesCount /
                                      userSubject.subject.challengeCount) *
                                    100
                                  }%`,
                                }}
                                aria-valuenow={
                                  (userSubject.finishedChallengesCount /
                                    userSubject.subject.challengeCount) *
                                  100
                                }
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                            <div className="d-flex justify-content-between w-100 mt-2 mb-2">
                              <span className="fw-light fs-6 text-gray-400">
                                ({userSubject.finishedChallengesCount} /{" "}
                                {userSubject.subject.challengeCount} challenges
                                completed)
                              </span>
                              <span className="fw-boldest fs-6 text-dark">
                                {(userSubject.finishedChallengesCount /
                                  userSubject.subject.challengeCount) *
                                  100}
                                %
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-12 mb-2">
                      {loading ? (
                        <></>
                      ) : (
                        <>
                          <div className="d-flex align-items-center flex-column mt-3 w-100">
                            <h2>Achievements</h2>
                            <div className="tab-content">
                              {/*begin::Tap pane*/}
                              {userSubject.subject.achievements.map(
                                (ach, index) => {
                                  return (
                                    <div
                                      key={ach._id}
                                      className={
                                        "tab-pane fade " +
                                        (activeAchievement == ach._id
                                          ? "active show"
                                          : "")
                                      }
                                      id={ach._id}
                                    >
                                      <div className="card card-flush">
                                        <div className="card-body d-flex justify-content-sm-between align-items-center">
                                          <div className="d-flex flex-column col-12">
                                            <div className="symbol symbol-100px symbol-fixed text-center mb-4">
                                              <img
                                                src={ach.image}
                                                alt={ach.title}
                                              />
                                            </div>
                                            <h4>{ach.title}</h4>
                                            <p>{ach.description}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                              {/*end::Tap pane*/}
                            </div>
                            <ul className="nav nav-pills nav-pills-custom mb-3">
                              {userSubject.subject.achievements.map(
                                (ach, index) => {
                                  return (
                                    <li
                                      key={index.toString()}
                                      className="nav-item mb-3 me-3"
                                    >
                                      <a
                                        className={
                                          "nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 " +
                                          (activeAchievement == ach._id
                                            ? "active"
                                            : "")
                                        }
                                        data-bs-toggle="pill"
                                        onClick={() =>
                                          setActiveAchievement(ach._id)
                                        }
                                      >
                                        <div className="nav-icon">
                                          <img
                                            src={ach.image}
                                            alt={ach.title}
                                          />
                                          {/* <div className="symbol symbol-35px symbol-circle nav-icon">
                                    <span className="symbol-label bg-gray-700 text-inverse-dark fw-bolder">
                                      ?
                                    </span>
                                  </div> */}
                                        </div>
                                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-12 mb-2">
                      <div className="d-flex align-items-center flex-column mt-3 w-100">
                        <h4 className="card-title fw-bolder text-">
                          Share your Journey
                        </h4>
                      </div>
                      <div className="mt-3 w-100 text-center">
                        <div className="flex-column">
                          <a href="#" className="me-6">
                            <img
                              src={achv_1}
                              alt="image"
                              className="h-40px me-2"
                            />
                          </a>
                          <a href="#" className="me-6">
                            <img
                              src={achv_1}
                              alt="image"
                              className="h-40px me-2"
                            />
                          </a>
                          <a href="#" className="me-6">
                            <img
                              src={achv_1}
                              alt="image"
                              className="h-40px me-2"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="lessons_tab">
              <div className="col-12 card card-border-square card-flush">
                <div className="card-body">
                  {loading ? (
                    <h1>Loading .. </h1>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: userSubject.subject.lessons,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Content*/}
      <AttemptHistoriesModal
        userAttempts={selectedUserAttempts}
        challengeTitle={selectedChallengeTitle}
      />
    </>
  );
};

export default SubjectDetail;
