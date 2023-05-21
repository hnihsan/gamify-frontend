import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { UpdateUserModel, User } from "../../../models/User";
import { getUser } from "../../../services/GetUser";
import { LoadingSubject } from "./SubjectsPartial/LoadingSubject";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png"; // @ts-ignore
import lock from "~/src/assets/icons/lock.png";
import {
  AvatarsPic,
  FramesPic,
  FramesSelection,
  ProgressLevelIcon,
  ProgressLevelTitle,
} from "../../../lib/Tools";
import { updateUser } from "../../../services/UpdateUser";
import { SuccessActionModal } from "./modals/QuizPartials/SuccessAction";

class ProfileParams {
  onNavigateFn: () => void;
}

const OverlayBlockingComponent = () => {
  return (
    <div className="overlay-blocking-profile overlay-blocking-border">
      <img src={lock} />
    </div>
  );
};

const Profile = ({ onNavigateFn }: ProfileParams) => {
  const [user, setUser] = useState<User>(new User({}));
  const [nickname, setNickname] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [avatarCode, setAvatarCode] = useState<string>("");
  const [frameCode, setFrameCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  const SubmitUpdate = async () => {
    var updateModel = new UpdateUserModel({
      nickname: nickname,
      fullname: fullname,
      avatarCode: avatarCode,
      frameCode,
    });

    await updateUser(user._id, updateModel);
    setSubmitting(false);
    setPopup(true);
  };

  useEffect(() => {
    onNavigateFn();
    const fetchUser = async () => {
      let email = Cookies.get("email");
      let u = await getUser(email);
      setUser(u);
      setNickname(u.nickname);
      setFullname(u.fullname);
      setAvatarCode(u.avatarCode);
      setFrameCode(u.frameCode);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user._id) setLoading(false);
  }, [user]);

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
          {loading ? (
            <LoadingSubject message="Memuat profil" />
          ) : (
            <div className="col-12">
              <div className="card card-flush gamphy-secondbg">
                <div className="card-body d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                      <h3 className="fs-2hx fw-bolder">Profile</h3>
                      <img
                        src={leaderboard_frame}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <div className="ava-container-xl mx-auto">
                        <img
                          src={AvatarsPic[avatarCode]}
                          className="avatar-position"
                        />
                        <img
                          src={FramesPic[frameCode]}
                          className="ava-frame-position"
                        />
                      </div>
                      <div className="form-group profile-input my-4">
                        <label htmlFor="nickname" className="fs-4 fw-lighter">
                          Nama Panggilan
                        </label>
                        <input
                          maxLength={20}
                          id="nickname"
                          type="text"
                          className="form-control form-control-lg text-center fw-bolder fs-2x gamphy-secondbg-light"
                          placeholder="Nama panggilan mu"
                          value={nickname}
                          onChange={(event) => setNickname(event.target.value)}
                        />
                      </div>
                      <div className="form-group profile-input my-4">
                        <label htmlFor="fullname" className="fs-4 fw-lighter">
                          Nama Lengkap
                        </label>
                        <input
                          id="fullname"
                          type="text"
                          className="form-control form-control-lg text-center fw-bolder fs-2x gamphy-secondbg-light"
                          placeholder="Nama lengkapmu"
                          value={fullname}
                          onChange={(event) => setFullname(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <h3 className="fs-2hx fw-bolder">Pilih Avatar</h3>
                      <img
                        src={leaderboard_frame}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <div className="row justify-content-center">
                        {Object.keys(AvatarsPic).map((ava, idx) => (
                          <div
                            key={idx}
                            className={
                              "col-4 col-md-1 p-2 avatars-selection-border " +
                              (ava == avatarCode ? "active" : "")
                            }
                            onClick={() => setAvatarCode(ava)}
                          >
                            <img
                              src={AvatarsPic[ava]}
                              style={{ maxWidth: "100%" }}
                            />
                          </div>
                        ))}
                      </div>
                      <h3 className="fs-2hx fw-bolder">Pilih Frame</h3>
                      <img
                        src={leaderboard_frame}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      {["LEVEL_1", "LEVEL_2", "LEVEL_3", "LEVEL_4"].map(
                        (level, idx) => (
                          <div key={idx}>
                            <h3 className="fs-2 fw-lighter">
                              Syarat Level :&nbsp;
                              <img
                                src={ProgressLevelIcon[level]}
                                style={{ maxHeight: "50px" }}
                              />
                              <span className="fw-bolder gamphy-secondtext-light">
                                &nbsp;{ProgressLevelTitle[level]}
                              </span>
                            </h3>
                            <div className="row justify-content-center">
                              {FramesSelection.filter(
                                (item) => item.level == level
                              ).map((frame, idx) => (
                                <div
                                  key={idx}
                                  className="col-4 col-md-1 p-2 p-relative"
                                >
                                  {user.progressLevel != level ? (
                                    <OverlayBlockingComponent />
                                  ) : (
                                    <></>
                                  )}
                                  <div
                                    className={
                                      "bg-barely avatars-selection-border " +
                                      (frame.code == frameCode ? "active" : "")
                                    }
                                    onClick={() => setFrameCode(frame.code)}
                                  >
                                    <img
                                      src={frame.src}
                                      style={{
                                        maxWidth: "100%",
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <a
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                      setSubmitting(true);
                      SubmitUpdate();
                    }}
                    data-bs-toggle="modal"
                    href="#successActionModal"
                  >
                    Perbarui Profil
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <SuccessActionModal show={popup} message="Berhasil memperbarui profil!" />
    </>
  );
};

export default Profile;
