"use client";

import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [count, setCount] = useState(0);
  const [on, setProgress] = useState(false);

  useEffect(() => {
    let interval;
    if (on) {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= 100) {
            setProgress(false);
            return c;
          }
          return c + 1;
        });
      }, 30);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [on]);

  return (
    <>
      <div className="progress-bar">
        <div
          style={{
            width: `${count}%`,
            backgroundColor: "black",
            height: "30px",
            border: "0px solid black",
            margin: "0px",
            padding: "0px",
          }}
        ></div>
      </div>
      <div>{count}%</div>
      <div className="buttons-container">
        <button onClick={() => setProgress(true)}>START</button>
        <button onClick={() => setProgress(false)}>STOP</button>
      </div>
    </>
  );
}
