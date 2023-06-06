import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// @ts-ignore
import logo from "~/src/assets/logo_landscape.png";

interface mainHeaderProps {
  handleToggleNav: () => void;
  arrayPath: Array<string>;
}

class NavItem {
  title: string;
  url: string;

  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}

const NavigationBar = (arrayPath: Array<string>) => {
  let Title = "Beranda";
  let NavItems: Array<NavItem> = [];

  switch (arrayPath[1]) {
    case "":
      Title = "Beranda";
      NavItems = [new NavItem("Beranda", "/")];
      break;
    case "Profile":
      Title = "Profil";
      NavItems = [
        new NavItem("Beranda", "/"),
        new NavItem("Profil", arrayPath.join("/")),
      ];
      break;
    case "SubjectDetail":
      Title = "Detil Materi";
      NavItems = [
        new NavItem("Beranda", "/"),
        new NavItem("Detil Materi", arrayPath.join("/")),
      ];
      break;
    case "Quiz":
      Title = "Challenge";
      NavItems = [
        new NavItem("Beranda", "/"),
        new NavItem("Detil Materi", "/SubjectDetail/" + arrayPath[2]),
        new NavItem("Challenge", arrayPath.join("/")),
      ];
      break;
    default:
      break;
  }

  return (
    <div className="container-fluid py-6 py-lg-0 d-flex flex-column flex-sm-row align-items-lg-stretch justify-content-sm-between">
      <div className="page-title d-flex flex-column me-5">
        <h1 className="d-flex flex-column text-dark fw-bolder fs-2hx mb-0">
          {Title}
        </h1>
        <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-2 pt-1">
          {NavItems.map((item, idx) => (
            <li key={idx} className="breadcrumb-item text-muted">
              <Link to={item.url} className="text-muted text-hover-primary">
                {item.title}
              </Link>
              &nbsp;•&nbsp;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StudentMainHeader = ({ handleToggleNav, arrayPath }: mainHeaderProps) => {
  return (
    <>
      {/*begin::Header*/}
      <div id="kt_header" className="header align-items-stretch">
        {/*begin::Brand*/}
        <div className="header-brand">
          {/*begin::Aside toggle*/}
          <div
            className="d-flex align-items-center ms-n3 me-1"
            title="Show aside menu"
          >
            <div
              className="btn btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_aside_mobile_toggle"
              onClick={() => handleToggleNav()}
            >
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
              <span className="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="black"
                  />
                  <path
                    opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
          </div>
          {/*end::Aside toggle*/}
          {/*begin::Logo*/}
          <a href="#">
            <img alt="Logo" src={logo} style={{ height: "80px" }} />
          </a>
          {/*end::Logo*/}
        </div>
        {/*end::Brand*/}
      </div>
      {/*end::Header*/}

      {/*Begin::User Header*/}
      <div className="container-fluid user-header">
        <div className="toolbar toolbar-custom mb-2">
          {/*begin::Toolbar*/}
          {NavigationBar(arrayPath)}
          {/*end::Toolbar*/}
        </div>
      </div>
      {/*end::User Header*/}
    </>
  );
};

export default StudentMainHeader;
