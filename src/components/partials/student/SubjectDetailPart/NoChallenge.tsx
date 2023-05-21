import React, { useEffect, useState } from "react";
// @ts-ignore
import ava_frame from "~/src/assets/icons/sorry.png";

class Prop {
  onReloadFn: () => void;
}

export const NoChallenge = ({ onReloadFn }: Prop) => {
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
              <div className="row">
                <div className="col-12 text-center">
                  <h3 className="fs-2x fw-lighter">
                    Oops! Terjadi kesalahan memuat challenge!
                  </h3>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="btn gamphy-mainbg"
                    onClick={() => onReloadFn()}
                  >
                    <i className="bi-arrow-clockwise fs-2hx"></i>
                    &nbsp;Muat Ulang Soal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
