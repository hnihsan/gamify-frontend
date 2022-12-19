import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 0,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper text-center">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

class CountDownProp {
  duration: number;
}

const CountDownTimerComponent = (prop: CountDownProp) => {
  const startTime = Date.now() / 1000; // in Unix
  const endTime = startTime + prop.duration;
  const remainingTime = endTime - startTime;

  return (
    <div className="d-flex justify-content-start">
      <div className="text-center">
        <h3>Time left :</h3>
        <div className="d-flex">
          <CountdownCircleTimer
            {...timerProps}
            colors="#EF798A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime(
                  "minutes",
                  getTimeMinutes(hourSeconds - elapsedTime)
                )}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#EF798A"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("seconds", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimerComponent;
