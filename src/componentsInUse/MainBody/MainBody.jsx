import { useState, useEffect } from "react";
import TimerControl from "./TimerControl";
import TimerDisplay from "./TimerDisplay";
import ModeSelector from "./ModeSelector";
import useAlarm from "../Utility/Alarm";

export default function MainBody({
  selectedMode,
  setSelectedMode,
  handleOnClickSelected,
  timeleft,
  setTimeleft,
  isRunning,
  setIsRunning,
  settings,
}) {
  const baseStyle = `w-full min-h-[300px] p-5 flex 
    flex-col justify-between items-center relative 
    bg-[#ffffff4d] rounded-lg overflow-hidden`;

  const { focusOn, shortBreak, longBreak, interval } = settings;
  const { playAndStopAlarm, alarmRef } = useAlarm();
  const [focusCount, setFocusCount] = useState(1);

  let duration;
  switch (selectedMode) {
    case 'focus-on': duration = focusOn; break;
    case 'short-break': duration = shortBreak; break;
    case 'long-break': duration = longBreak; break;
  }

  const MULTIPLIER = 1;
  useEffect(() => {
    setTimeleft(duration * MULTIPLIER)
  }, [selectedMode])

  // auto countdown
  useEffect(() => {
    let timer = undefined;

    if (timeleft <= 0) {
      playAndStopAlarm();

      timer = setTimeout(() => {
        if (selectedMode === 'focus-on') {
          if (focusCount % interval === 0) {
            setSelectedMode('long-break');
            setTimeleft(longBreak)
          } else {
            setSelectedMode('short-break')
            setTimeleft(shortBreak)
          }
        } else {
          setSelectedMode('focus-on')
          setTimeleft(focusOn)
          setFocusCount(prev => prev + 1)
        }
        if (!isRunning) {
          setIsRunning(true);
        }
      }, 1500)
    }

    return () => clearTimeout(timer)
  }, [timeleft, isRunning])

  const handleStartToggle = () => {
    setIsRunning(!isRunning)
  }
  return (
    <>
      <main className="mt-8 mx-auto max-w-[35vw] min-w-[400px] min-h-full">
        <div className={baseStyle}>
          <ModeSelector
            handleOnClickSelected={handleOnClickSelected}
            selectedMode={selectedMode}
          />
          <TimerDisplay duration={timeleft} />
          <TimerControl
            isRunning={isRunning}
            handleOnClick={handleStartToggle}
          />
        </div>
      </main>
    </>
  )
}
