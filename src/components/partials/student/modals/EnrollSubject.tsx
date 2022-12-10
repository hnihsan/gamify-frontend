import React from "react";

const ModalEnrollSubject = () => {
  return (
    <>
      {/*begin::Modal - Enroll Subject */}
      <div
        className="modal fade"
        id="game_modal_enroll_subject"
        tabIndex={-1}
        aria-hidden="true"
      >
        {/*begin::Modal dialog*/}
        <div className="modal-dialog modal-dialog-centered mw-900px">
          {/*begin::Modal content*/}
          <div className="modal-content">
            {/*begin::Modal header*/}
            <div className="modal-header">
              {/*begin::Modal title*/}
              <h2>Enroll a Subject</h2>
              {/*end::Modal title*/}
              {/*begin::Close*/}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                <span className="svg-icon svg-icon-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="black"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="black"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Close*/}
            </div>
            {/*end::Modal header*/}
            {/*begin::Modal body*/}
            <div className="modal-body py-lg-10 px-lg-10">
              {/*begin::Stepper*/}
              <div
                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                id="kt_modal_create_app_stepper"
              >
                {/*begin::Content*/}
                <div className="flex-row-fluid py-lg-5 px-lg-15">
                  {/*begin::Form*/}
                  <form
                    className="form"
                    noValidate={true}
                    id="kt_modal_enroll_subject"
                  >
                    {/*begin::Step 1*/}
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        {/*begin::Input group*/}
                        <div className="fv-row mb-10">
                          {/*begin::Label*/}
                          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                            <span className="required">Subject's Code</span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="You can get a Subject Code from your Teacher / Lecturer"
                            ></i>
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid"
                            name="name"
                            placeholder="Ex. 2D02662F-93A7-42AD"
                            onChange={(event) =>
                              console.log(event.target.value)
                            }
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                    </div>
                    {/*end::Step 1*/}
                    {/*begin::Actions*/}
                    <div className="d-flex flex-stack pt-10">
                      {/*begin::Wrapper*/}
                      <div>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          id="add-subject-btn"
                        >
                          {" "}
                          Continue
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                          <span className="svg-icon svg-icon-3 ms-1 me-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="18"
                                y="13"
                                width="13"
                                height="2"
                                rx="1"
                                transform="rotate(-180 18 13)"
                                fill="black"
                              />
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </button>
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Actions*/}
                  </form>
                  {/*end::Form*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Stepper*/}
            </div>
            {/*end::Modal body*/}
          </div>
          {/*end::Modal content*/}
        </div>
        {/*end::Modal dialog*/}
      </div>
      {/*end::Modal - Create App*/}
    </>
  );
};

export default ModalEnrollSubject;
