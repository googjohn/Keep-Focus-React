import React, { useState, useEffect } from 'react';

// custom hook using useState
function useCountdown(duration) {
  const [timeleft, setTimeleft] = useState(Math.max(0, duration));
  // const [isTimeRunning, setIsTimeRunning] = useState(false);

  const INTERVAL = 1000;

  useEffect(() => {
    if (timeleft <= 0) return;

    const timer = setInterval(() => {
      setTimeleft(prev => {
        const newtime = prev - 1
        return Math.max(0, newtime)
      });
    }, INTERVAL)

    return () => clearInterval(timer)
  }, [timeleft])

  return timeleft
}

function formatTime(duration) {
  const minutes = Math.floor(duration / 60);
  const formattedMinutes = String(minutes).padStart(2, '0');

  const seconds = duration % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`
}

export default function TimeDisplay({ duration }) {
  const timeleft = useCountdown(duration);
  return (
    <span className="font-medium text-[7.6em] text-white">{formatTime(timeleft)}</span>
  )
}

