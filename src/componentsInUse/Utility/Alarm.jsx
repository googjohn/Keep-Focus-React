import { useCallback } from "react"

export default function useAlarm(alarmRefObj) {
  const { alarmRef, alarmRefTimeoutId } = alarmRefObj

  const playAlarm = useCallback(() => {
    if (alarmRef.current) {
      if (alarmRefTimeoutId.current) {
        clearTimeout(alarmRefTimeoutId.current)
      }
      alarmRef.current.currentTime = 0;
      alarmRef.current.play()
        .catch(error => console.error('Error playing alarm', error))
    }
  }, [])

  const stopAlarm = useCallback(() => {
    if (alarmRef.current && !alarmRef.current.paused) {
      if (alarmRefTimeoutId.current) {
        clearTimeout(alarmRefTimeoutId.current)
      }
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
      alarmRefTimeoutId.current = null;
    }
  }, [])

  return { playAlarm, stopAlarm }
}