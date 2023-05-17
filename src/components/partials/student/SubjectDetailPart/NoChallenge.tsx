import React, { useEffect, useState } from "react";
// @ts-ignore
import ava_frame from "~/src/assets/icons/sorry.png";

export const NoChallenge = () => {
  return (
    <div className="col-12">
      <div className="card card-border-square card-flush">
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={ava_frame}
                style={{ maxHeight: "100px" }}
                className="mx-auto"
              />
            </div>
            <div className="col-12">
              <h3 className="fs-2x fw-lighter">
                Maaf ya, belum ada challenge yang bisa dikerjakan untuk materi
                ini . .
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
