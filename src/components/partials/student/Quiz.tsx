import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
// @ts-ignore
import achv_1 from "~/src/assets/media/achievements/badge1.png";
import { shuffleArray } from "../../../lib/Tools";
import { Quiz } from "../../../models/Quiz";
import { SubmitUserAttempt_VM } from "../../../models/UserAttempt";
import { getChallenges } from "../../../services/GetChallenges";
import { getQuizzes } from "../../../services/GetQuizzes";
import Loading from "../shared/LoadingComponent";
import { getUser } from "../../../services/GetUser";
import { submitUserAttempt } from "../../../services/SubmitUserAttempt";

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
  const [answers, setAnswers] = useState<Array<AnswerStatus>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUserId = () => Cookies.get("userId");
  const SubmitQuiz = async () => {
    var correctAnswerCount = 0;
    var totalQuiz = quizzes.length;
    answers.forEach((ans) => {
      var quiz = quizzes.filter((q) => q._id == ans.quizId)[0];
      if (quiz.checkAnswer(ans.answer)) correctAnswerCount++;
    });

    console.log("Score: " + correctAnswerCount + "/" + totalQuiz);

    var score = (correctAnswerCount / totalQuiz) * 100;
    var vm = new SubmitUserAttempt_VM({
      challengeId: challengeId,
      subjectId: subjectId,
      userId: Cookies.get("userId"),
      score: score,
      duration: 245,
    });
    var res = await submitUserAttempt(vm);
  };
  const onAnswerChanged = (e) => {
    let isChecked = e.target.checked;
    let answer = parseInt(e.target.value);
    let quizId = e.target.name;
    // console.log(answer);
    // console.log(quizId);
    setAnswers((current) =>
      current.map((ans) => {
        if (ans.quizId == quizId) {
          if (isChecked) ans.answer.push(answer);
          else ans.answer = ans.answer.filter((item) => item !== answer);

          // console.log(ans.answer);
          return ans;
        }

        return ans;
      })
    );
  };
  useEffect(() => {
    const fetchQuizzes = async () => {
      if (typeof challengeId == "string") {
        let qzs = await getQuizzes(challengeId);
        let shuffledQzs = shuffleArray(qzs);
        setActiveQuiz(shuffledQzs[0]._id);
        setQuizzes(shuffledQzs);

        let answers: Array<AnswerStatus> = [];
        shuffledQzs.forEach((qz) => {
          answers.push(new AnswerStatus(qz._id));
        });

        setAnswers(answers);
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

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
          <div className="tab-content min-h-100">
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
                        <div className="d-flex">
                          <div className="col-md-6 me-4">
                            <div className="card">
                              <div className="card-body overflow-auto quiz-question-pane">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: q.question,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-12 mb-2">
                                <div className="d-flex flex-column mt-3 w-100">
                                  <h2>Choose the right answer</h2>
                                  <div data-kt-buttons="true">
                                    {q.options.map((op, index) => {
                                      return (
                                        <>
                                          <label className="btn btn-outline btn-outline-dashed d-flex flex-stack text-start p-6 mb-5 btn-multiple-choice bg-white">
                                            <div className="d-flex align-items-center me-2">
                                              <div className="form-check form-check-custom form-check-solid form-check-primary me-6">
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
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
                        <div className="d-flex flex-stack pt-10">
                          {qindex > 0 ? (
                            <>
                              <div className="nav nav-tabs me-2">
                                <button
                                  type="button"
                                  className="btn btn-lg btn-light-primary me-3"
                                  onClick={() =>
                                    setActiveQuiz(quizzes[qindex - 1]._id)
                                  }
                                >
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                                  <span className="svg-icon svg-icon-3 me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="6"
                                        y="11"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                  Back
                                </button>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                          {qindex == quizzes.length - 1 ? (
                            <>
                              <div className="nav nav-tabs">
                                <a
                                  type="button"
                                  className="btn btn-lg btn-success"
                                  onClick={SubmitQuiz}
                                >
                                  Submit
                                  <span className="svg-icon svg-icon-3 ms-1 me-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="nav nav-tabs">
                                <button
                                  type="button"
                                  className="btn btn-lg btn-primary nav-link"
                                  onClick={() =>
                                    setActiveQuiz(quizzes[qindex + 1]._id)
                                  }
                                >
                                  Next
                                  <span className="svg-icon svg-icon-3 ms-1 me-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </button>
                              </div>
                            </>
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
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Content*/}
    </>
  );
};

export default Quizzes;
