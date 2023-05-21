import React, { useState, useEffect } from "react";
import StudentSideNav from "./partials/student/SideNavigation";
import StudentMainHeader from "./partials/student/Header";
import StudentSubjects from "./partials/student/Subjects";
import ModalEnrollSubject from "./partials/student/modals/EnrollSubject";
import SubjectDetail from "./partials/student/SubjectDetail";
import Quizzes from "./partials/student/Quiz";
import Cookies from "js-cookie";
import { Routes, Route } from "react-router-dom";
import Profile from "./partials/student/Profile";
import { HomeIntroductionModal } from "./partials/student/modals/QuizPartials/HomeIntroduction";

const Student: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const getUserId = () => Cookies.get("userId");
  const [navigateCount, setNavigateCount] = useState<number>(0);
  const [arrayPath, setArrayPath] = useState<Array<string>>(
    window.location.pathname.split("/")
  );

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
                </>
              ) : (
                <></>
              )}
            </Routes>
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
