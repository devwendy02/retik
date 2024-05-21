import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment.utc("2024-05-29T12:00:00.0");
export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <p>Deadline comes in</p> */}
      <p className="counter">
        {/* <span>{timeBetween.years()}yr </span>
        <span>{timeBetween.months()}m </span> */}
        <div className="counter-panel">
          <div className="counter-text">{timeBetween.days()}</div>
          <div className="panel-bottom">Days</div>
        </div>
        <div className="counter-panel">
          <div className="counter-text">{timeBetween.hours()}</div>
          <div className="panel-bottom">Hours</div>
        </div>
        <div className="counter-panel">
          <div className="counter-text">{timeBetween.minutes()}</div>
          <div className="panel-bottom">minutes</div>{" "}
        </div>
        <div className="counter-panel">
          <div className="counter-text">{timeBetween.seconds()}</div>
          <div className="panel-bottom">Seconds</div>
        </div>
      </p>
    </>
  );
};
