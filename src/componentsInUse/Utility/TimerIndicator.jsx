import { useState, useEffect } from "react";

export default function TimerIndicator({ timeleft, isRunning, duration }) {
  const [width, setWidth] = useState(0)
  const [bgColor, setBgColor] = useState('#dadada')

  useEffect(() => {
    if (isRunning && duration > 0) {
      let timebarWidth = (((duration - timeleft) / duration) * 100)
      setWidth(timebarWidth)
      if (timebarWidth === 100) {
        setBgColor('white')
      } else {
        setBgColor('#dadada')
      }
    } else if (!isRunning) {
      setWidth(0)
    }
  }, [timeleft, isRunning, duration])
  return (
    <>
      <div id="timer-indicator-bar" style={{ width: `${width}%`, backgroundColor: bgColor }}></div>
    </>
  )
}