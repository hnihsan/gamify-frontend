import React from "react";
import { useEffect, useState } from "react";

const useCountdown = ({ duration }) => {
  const startTime = Date.now() / 1000; // in Unix
  const endTime = startTime + duration;

  const [countDown, setCountDown] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(endTime - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <h3>
      Time left: <ReturnValues countDown={countDown} />
    </h3>
  );
};

const ReturnValues = ({ countDown }) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  // return [days, hours, minutes, seconds];
  return (
    <>
      {hours}:{minutes}:{seconds}
    </>
  );
};

export default useCountdown;
