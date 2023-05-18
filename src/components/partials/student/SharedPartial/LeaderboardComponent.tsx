import React, { useState } from "react";
// @ts-ignore
import ava from "~/src/assets/avatars/male/3.png";
// @ts-ignore
import ava_frame from "~/src/assets/avatars/frames/level_4/8.png";
// @ts-ignore
import first_place from "~/src/assets/icons/leaderboard/first.png";
// @ts-ignore
import second_place from "~/src/assets/icons/leaderboard/second.png";
// @ts-ignore
import third_place from "~/src/assets/icons/leaderboard/third.png";
// @ts-ignore
import leaderboard_frame from "~/src/assets/icons/leaderboard/leaderboard_frame.png";

import { UserLeaderboard } from "../../../../models/User";
import { AvatarsPic, FramesPic } from "../../../../lib/Tools";
class LeaderboardParams {
  leaderboards: Array<UserLeaderboard>;
}

const RankNumberComponent = (idx) => {
  var num = idx + 1;
  if (num == 1) {
    return <img src={first_place} className="rank-img" />;
  } else if (num == 2) {
    return <img src={second_place} className="rank-img" />;
  } else if (num == 3) {
    return <img src={third_place} className="rank-img" />;
  } else {
    return <h3 className="fs-2 fw-bolder m-rank-text">{num}th</h3>;
  }
};

export const LeaderboardComponent = (props: LeaderboardParams) => {
  const [leaderboards, setLeaderboards] = useState<Array<UserLeaderboard>>(
    props.leaderboards
  );

  return (
    <div className="card card-flush gamphy-secondbg">
      <div className="card-body">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="fs-2hx">Leaderboard</h3>
            <img
              src={leaderboard_frame}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <table className="table gamphy-secondbg-light round-corner">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    <span className="fs-2 fw-bolder">#</span>
                  </th>
                  <th scope="col" className="text-center">
                    <span className="fs-2 fw-bolder">Name</span>
                  </th>
                  <th scope="col" className="text-center">
                    <span className="fs-2 fw-bolder">Pts.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboards.map((user, idx) => {
                  return (
                    <tr>
                      <td scope="row" className="text-center p-auto">
                        {RankNumberComponent(idx)}
                      </td>
                      <td>
                        <div className="leaderboard-name">
                          <div className="ava-container-md">
                            <img
                              src={AvatarsPic[user.avatarCode]}
                              className="avatar-position"
                            />
                            <img
                              src={FramesPic[user.frameCode]}
                              className="ava-frame-position"
                            />
                          </div>
                          <h3 className="fs-4 m-rank-text">{user.fullname}</h3>
                        </div>
                      </td>
                      <td>
                        <h3 className="fs-4 fw-bolder m-rank-text text-center">
                          {user.points.toFixed(0)}
                          <span className="fs-6 fw-lighter">pts.</span>
                        </h3>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
