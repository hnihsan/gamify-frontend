import React from "react";
import Loading from "../../shared/LoadingComponent";

class SubjectItemProp {
  message: string;
}

export const LoadingSubject = ({
  message = "Memuat materi",
}: SubjectItemProp) => {
  return (
    <div className="col-12">
      {/*begin::Card widget 7*/}
      <div className="card card-flush card-subjects">
        {/*begin::Header*/}
        <div className="card-header pt-5">
          {/*begin::Title*/}
          <div className="card-title d-flex flex-column">
            {/*begin::Subject Title*/}
            <span className="fs-2x fw-lighter text-dark me-2 lh-1">
              {message}&nbsp;..
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
  );
};
