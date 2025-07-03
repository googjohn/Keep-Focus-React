import { useState, useEffect } from "react";
// import { UseAppContext } from "../AppContenxt/UseAppContext";

// costum hook for counting down
export function useTimerFunction(duration) {
  const INTERVAL = 1000;

  const [timeleft, setTimeleft] = useState(() => Math.max(0, duration));
  const [isActive, setIsActive] = useState(false);
  console.log('time-left ', timeleft, 'is active ', isActive)

  useEffect(() => {
    let timerId = undefined;

    if (timeleft <= 0) {
      setIsActive(false);
      return;
    }

    if (isActive) {
      timerId = setInterval(() => {
        setTimeleft(prev => {
          const newtime = prev - 1;
          return newtime;
        })
      }, INTERVAL)
    }

    return () => clearInterval(timerId)
  }, [timeleft, isActive])

  return { timeleft, setTimeleft, isActive, setIsActive }
}

export function formatTime(duration) {
  const minutes = Math.floor(duration / 60);
  const formattedMinutes = String(minutes).padStart(2, '0');

  const seconds = duration % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`
}