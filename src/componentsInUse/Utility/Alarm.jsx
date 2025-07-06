import { useRef, useEffect, useCallback } from "react"

export default function useAlarm() {
  const alarmRef = useRef(null);
  const alarmRefTimeoutId = useRef(null);

  useEffect(() => {
    if (!alarmRef.current) {
      alarmRef.current = new Audio('/sound/alarm_buzzer.wav');
    }

    return () => {
      if (alarmRef.current) {
        alarmRef.current.pause();
        alarmRef.current = null
      }
    }
  }, []);

  const playAndStopAlarm = useCallback(() => {
    if (alarmRef.current) {
      if (alarmRefTimeoutId.current) {
        clearTimeout(alarmRefTimeoutId.current)
      }
      alarmRef.current.src = "/sound/alarm_buzzer.wav"
      alarmRef.current.currentTime = 0;
      alarmRef.current.play()
        .then(() => {
          alarmRefTimeoutId.current = setTimeout(() => {
            alarmRef.current.pause();
            alarmRef.current.currentTime = 0;
            alarmRefTimeoutId.current = null;
          }, 3000)
        })
        .catch(error => {
          console.error('Error playing alarm', error)
        })
    }
  }, [])

  return {
    playAndStopAlarm,
    alarmRef
  }
}