import React from "react";
// @ts-ignore
import ava_frame from "~/src/assets/icons/sorry.png";

export const NoSubjectEnrolled = () => {
  return (
    <div className="col-12 my-2">
      {/*begin::Card widget 7*/}
      <div className="card card-flush card-subjects">
        {/*begin::Card body*/}
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12">
              <img
                src={ava_frame}
                style={{ maxHeight: "100px" }}
                className="mx-auto"
              />
            </div>
            <div className="col-12">
              <h3 className="fs-2x fw-lighter">
                Maaf ya, belum ada materi yang bisa diikuti . .
              </h3>
            </div>
          </div>
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Card widget 7*/}
    </div>
  );
};
