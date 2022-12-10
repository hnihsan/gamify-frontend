import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "~/src/assets/logo.svg"; // @ts-ignore
import avatar from "~/src/assets/avatars/150-1.jpg"; // @ts-ignore
import us_flag from "~/src/assets/flags/united-states.svg";

interface sideNavProps {
  isNavDisplayed: boolean;
}

const StudentSideNav = ({ isNavDisplayed }: sideNavProps) => {
  return (
    <>
      {/*begin::Aside*/}
      <div
        id="kt_aside"
        className={"aside " + (isNavDisplayed ? "drawer" : "")}
        style={{ zIndex: 110 }}
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: true}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_mobile_toggle"
      >
        {/*begin::Aside toolbar*/}
        <div className="aside-toolbar py-5" id="kt_aside_toolbar">
          {/*begin::Aside select*/}
          <div className="d-flex justify-content-center-stack">
            {/*begin::Logo*/}
            <a href="#">
              <img alt="Logo" src={logo} className="h-25px" />
            </a>
            {/*end::Logo*/}
          </div>
          {/*end::Aside select*/}
        </div>
        {/*end::Aside toolbar*/}
        {/*begin::Aside menu*/}
        <div className="aside-menu flex-column-fluid">
          {/*begin::Aside Menu*/}
          <div
            className="hover-scroll-overlay-y px-2 my-5 my-lg-5"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
            data-kt-scroll-offset="0"
          >
            {/*begin::Menu*/}
            <div
              className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold"
              id="#kt_aside_menu"
              data-kt-menu="true"
            >
              <div className="menu-item">
                <Link className="menu-link active" to="/">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Dashboard</span>
                </Link>
              </div>
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::Aside Menu*/}
        </div>
        {/*end::Aside menu*/}
        {/*begin::Footer*/}
        <div
          className="aside-footer flex-column-auto pb-5"
          id="kt_aside_footer"
        >
          {/*begin::Aside user*/}
          <div className="aside-user">
            {/*begin::User*/}
            <div className="aside-user d-flex align-items-sm-center justify-content-center py-5">
              {/*begin::User image*/}
              <div className="me-5">
                {/*begin::Symbol*/}
                <div
                  className="symbol symbol-40px cursor-pointer"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  data-kt-menu-overflow="true"
                >
                  <img src={avatar} alt="" />
                </div>
                {/*end::Symbol*/}
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src={avatar} />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bolder d-flex align-items-center fs-5">
                          Max Smith
                          <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          className="fw-bold text-muted text-hover-primary fs-7"
                        >
                          max@kt.com
                        </a>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      My Profile
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
                          3
                        </span>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-end"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Referrals
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Billing
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-5">
                          Payments
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link d-flex flex-stack px-5"
                        >
                          Statements
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="View your statements"
                          ></i>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2"></div>
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          {/* <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              value="1"
                              name="notifications"
                            />
                            <span className="form-check-label text-muted fs-7">
                              Notifications
                            </span>
                          </label> */}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      My Statements
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-end"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title position-relative">
                        Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                          English
                          <img
                            className="w-15px h-15px rounded-1 ms-2"
                            src={us_flag}
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link d-flex px-5 active">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src={us_flag} alt="" />
                          </span>
                          English
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5 my-1">
                    <a href="#" className="menu-link px-5">
                      Account Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="#" className="menu-link px-5">
                      Sign Out
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <div className="menu-content px-5">
                      {/* <label
                        className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                        htmlFor="kt_user_menu_dark_mode_toggle"
                      >
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          value="1"
                          name="mode"
                          id="kt_user_menu_dark_mode_toggle"
                          data-kt-url="../dark/index.html"
                        />
                        <span className="pulse-ring ms-n1"></span>
                        <span className="form-check-label text-gray-600 fs-7">
                          Dark Mode
                        </span>
                      </label> */}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::User image*/}
              {/*begin::Wrapper*/}
              <div className="flex-row-fluid flex-wrap">
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-stack">
                  {/*begin::Info*/}
                  <div className="me-2">
                    {/*begin::Username*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold lh-0"
                    >
                      Paul Melone
                    </a>
                    {/*end::Username*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-bold d-block fs-8">
                      Student
                    </span>
                    {/*end::Description*/}
                  </div>
                  {/*end::Info*/}
                  {/*begin::Action*/}
                  <a
                    href="#"
                    className="btn btn-icon btn-active-color-primary me-n4"
                    data-bs-toggle="tooltip"
                    title="End session and singout"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
                    <span className="svg-icon svg-icon-2 svg-icon-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          opacity="0.3"
                          width="12"
                          height="2"
                          rx="1"
                          transform="matrix(-1 0 0 1 15.5 11)"
                          fill="black"
                        />
                        <path
                          d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                          fill="black"
                        />
                        <path
                          d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*end::Action*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::User*/}
          </div>
          {/*end::Aside user*/}
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Aside*/}
    </>
  );
};

export default StudentSideNav;
