import { useState, useEffect } from "react";

export default function useCountdown(initialDuration = 25) {
  const INTERVAL = 1000;
  const [isRunning, setIsRunning] = useState(false);
  const [timeleft, setTimeleft] = useState(Math.max(0, initialDuration))

  useEffect(() => {
    let timer = undefined;

    if (timeleft <= 0) {
      setIsRunning(false);
      return;
    }
    if (isRunning) {
      timer = setInterval(() => {
        setTimeleft(prev => {
          const newTime = prev - 1;
          return newTime
        })
      }, INTERVAL)
    }

    return () => clearInterval(timer)
  }, [isRunning, timeleft])

  return { timeleft, setTimeleft, isRunning, setIsRunning }
}

export function formatTime(duration) {
  const minutes = Math.floor(duration / 60);
  const formattedMinutes = String(minutes).padStart(2, '0');

  const seconds = duration % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`
}