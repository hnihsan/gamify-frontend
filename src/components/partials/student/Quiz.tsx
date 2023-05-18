import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { shuffleArray } from "../../../lib/Tools";
import { Quiz } from "../../../models/Quiz";
import {
  CreateInitialUserAttempt_VM,
  SubmitUserAttempt_VM,
} from "../../../models/UserAttempt";
import { getQuizzes } from "../../../services/GetQuizzes";
import Loading from "../shared/LoadingComponent";
import {
  createInitialUserAttempt,
  submitUserAttempt,
} from "../../../services/SubmitUserAttempt";
import ModalFinishedChallenge from "./modals/QuizPartials/FinishedChallenge";
import { PromptFinishQuiz } from "./modals/QuizPartials/PromptFinishQuiz";
import { PromptStartChallenge } from "./modals/QuizPartials/PromptStartChallenge";
import { useNavigate } from "react-router-dom";
import CountDownTimerComponent from "../shared/CountdownComponent";
import { getChallengeById } from "../../../services/GetChallengeById";
import { Challenge } from "../../../models/Challenge";

class AnswerStatus {
  quizId: string;
  answer: Array<number>;
  constructor(quizId: string) {
    this.quizId = quizId;
    this.answer = [];
  }
}

const Quizzes = () => {
  const { challengeId, subjectId } = useParams();
  const [activeQuiz, setActiveQuiz] = useState<string>("");
  const [quizzes, setQuizzes] = useState<Array<Quiz>>([]);
  const [allQuiz, setAllQuiz] = useState<Array<Quiz>>([]);
  const [answers, setAnswers] = useState<Array<AnswerStatus>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<Challenge>(new Challenge({}));
  const [isEligible, setIsEligible] = useState<boolean>(true);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [isChlPassed, setIsChlPassed] = useState<boolean>(false);
  const isSubmitted = useRef(false);

  const navigate = useNavigate();

  const getUserId = () => Cookies.get("userId");
  const getIsQa = () => {
    var str = Cookies.get("isQa");
    return str == "true";
  };
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  const StartQuiz = async () => {
    var vm = new CreateInitialUserAttempt_VM({
      challengeId: challengeId,
      subjectId: subjectId,
      userId: getUserId(),
      score: 0,
      duration: 0,
      code: challenge.code,
      passingGrade: challenge.passingScore,
    });
    var res = await createInitialUserAttempt(vm);
    setAttemptId(res.insertedId);
    setIsStarted(true);
    //delay(challenge.duration * 1000).then(() => SubmitQuiz(res.insertedId));
  };
  const SubmitQuiz = async (attemptId_input: string | null = null) => {
    console.log(
      isSubmitted.current
        ? "Already submitted, not run again"
        : "Not yet submitted, lets go "
    );
    if (isSubmitted.current) return;

    var correctAnswerCount = 0;
    var totalQuiz = quizzes.length;
    answers.forEach((ans) => {
      var quiz = quizzes.filter((q) => q._id == ans.quizId)[0];
      if (quiz.checkAnswer(ans.answer)) correctAnswerCount++;
    });

    console.log("Score: " + correctAnswerCount + "/" + totalQuiz);

    var score = (correctAnswerCount / totalQuiz) * 100;
    setPlayerScore(score);
    let isPlayerPassed = score >= challenge.passingScore;
    setIsChlPassed(isPlayerPassed);
    var vm = new SubmitUserAttempt_VM({
      _id: attemptId_input || attemptId,
      challengeId: challengeId,
      subjectId: subjectId,
      userId: Cookies.get("userId"),
      score: score,
      duration: 245,
      code: challenge.code,
      passingGrade: challenge.passingScore,
    });
    var res = await submitUserAttempt(vm);
    setIsFinished(true);
    isSubmitted.current = true;
  };
  const onAnswerChanged = (e) => {
    let isChecked = e.target.checked;
    let answer = parseInt(e.target.value);
    let quizId = e.target.name;
    setAnswers((current) =>
      current.map((ans) => {
        if (ans.quizId == quizId) {
          if (isChecked) ans.answer = [answer];
          return ans;
        }

        return ans;
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (typeof challengeId == "string") {
        let challenge = await getChallengeById(challengeId, getUserId());
        setChallenge(challenge);
        //let isEligible = challenge.attemptsCount < challenge.attemptLimit;
        setIsEligible(true); // Remove attempt count validation

        let qzs = await getQuizzes(challengeId);
        setAllQuiz(qzs);
        var finalQzs = qzs;
        if (getIsQa()) {
          setQuizzes(qzs);
          if (qzs.length > 0) setActiveQuiz(qzs[0]._id);
        } else {
          let shuffledQzs: Array<Quiz> = shuffleArray(qzs);
          let slicedQzs = shuffledQzs.slice(0, challenge.qCount);
          if (slicedQzs.length > 0) setActiveQuiz(slicedQzs[0]._id);
          setQuizzes(slicedQzs);
          finalQzs = slicedQzs;
        }

        let answers: Array<AnswerStatus> = [];
        finalQzs.forEach((qz) => {
          answers.push(new AnswerStatus(qz._id));
        });

        setAnswers(answers);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      if (!isFinished) {
        return "You Quiz is not finished! Are you sure to navigate away? Your progress won't be saved, but your attempt still counted.";
      }
    };
  }, [isFinished]);

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
          className="row container-fluid mt-4 mb-4 quiz-question-pane"
        >
          {isStarted && !isFinished ? (
            <>
              <div className="tab-content min-h-100">
                <CountDownTimerComponent duration={challenge.duration} />
                {getIsQa() ? (
                  <div className="row">
                    <div className="col-12">
                      <p className="fs-2 fw-lighter">
                        Soal Tersedia :{" "}
                        <span className="fw-bolder">{allQuiz.length}</span>
                      </p>
                      <p className="fs-2 fw-lighter">
                        Soal Ditampilkan :{" "}
                        <span className="fw-bolder">{challenge.qCount}</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {loading ? (
                  <Loading />
                ) : (
                  quizzes.map((q, qindex) => {
                    return (
                      <>
                        <div
                          key={q._id}
                          className={
                            "tab-pane fade quiz-pane " +
                            (activeQuiz == q._id ? "active show" : "")
                          }
                          id={q._id}
                        >
                          <div className="w-100">
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <div className="card">
                                  <div className="card-body overflow-auto quiz-question-pane">
                                    <div className="fs-5 fw-bolder">
                                      Soal No. {qindex + 1}
                                    </div>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: q.question,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <div className="row">
                                  <div className="col-12 mb-2">
                                    <div className="d-flex flex-column mt-3 w-100">
                                      <h2>Choose the right answer</h2>
                                      <div data-kt-buttons="true">
                                        {q.options.map((op, index) => {
                                          return (
                                            <>
                                              <label
                                                className={
                                                  "btn btn-outline d-flex flex-stack text-start p-6 mb-5 btn-multiple-choice " +
                                                  (getIsQa()
                                                    ? op.isAnswer
                                                      ? "bg-success"
                                                      : "bg-white"
                                                    : "bg-white")
                                                }
                                              >
                                                <div className="d-flex align-items-center me-2">
                                                  <div className="form-check form-check-custom form-check-solid form-check-primary me-6">
                                                    <input
                                                      className="form-check-input"
                                                      type="radio"
                                                      name={q._id}
                                                      value={op.id}
                                                      onChange={(e) =>
                                                        onAnswerChanged(e)
                                                      }
                                                    />
                                                  </div>
                                                </div>

                                                {/*begin::Price*/}
                                                <div className="ms-5">
                                                  <div
                                                    dangerouslySetInnerHTML={{
                                                      __html: op.content,
                                                    }}
                                                  />
                                                </div>
                                                {/*end::Price*/}
                                              </label>
                                            </>
                                          );
                                        })}
                                      </div>
                                      {/*end::Radio group*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-4">
                              {qindex > 0 ? (
                                <div className="col-6">
                                  <button
                                    type="button"
                                    className="btn btn-lg btn-light-primary me-3"
                                    onClick={() =>
                                      setActiveQuiz(quizzes[qindex - 1]._id)
                                    }
                                  >
                                    <i className="fa fa-arrow-left"></i>
                                    &nbsp;Back
                                  </button>
                                </div>
                              ) : (
                                <div className="col-6"></div>
                              )}
                              {qindex == quizzes.length - 1 ? (
                                <div className="col-6 d-flex align-items-end flex-column">
                                  <a
                                    type="button"
                                    className="btn btn-lg btn-success"
                                    data-bs-toggle="modal"
                                    data-backdrop="static"
                                    href="#promptIsFinishedModal"
                                  >
                                    Submit&nbsp;
                                    <i className="fa fa-check"></i>
                                  </a>
                                </div>
                              ) : (
                                <div className="col-6 d-flex align-items-end flex-column">
                                  <button
                                    type="button"
                                    className="btn btn-lg btn-primary nav-link"
                                    onClick={() =>
                                      setActiveQuiz(quizzes[qindex + 1]._id)
                                    }
                                  >
                                    Next&nbsp;
                                    <i className="fa fa-arrow-right"></i>
                                  </button>
                                </div>
                              )}
                              {/*end::Wrapper*/}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Content*/}

      <PromptFinishQuiz onSubmit={() => SubmitQuiz()} />
      {isStarted ? (
        <></>
      ) : (
        <PromptStartChallenge
          onNotReady={() => navigate(-1)}
          onStartChallenge={() => StartQuiz()}
          isEligible={isEligible}
        />
      )}
      {isFinished ? (
        <ModalFinishedChallenge
          score={playerScore}
          isPassed={isChlPassed}
          onContinue={() => navigate(-1)}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Quizzes;
