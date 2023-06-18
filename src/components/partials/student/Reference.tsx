import React, { useState, useEffect } from "react";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png"; // @ts-ignore

class ReferenceParams {
  onNavigateFn: () => void;
}

const Reference = ({ onNavigateFn }: ReferenceParams) => {
  useEffect(() => {
    onNavigateFn();
  }, []);

  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div
          id="kt_content_container"
          className="row container-fluid mt-4 mb-4"
        >
          <div className="col-12">
            <div className="card card-flush gamphy-secondbg">
              <div className="card-body d-flex justify-content-center">
                <div className="row">
                  <div className="col-12 text-center">
                    <h3 className="fs-2hx">Referensi</h3>
                    <img
                      src={leaderboard_frame}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="col-12 gamphy-secondbg-light rounded p-4 text-center">
                    <p className="fs-2">
                      Foster, Bob. 2004. Terpadu Fisika. Jakarta: Erlangga.
                    </p>
                    <p className="fs-2">
                      Giancoli, Douglas C.. 2014. Fisika: Prinsip dan Aplikasi
                      Edisi ke 7 Jilid 1. Jakarta: Erlangga.
                    </p>
                    <p className="fs-2">
                      Kamajaya. 2007. Cerdas Belajar Fisika untuk SMA Kelas X.
                      Grafindo: Bandung.
                    </p>
                    <p className="fs-2">
                      Kanginan, Marthen. 2007. Fisika untuk SMA Kelas X Semester
                      1, Jakarta: Erlangga.
                    </p>
                    <p className="fs-2">
                      Kanginan, Marthen. 2005. Seribu Pena Fisika SMA Jilid 1
                      untuk Kelas X, Jakarta: Erlangga.
                    </p>
                    <p className="fs-2">
                      Supiyanto. 2007. Fisika SMA Untuk Kelas X Jilid 1.
                      Phibeta: Jakarta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reference;
