import { formatTime } from './TimerFunction';

export default function TimeDisplay({ duration }) {
  return (
    <>
      <span className="font-medium text-[7.6em] text-white">{formatTime(duration)}</span>
      {!duration && (
        <p className='font-medium text-2xl text-white text-center'>Countdown complete!</p>
      )}
    </>
  )
}

