import React, { useState } from "react";
import {
  ProgressLevelTitle,
  ProgressLevelIcon,
  ProgressBarIcons,
  AvatarsPic,
  FramesPic,
} from "../../../../lib/Tools";
// @ts-ignore
import ava from "~/src/assets/avatars/male/8.png";
// @ts-ignore
import ava_frame from "~/src/assets/avatars/frames/level_4/8.png";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png";
import { User } from "../../../../models/User";
import { MetadataModel } from "../../../../models/Metadata";

class ProgressParams {
  user: User;
  meta: MetadataModel;
  rank: number;
}

const ProgressBarValue = (nbar: number, progress: number) => {
  var maxValue = nbar * 25;
  var minValue = (nbar - 1) * 25;

  if (progress >= maxValue) return 100;
  else if (progress > minValue) return ((progress - minValue) / 25) * 100;
  else return 0;
};

export const ProgressComponent = (props: ProgressParams) => {
  const [user, setUser] = useState<User>(props.user);
  const [meta, setMeta] = useState<MetadataModel>(props.meta);
  const progressIcon = ProgressBarIcons[user.progressLevel];
  const progress_percent = (user.points / meta.maxPoints) * 100;
  // console.log(user);
  return (
    <div className="card card-flush gamphy-secondbg">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="ava-container-lg mx-auto">
              <img
                src={AvatarsPic[user.avatarCode]}
                className="avatar-position"
              />
              <img
                src={FramesPic[user.frameCode]}
                className="ava-frame-position"
              />
            </div>
          </div>
          <div className="col-lg-8 my-auto ava-user-text">
            <h3 className="fs-2x">{user.fullname}</h3>
            <h3 className="fs-1 fw-lighter">
              Rank <span className="text-white fw-bolder fs-2x">#</span>
              <span className="text-dark fw-bolder fs-2x">{props.rank}</span>
            </h3>
          </div>
          <div className="col-12 text-center">
            <img
              src={leaderboard_frame}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="fs-6 mb-4">Level kamu saat ini :</h3>
            <img
              src={ProgressLevelIcon[user.progressLevel]}
              style={{ maxHeight: "100px" }}
            />
            <h3 className="fs-2x text-white">
              {ProgressLevelTitle[user.progressLevel]}
            </h3>
            <br />
            <div className="d-flex mx-4 my-4">
              <div
                className="prog-height w-100 gamphy-mainbg-light rounded"
                style={{ position: "relative" }}
              >
                <img src={progressIcon[0]} className="prog-icon" />
                <div
                  className="gamphy-mainbg rounded prog-height"
                  role="progressbar"
                  style={{
                    width: ProgressBarValue(1, progress_percent) + "%",
                  }}
                  aria-valuenow={ProgressBarValue(1, progress_percent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div
                className="prog-height w-100 gamphy-mainbg-light rounded"
                style={{ position: "relative" }}
              >
                <img src={progressIcon[1]} className="prog-icon" />
                <div
                  className="gamphy-mainbg rounded prog-height"
                  role="progressbar"
                  style={{
                    width: ProgressBarValue(2, progress_percent) + "%",
                  }}
                  aria-valuenow={ProgressBarValue(2, progress_percent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div
                className="prog-height w-100 gamphy-mainbg-light rounded"
                style={{ position: "relative" }}
              >
                <img src={progressIcon[2]} className="prog-icon" />
                <div
                  className="gamphy-mainbg rounded prog-height"
                  role="progressbar"
                  style={{
                    width: ProgressBarValue(3, progress_percent) + "%",
                  }}
                  aria-valuenow={ProgressBarValue(3, progress_percent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div
                className="prog-height w-100 gamphy-mainbg-light rounded"
                style={{ position: "relative" }}
              >
                <img src={progressIcon[3]} className="prog-icon" />
                <div
                  className="gamphy-mainbg rounded prog-height"
                  role="progressbar"
                  style={{
                    width: ProgressBarValue(4, progress_percent) + "%",
                  }}
                  aria-valuenow={ProgressBarValue(4, progress_percent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <h3 className="fs-4 fw-lighter text-white">
              ({((user.points / meta.maxPoints) * 100).toFixed(0)}% Completion)
            </h3>
            <h3 className="fs-4 fw-lighter">
              Butuh{" "}
              <span className="gamphy-maintext fw-bolder">
                {(meta.maxPoints - user.points).toFixed(0)}
              </span>{" "}
              poin lagi untuk ke peringkat selanjutnya!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
