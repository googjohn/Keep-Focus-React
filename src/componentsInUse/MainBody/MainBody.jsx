import { useState, useEffect } from "react";
import TimerControl from "./TimerControl";
import TimerDisplay from "./TimerDisplay";
import ModeSelector from "./ModeSelector";
import useAlarm from "../Utility/Alarm";
import MessageQuote from "../MessageQuote/MessageQuote";
import { notificationRequest, showNotification } from "../Utility/Notification";

export default function MainBody({
  selectedMode,
  setSelectedMode,
  handleOnClickSelected,
  timeleft,
  setTimeleft,
  isRunning,
  setIsRunning,
  settings,
  alarmRefObj
}) {
  const baseStyle = `w-full min-h-[300px] p-5 flex 
    flex-col justify-between items-center relative 
    bg-[#ffffff4d] rounded-lg overflow-hidden`;

  const { focusOn, shortBreak, longBreak, interval } = settings;
  const { alarmRefTimeoutId } = alarmRefObj
  const { playAlarm, stopAlarm } = useAlarm(alarmRefObj);
  const [focusCount, setFocusCount] = useState(1);

  const modeSelection = {
    'focus-on': focusOn,
    'short-break': shortBreak,
    'long-break': longBreak
  }
  let duration = modeSelection[selectedMode];

  const MULTIPLIER = 1;
  useEffect(() => {
    setTimeleft(duration * MULTIPLIER)
  }, [duration])

  // auto countdown
  useEffect(() => {
    let timer = undefined;

    if (timeleft <= 0) {
      // playAlarm();
      // showNotification(selectedMode, focusCount % interval === 0)
      // alarmRefTimeoutId.current = setTimeout(stopAlarm, 3000)

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

    return () => {
      clearTimeout(timer);
    }
  }, [timeleft, isRunning])

  const handleStartToggle = () => {
    notificationRequest();
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
        <div id="quotes-message" className="mt-5">
          <MessageQuote
            selectedMode={selectedMode}
            focusCount={focusCount}
          />
        </div>
      </main>
    </>
  )
}