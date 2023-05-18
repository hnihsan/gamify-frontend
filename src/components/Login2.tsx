import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
// @ts-ignore
import logo from "~/src/assets/logo.png";
import { getUser } from "../services/GetUser";
import { NewUser } from "../models/User";
import { InsertResponse } from "../models/ApiModel";
import { createUser } from "../services/CreateUser";

const LoginComponent = () => {
  const googleButton = useRef(null);
  const clientId = process.env.GOOGLE_OAUTH_CLIENTID ?? "";
  const GSIUrl = "https://accounts.google.com/gsi/client";
  const [loadScriptAttempt, setLoadScriptAttempt] = useState<number>(0);

  const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });

  const onSuccessLogin = async (res) => {
    var credential: any = jwtDecode(res.credential);
    console.log(credential);

    var user = await getUser(credential.email);
    if (user._id == undefined) {
      var newUser: NewUser = new NewUser({
        fullname: credential.name,
        email: credential.email,
        imageUrl: credential.picture,
        phone: "",
        organization: "",
      });

      var apiResponse: InsertResponse = await createUser(newUser);
      user._id = apiResponse.insertedId;
    }
    Cookies.set("userId", user._id);
    Cookies.set("email", credential.email);
    Cookies.set("fullname", credential.name);
    Cookies.set("imageUrl", credential.picture);
    Cookies.set("isAdmin", user.isAdmin || false);
    Cookies.set("isQa", user.isQa || false);
    window.location.reload();
    // refreshTokenSetup(res);
  };

  useEffect(() => {
    loadScript(GSIUrl)
      .then(() => {
        // @ts-ignore
        if (typeof google !== "undefined") {
          // @ts-ignore
          google.accounts.id.initialize({
            client_id: clientId,
            auto_select: false,
            callback: onSuccessLogin,
          });
          // @ts-ignore
          google.accounts.id.renderButton(googleButton.current, {
            theme: "filled_blue",
            size: "large",
            width: 300,
          });
        } else {
          console.log("no script loaded");
          setLoadScriptAttempt(loadScriptAttempt + 1);
        }
      })
      .catch(console.error);

    return () => {
      const scriptTag = document.querySelector(`script[src="${GSIUrl}"]`);
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, [loadScriptAttempt]);

  const onFailureLogin = (res) => {
    console.log("Login failed: res:", res);
  };

  return (
    <section className="vh-100 bg-white">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="text-center align-items-center justify-content-center justify-content-lg-start">
                <a href="../../index.html" className="py-9 pt-lg-20">
                  <img
                    alt="Logo"
                    src={logo}
                    className=""
                    style={{ height: "150px" }}
                  />
                </a>
                <h1 className="fw-bolder fs-2qx mt-4">Welcome to Gamphy</h1>
                <p className="fw-bold fs-2">Hone your skill with Challenges</p>
                <div
                  className="d-flex justify-content-center"
                  ref={googleButton}
                ></div>
              </div>
            </form>
            {/* <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default LoginComponent;
