import React from "react";
import Loading from "../../shared/LoadingComponent";

export const LoadingSubject = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        {/*begin::Card widget 7*/}
        <div className="card card-flush card-subjects">
          {/*begin::Header*/}
          <div className="card-header pt-5">
            {/*begin::Title*/}
            <div className="card-title d-flex flex-column">
              {/*begin::Subject Title*/}
              <span className="fs-2hx fw-bolder text-dark me-2 lh-1">
                Loading subject ..
              </span>
              {/*end::Subject Title*/}
            </div>
            {/*end::Title*/}
          </div>
          {/*end::Header*/}
          {/*begin::Card body*/}
          <div className="card-body ">
            <Loading />
          </div>
          {/*end::Card body*/}
        </div>
        {/*end::Card widget 7*/}
      </div>
    </>
  );
};
