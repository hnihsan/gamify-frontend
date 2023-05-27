import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Challenge } from "../../../models/Challenge";
import { getChallenges } from "../../../services/GetChallenges";
import { ChallengeItem } from "./SubjectDetailPart/ChallengeItem";
import { UserSubject } from "../../../models/UserSubject";
import { getUserSubject } from "../../../services/GetUserSubject";
import { NoChallenge } from "./SubjectDetailPart/NoChallenge";
import Loading from "../shared/LoadingComponent";
import Cookies from "js-cookie";
import { AttemptHistoriesModal } from "./modals/SubjectDetailPartials/AttemptHistories";
import { UserAttempt } from "../../../models/UserAttempt";
import {
  AchievementsIconLibrary,
  GetAchievementThumbnail,
} from "../../../lib/Tools";
import { SubjectDetailIntroductionModal } from "./modals/QuizPartials/SubjectDetailIntroduction";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png";

class Props {
  onNavigateFn: () => void;
}

const SubjectDetail = ({ onNavigateFn }: Props) => {
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

  const [showIntro, setShowIntro] = useState<boolean>(true);
  const getPopupStatus = () => Cookies.get("popupSubjectDetail") == "true";
  const dontShowIntro = () => {
    setShowIntro(false);
    Cookies.set("popupSubjectDetail", false);
  };

  useEffect(() => {
    onNavigateFn();
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

  const fetchChallenges = async () => {
    let chs = await getChallenges(userSubject.subjectId, getUserId());
    setChallenges(chs);
  };

  useEffect(() => {
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
                  className="nav-link btn gamphy-mainbg active w-100 text-center"
                  data-bs-toggle="tab"
                  href="#challenges_tab"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen001.svg*/}
                  <i className="bi-pencil-fill"></i>
                  <br className="br-nav" />
                  <span className="fs-4 fw-bolder">&nbsp;Challenges</span>
                </a>
              </li>
              <li className="nav-item me-0 mb-md-2 col-6 w-50">
                <a
                  className="nav-link btn gamphy-mainbg w-100"
                  data-bs-toggle="tab"
                  href="#lessons_tab"
                >
                  <i className="bi-book-fill"></i>
                  <br className="br-nav" />
                  <span className="fs-4 fw-bolder">&nbsp;Pembelajaran</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="challenges_tab">
              <div className="row">
                <div className="col-md-12 col-lg-8 mb-4">
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
                      <NoChallenge onReloadFn={() => fetchChallenges()} />
                    ) : (
                      challenges
                        .sort((a, b) => (a.order > b.order ? 1 : -1))
                        .map((ch) => {
                          return (
                            <div key={ch._id}>
                              <ChallengeItem
                                challenge={ch}
                                userSubjectId={userSubject._id}
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
                  <div className="card card-flush gamphy-secondbg">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 mb-2">
                          {loading ? (
                            <></>
                          ) : (
                            <div className="d-flex align-items-center flex-column mt-3 w-100">
                              <h2>Challenges Progress</h2>
                              <img
                                src={leaderboard_frame}
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                              <div className="h-8px mx-3 w-100 gamphy-mainbg-light rounded">
                                <div
                                  className="gamphy-mainbg rounded h-8px"
                                  role="progressbar"
                                  style={{
                                    width: `${
                                      (userSubject.completedChallengeCodes
                                        .length /
                                        userSubject.subject.challengeCount) *
                                      100
                                    }%`,
                                  }}
                                  aria-valuenow={
                                    (userSubject.completedChallengeCodes
                                      .length /
                                      userSubject.subject.challengeCount) *
                                    100
                                  }
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                              <div className="d-flex justify-content-between w-100 mt-2 mb-2">
                                <span className="fw-bolder fs-6 text-white">
                                  ({userSubject.completedChallengeCodes.length}{" "}
                                  / {userSubject.subject.challengeCount}{" "}
                                  challenges completed)
                                </span>
                                <span className="fw-boldest fs-6 text-dark">
                                  {(
                                    (userSubject.completedChallengeCodes
                                      .length /
                                      userSubject.subject.challengeCount) *
                                    100
                                  ).toFixed(0)}
                                  %
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {userSubject.subject?.achievements.length > 0 ? (
                    <div className="card card-flush gamphy-secondbg">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 mb-2">
                            {loading ? (
                              <></>
                            ) : (
                              <div className="d-flex align-items-center flex-column mt-3 w-100">
                                <h2>Achievements</h2>
                                <img
                                  src={leaderboard_frame}
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
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
                                          <div className="card card-flush gamphy-secondbg-light">
                                            <div className="card-body d-flex justify-content-sm-between align-items-center">
                                              <div className="d-flex flex-column col-12">
                                                <div className="symbol symbol-175px symbol-fixed text-center mb-4">
                                                  <img
                                                    src={GetAchievementThumbnail(
                                                      userSubject.completedChallengeCodes,
                                                      ach.code
                                                    )}
                                                    alt={ach.title}
                                                  />
                                                </div>
                                                <h4>{ach.title}</h4>
                                                <div
                                                  dangerouslySetInnerHTML={{
                                                    __html: ach.description,
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                  {/*end::Tap pane*/}
                                </div>
                                <ul className="nav nav-pills nav-pills-custom my-3">
                                  {userSubject.subject.achievements.map(
                                    (ach, index) => {
                                      return (
                                        <li
                                          key={index.toString()}
                                          className="nav-item mb-3 me-3"
                                        >
                                          <a
                                            className={
                                              "nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 gamphy-secondbg-light border-solid hover-pointer " +
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
                                                src={GetAchievementThumbnail(
                                                  userSubject.completedChallengeCodes,
                                                  ach.code
                                                )}
                                                alt={ach.title}
                                                style={{ width: "65px" }}
                                              />
                                            </div>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                          </a>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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
      {showIntro && getPopupStatus() ? (
        <SubjectDetailIntroductionModal
          onDismissButton={() => setShowIntro(false)}
          onDontShowButton={() => dontShowIntro()}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SubjectDetail;
