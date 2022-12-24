import React from "react";
import { useState, useEffect } from "react";
import { UserSubject } from "../../../models/UserSubject";
import { User } from "../../../models/User";
import { getUserSubjects } from "../../../services/GetUserSubjects";
import { LoadingSubject } from "./SubjectsPartial/LoadingSubject";
import { SubjectItem } from "./SubjectsPartial/SubjectItem";
import { NoSubjectEnrolled } from "./SubjectsPartial/NoSubjectEnrolled";

class SubjectProp {
  userId: string;
}
const Subjects = ({ userId }: SubjectProp) => {
  const [userSubjects, setUserSubjects] = useState<Array<UserSubject>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(userId);
    const fetchUserSubjects = async () => {
      let uss = await getUserSubjects(userId);
      setUserSubjects(uss);
      setLoading(false);
    };

    fetchUserSubjects();
  }, []);

  return (
    <>
      {/*begin::Content*/}
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-fluid mt-4">
          {/* begin section header */}
          <div className="section-header my-2">
            <h2>Enrolled Subjects</h2>
            <a
              className="nav-link d-flex flex-center overflow-hidden"
              data-bs-toggle="modal"
              data-backdrop="static"
              href="#game_modal_enroll_subject"
            >
              {/*begin::Icon*/}
              <div className="nav-icon">
                {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                <span className="svg-icon svg-icon-2hx svg-icon-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.3"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="black"
                    />
                    <rect
                      x="10.8891"
                      y="17.8033"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(-90 10.8891 17.8033)"
                      fill="black"
                    />
                    <rect
                      x="6.01041"
                      y="10.9247"
                      width="12"
                      height="2"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Icon*/}
            </a>
          </div>
          {/* end section header */}
          {/*begin::Row*/}
          <div className="row g-5 g-xl-10 mb-xl-10">
            {loading ? (
              <LoadingSubject />
            ) : userSubjects.length == 0 ? (
              <NoSubjectEnrolled />
            ) : (
              userSubjects.map((userSubject) => {
                return (
                  <div key={userSubject._id}>
                    <SubjectItem
                      userSubject={userSubject}
                      subject={userSubject.subject}
                    />
                  </div>
                );
              })
            )}
            {/*  */}
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Content*/}
    </>
  );
};

export default Subjects;
