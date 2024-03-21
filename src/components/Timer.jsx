import React, { useEffect, useState } from "react";
import { getTimeString } from "../utils/time";

function Timer({ onTick }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    onTick(seconds);
  });
  return <span className="badge secondary">{getTimeString(seconds)}</span>;
}

export default React.memo(Timer);
