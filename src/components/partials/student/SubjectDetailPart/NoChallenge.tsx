import React, { useEffect, useState } from "react";
import { Challenge } from "../../../../models/Challenge";
import { Link } from "react-router-dom";

export const NoChallenge = () => {
  return (
    <div className="col-12">
      <div className="card card-border-square card-flush">
        <div className="card-body d-flex justify-content-center">
          <h3>No Challenge available for this subject</h3>
        </div>
      </div>
    </div>
  );
};
