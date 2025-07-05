import { formatTime } from "../Utility/Countdown"

export default function TimerDisplay({ duration }) {
  return (
    <>
      <div id="time-container">
        <div id="clock-display">
          <span className="text-9xl font-medium text-shadow">{formatTime(duration)}</span>
        </div>
      </div>
    </>
  )
}