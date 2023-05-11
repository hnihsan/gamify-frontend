import React from "react";
// @ts-ignore
import logo from "~/src/assets/logo.png"; // @ts-ignore
import sketch2 from "~/src/assets/illustrations/2.png"; // @ts-ignore
import lecture from "~/src/assets/icons/lecture.png"; // @ts-ignore
import student from "~/src/assets/icons/student.png";
const sketchBgStyle = {
  backgroundImage: "url(" + sketch2 + ")",
};

const Login: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
            <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
              <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                <a href="../../index.html" className="py-9 pt-lg-20">
                  <img alt="Logo" src={logo} className="" />
                </a>
                <h1 className="fw-bolder text-white fs-2qx pb-lg-10">
                  Welcome to Gamification
                </h1>
                <p className="fw-bold fs-2 text-white">
                  Hone your skill with Challenges
                </p>
              </div>
              <div className="only-desktop">
                <div
                  className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                  style={sketchBgStyle}
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row-fluid py-10">
            <div className="d-flex flex-center flex-column flex-column-fluid">
              <div className="w-75 p-lg-15">
                <div className="form w-100 text-center mb-10">
                  <h1 className="text-dark mb-3">Sign In as</h1>
                  <ul className="text-center nav nav-pills nav-pills-custom mb-3 justify-content-center">
                    <li className="nav-item mb-3 me-3 me-lg-6">
                      <a
                        className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 active"
                        data-bs-toggle="pill"
                        href="#content_login_lecture"
                      >
                        <div className="nav-icon">
                          <img alt="" src={lecture} className="" />
                        </div>
                        <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">
                          Teacher
                        </span>
                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                      </a>
                    </li>
                    <li className="nav-item mb-3 me-3 me-lg-6">
                      <a
                        className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                        data-bs-toggle="pill"
                        href="#content_login_student"
                      >
                        <div className="nav-icon">
                          <img
                            alt="Logo"
                            src={student}
                            style={{ height: "150px" }}
                          />
                        </div>
                        <span className="nav-text text-gray-700 fw-bolder fs-6 lh-1">
                          Student
                        </span>
                        <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="content_login_lecture"
                    >
                      <div className="text-gray-400 fw-bold fs-4">
                        New Here?
                        <a href="#" className="link-primary fw-bolder">
                          Create an Account
                        </a>
                      </div>
                      <form
                        id="sign_in_lecture_form"
                        action="./student/dashboard.html"
                      >
                        <div className="fv-row mb-10 mt-10">
                          <div className="d-flex flex-stack mb-2">
                            <label className="form-label fs-6 fw-bolder text-dark">
                              Email
                            </label>
                          </div>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="text"
                            name="email"
                            autoComplete="off"
                          />
                        </div>
                        <div className="fv-row mb-10">
                          <div className="d-flex flex-stack mb-2">
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">
                              Password
                            </label>
                            <a href="#" className="link-primary fs-6 fw-bolder">
                              Forgot Password ?
                            </a>
                          </div>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="password"
                            name="password"
                            autoComplete="off"
                          />
                        </div>
                        <div className="text-center">
                          <a
                            href="#"
                            type="submit"
                            id="kt_sign_in_submit"
                            className="btn btn-lg btn-primary w-100 mb-5"
                          >
                            <span className="indicator-label">Continue</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </a>
                        </div>
                      </form>
                    </div>

                    <div className="tab-pane fade" id="content_login_student">
                      <div className="text-gray-400 fw-bold fs-4">
                        New Here?
                        <a href="#" className="link-primary fw-bolder">
                          Create an Account
                        </a>
                      </div>
                      <form
                        noValidate={true}
                        id="sign_in_lecture_form"
                        action="./student/dashboard.html"
                      >
                        <div className="fv-row mb-10 mt-10">
                          <div className="d-flex flex-stack mb-2">
                            <label className="form-label fs-6 fw-bolder text-dark">
                              Email
                            </label>
                          </div>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="text"
                            name="email"
                            autoComplete="off"
                          />
                        </div>
                        <div className="fv-row mb-10">
                          <div className="d-flex flex-stack mb-2">
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">
                              Password
                            </label>
                            <a href="#" className="link-primary fs-6 fw-bolder">
                              Forgot Password ?
                            </a>
                          </div>
                          <input
                            className="form-control form-control-lg form-control-solid"
                            type="password"
                            name="password"
                            autoComplete="off"
                          />
                        </div>
                        <div className="text-center">
                          <a
                            href="#"
                            type="submit"
                            id="kt_sign_in_submit"
                            className="btn btn-lg btn-primary w-100 mb-5"
                          >
                            <span className="indicator-label">Continue</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </a>
                        </div>
                      </form>
                    </div>
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

export default Login;
