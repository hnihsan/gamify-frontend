import React from "react";
import { useState, useEffect } from "react";
import { UserSubject } from "../../../models/UserSubject";
import { User, UserLeaderboard } from "../../../models/User";
import { getUserSubjects } from "../../../services/GetUserSubjects";
import { LoadingSubject } from "./SubjectsPartial/LoadingSubject";
import { SubjectItem } from "./SubjectsPartial/SubjectItem";
import { NoSubjectEnrolled } from "./SubjectsPartial/NoSubjectEnrolled";
import { ProgressComponent } from "./SharedPartial/ProgressComponent";
import { LeaderboardComponent } from "./SharedPartial/LeaderboardComponent";
import { getMetadata } from "../../../services/GetMetada";
import { MetadataModel } from "../../../models/Metadata";
import Cookies from "js-cookie";
import { getUser } from "../../../services/GetUser";
import { getUserRank } from "../../../services/GetUserRank";
import { getLeaderboard } from "../../../services/GetLeaderboard";

class SubjectProp {
  userId: string;
}
const Subjects = ({ userId }: SubjectProp) => {
  const [userSubjects, setUserSubjects] = useState<Array<UserSubject>>([]);
  const [user, setUser] = useState<User>(new User({}));
  const [rank, setRank] = useState<number>(0);
  const [leaderboard, setLeaderboard] = useState<Array<UserLeaderboard>>([]);
  const [metadata, setMetadata] = useState<MetadataModel>(
    new MetadataModel({})
  );
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(userId);
    const fetchUserSubjects = async () => {
      let uss = await getUserSubjects(userId);
      let meta = await getMetadata();
      let email = Cookies.get("email");
      let u = await getUser(email);
      let r = await getUserRank(u._id);
      let l = await getLeaderboard(5);
      setUser(u);
      setRank(r);
      setLeaderboard(l);
      setMetadata(meta);
      setUserSubjects(uss);
      setIsDataReady(true);
    };

    fetchUserSubjects();
  }, []);

  useEffect(() => {
    if (isDataReady) setLoading(false);
  }, [isDataReady]);

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
          <div className="my-2">
            <h2 className="fs-2hx gamphy-maintext">
              Daftar Materi&nbsp;
              <i className="fa fa-question-circle fs-2"></i>
            </h2>
            <h2 className="fs-4 fw-lighter">
              Silakan pilih materi yang ingin kamu ikuti
            </h2>
            <hr />
          </div>
          {/* end section header */}
          {/*begin::Row*/}
          <div className="row">
            <div className="col-xl-8">
              <div className="row">
                {loading ? (
                  <LoadingSubject />
                ) : userSubjects.length == 0 ? (
                  <NoSubjectEnrolled />
                ) : (
                  userSubjects.map((userSubject) => {
                    return (
                      <SubjectItem
                        key={userSubject._id}
                        userSubject={userSubject}
                        subject={userSubject.subject}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div className="col-xl-4">
              {loading ? (
                <></>
              ) : (
                <ProgressComponent user={user} meta={metadata} rank={rank} />
              )}
              {loading ? (
                <></>
              ) : (
                <LeaderboardComponent leaderboards={leaderboard} />
              )}
            </div>
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
