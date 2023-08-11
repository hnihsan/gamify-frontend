import React, { useState, useEffect } from "react";
import StudentSideNav from "./partials/student/SideNavigation";
import StudentMainHeader from "./partials/student/Header";
import StudentSubjects from "./partials/student/Subjects";
import SubjectDetail from "./partials/student/SubjectDetail";
import Quizzes from "./partials/student/Quiz";
import Cookies from "js-cookie";
import { Routes, Route } from "react-router-dom";
import Profile from "./partials/student/Profile";
import { AchievementsIconLibrary } from "../lib/Tools";
// @ts-ignore
import unj from "~/src/assets/icons/footer/unj.png"; // @ts-ignore
import kemendikbud from "~/src/assets/icons/footer/kemendikbud.png"; // @ts-ignore
import merdeka from "~/src/assets/icons/footer/merdeka.png"; // @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png";
import Reference from "./partials/student/Reference";
import StudentReports from "./partials/student/StudentReports";

const Student: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const getUserId = () => Cookies.get("userId");
  const [navigateCount, setNavigateCount] = useState<number>(0);
  const [arrayPath, setArrayPath] = useState<Array<string>>(
    window.location.pathname.split("/")
  );
  const getIsAdmin = () => {
    var str = Cookies.get("5fdedfe381eef204ab3354d244885a40");
    return str == "cebf9416c97f4808312f215c569c73c4";
  };

  useEffect(() => {
    if (getUserId() == undefined) {
      window.location.reload();
    }

    const timer = setTimeout(() => setCount(count + 1), 5000);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    console.log("Navigated " + navigateCount + " times");
    setArrayPath(window.location.pathname.split("/"));
  }, [navigateCount]);

  return (
    <>
      {/*begin::Root*/}
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Page--> */}
        <div className="page d-flex flex-row flex-column-fluid">
          {/* Side Navigation */}
          <StudentSideNav
            isNavDisplayed={isNavOpen}
            activePage={arrayPath[1]}
          />
          {/* Container (Content Wrapper) */}
          <div
            className="d-flex flex-column flex-row-fluid content-bg"
            id="kt_wrapper"
          >
            {/* Container (Content Wrapper) */}
            <StudentMainHeader
              handleToggleNav={() => setIsNavOpen(!isNavOpen)}
              arrayPath={arrayPath}
            />
            {/* Content */}
            <Routes>
              {getUserId != undefined ? (
                <>
                  <Route
                    path="/"
                    element={
                      <StudentSubjects
                        userId={getUserId()}
                        onNavigateFn={() => {
                          setNavigateCount(navigateCount + 1);
                          setIsNavOpen(false);
                        }}
                      />
                    }
                  />
                  <Route
                    path="/Profile"
                    element={
                      <Profile
                        onNavigateFn={() => {
                          setNavigateCount(navigateCount + 1);
                          setIsNavOpen(false);
                        }}
                      />
                    }
                  />
                  <Route
                    path="/Reference"
                    element={
                      <Reference
                        onNavigateFn={() => {
                          setNavigateCount(navigateCount + 1);
                          setIsNavOpen(false);
                        }}
                      />
                    }
                  />
                  <Route
                    path="SubjectDetail/:userSubjectId"
                    element={
                      <SubjectDetail
                        onNavigateFn={() => setNavigateCount(navigateCount + 1)}
                      />
                    }
                  />
                  <Route
                    path="Quiz/:userSubjectId/:subjectId/:challengeId"
                    element={
                      <Quizzes
                        onNavigateFn={() => setNavigateCount(navigateCount + 1)}
                      />
                    }
                  />
                  {getIsAdmin() ? (
                    <Route
                      path="/StudentReport"
                      element={
                        <StudentReports
                          onNavigateFn={() =>
                            setNavigateCount(navigateCount + 1)
                          }
                        />
                      }
                    />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </Routes>
            <div className="my-4">
              <div className="col-12 ">
                <div className="mt-3 w-100 text-center">
                  <div className="flex-column">
                    <a href="#" className="">
                      <img
                        src={unj}
                        alt="image"
                        className="h-75px me-2 rounded-circle"
                      />
                    </a>
                    <a href="#" className="">
                      <img
                        src={kemendikbud}
                        alt="image"
                        className="h-75px me-2 rounded-circle"
                      />
                    </a>
                    <a href="#" className="">
                      <img src={merdeka} alt="image" className="h-75px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End::Root*/}
      {isNavOpen ? (
        <div
          style={{ zIndex: 109 }}
          className="drawer-overlay"
          onClick={() => setIsNavOpen(!isNavOpen)}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Student;
