import React from "react";
import { useState, useEffect } from "react";
import { getAllChallenges } from "../../../services/GetAllChallenges";
import { LoadingSubject } from "./SubjectsPartial/LoadingSubject";
import { Challenge } from "../../../models/Challenge";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png";
import { Report } from "../../../models/Report";
import { getReportsByChallengeId } from "../../../services/GetReportsByChallengeId";

class ReportsProp {
  onNavigateFn: () => void;
}

const StudentReports = ({ onNavigateFn }: ReportsProp) => {
  const [challenges, setChallenges] = useState<Array<Challenge>>([]);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCh, setSelectedCh] = useState<Challenge | undefined>(
    undefined
  );
  const [reports, setReports] = useState<Array<Report>>([]);

  const onChalengeChanged = (e) => {
    let ChallengeID = e.target.value;
    setSelectedCh(challenges.find((ch) => ch._id == ChallengeID));
    console.log(ChallengeID);
  };

  useEffect(() => {
    onNavigateFn();
    const fetchChallenges = async () => {
      let chs = await getAllChallenges();
      setChallenges(chs);
      setIsDataReady(true);
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    if (isDataReady) setLoading(false);
  }, [isDataReady]);

  useEffect(() => {
    const fetchReports = async () => {
      let reports = await getReportsByChallengeId(selectedCh?._id || "");
      setReports(reports);
      setIsDataReady(true);
    };

    if (selectedCh != undefined) fetchReports();
  }, [selectedCh]);

  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      {/*begin::Container*/}
      <div id="kt_content_container" className="container-fluid mt-4">
        {/* begin section header */}
        <div className="my-2">
          <h2 className="fs-2hx gamphy-maintext">Laporan Nilai Siswa</h2>
          <h2 className="fs-3 fw-lighter">
            Silahkan pilih Challenge untuk melihat nilai siswa
          </h2>
          <hr />
        </div>
        {/* end section header */}
        {/*begin::Row*/}
        <div className="row">
          <div className="col-xl-12">
            {loading ? (
              <LoadingSubject message="Memuat Challenges" />
            ) : (
              <>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="fs-4 fw-bolder"
                        htmlFor="formGroupExampleInput"
                      >
                        Pilih Challenge :
                      </label>
                      <select
                        className="form-control form-control-lg"
                        onChange={(e) => onChalengeChanged(e)}
                      >
                        <option value={""}>- Nama Challenge -</option>
                        {challenges.map((ch) => (
                          <option value={ch._id}>{ch.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div
                      className="card card-flush gamphy-secondbg"
                      style={{ minHeight: "400px" }}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 text-center">
                            {selectedCh == undefined ? (
                              <h3 className="fs-4">
                                Silahkan Pilih Challenge Terlebih Dahulu
                              </h3>
                            ) : (
                              <>
                                <h3 className="fs-2hx">{selectedCh.title}</h3>
                                <img
                                  src={leaderboard_frame}
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
                                <br />
                                <table className="table gamphy-secondbg-light rounded table-bordered2">
                                  <thead>
                                    <tr>
                                      <th scope="col">
                                        <span className="fw-bolder fs-4">
                                          Rank#
                                        </span>
                                      </th>
                                      <th scope="col">
                                        <span className="fw-bolder fs-4">
                                          Nama Lengkap
                                        </span>
                                      </th>
                                      <th scope="col">
                                        <span className="fw-bolder fs-4">
                                          Nilai
                                        </span>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {reports
                                      .sort((a, b) => b.score - a.score)
                                      .map((value, idx) => (
                                        <tr className="" key={idx}>
                                          <td scope="row">
                                            <span className="fs-2">
                                              {idx + 1}
                                            </span>
                                          </td>
                                          <td scope="row">
                                            <span className="fs-2">
                                              {value.fullname}
                                            </span>
                                          </td>
                                          <td scope="row">
                                            <span className="fs-2 fw-bolder">
                                              {value.score}
                                            </span>
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Container*/}
    </div>
  );
};

export default StudentReports;
