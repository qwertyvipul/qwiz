import React, { useEffect, useState } from "react";
import { getTimeString } from "../utils/time";

function Timer({ onTick }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setSeconds((prev) => {
          const next = prev + 1;
          onTick(next);
          return next;
        }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className="badge secondary">{getTimeString(seconds)}</span>;
}

export default React.memo(Timer);
