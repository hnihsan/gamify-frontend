import React from "react";
import Loading from "../../shared/LoadingComponent";

export const NoSubjectEnrolled = () => {
  return (
    <>
      <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-12 mb-xl-12">
        {/*begin::Card widget 7*/}
        <div className="card card-flush card-subjects">
          {/*begin::Header*/}
          <div className="card-header pt-5">
            {/*begin::Title*/}
            <div className="card-title d-flex flex-column justify-content-center">
              {/*begin::Subject Title*/}
              <span className="fs-2hx fw-bolder text-dark me-2 lh-1">
                No subject enrolled
              </span>
              {/*end::Subject Title*/}
            </div>
            {/*end::Title*/}
          </div>
          {/*end::Header*/}
          {/*begin::Card body*/}
          <div className="card-body text-center">
            Enroll to a subject and start your challenges!
          </div>
          {/*end::Card body*/}
        </div>
        {/*end::Card widget 7*/}
      </div>
    </>
  );
};
