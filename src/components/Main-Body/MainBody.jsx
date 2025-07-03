import Button from "../Utility/Buttons/Button";
import { UseAppContext } from "../Utility/AppContenxt/UseAppContext";
import React, { useEffect } from "react";
import TimeDisplay from "../Utility/Timer/TimeDisplay";
import { useTimerFunction } from "../Utility/Timer/TimerFunction";


const MainBody = () => {
  const userInput = 15;
  const optionButtonsClassNames = `option-button min-w-[70px] text-white`;

  const { isActive, setIsActive, setTimeleft, timeleft } = useTimerFunction(userInput)
  const { selected, updateSelected } = UseAppContext();
  // add class to document.body
  useEffect(() => {

    const allClasses = ['focus-on', 'short-break', 'long-break']

    // always remove the previous state
    allClasses.forEach(className => {
      document.body.classList.remove(className);
    })

    document.body.classList.add(selected);

    // clean up function:
    return () => {
      allClasses.forEach(className => {
        document.body.classList.remove(className);
      })
    }

  }, [selected])

  return (
    <main className="mt-8 mx-auto max-w-[35vw] min-w-[400px] min-h-full">
      <div id="options-container" className="w-full min-h-[300px] p-5 flex flex-col justify-between items-center relative bg-[#ffffff4d] rounded-lg overflow-hidden">
        <svg className="hidden progress-svg" width="100%" height="100%">
          <rect className="progress-rect" x="0" y="0" width="100%" height="100%" />
        </svg>
        <div id="option-buttons" className="flex gap-1.5">
          <Button
            buttonText={"Focus On"}
            className={`focus-on ${optionButtonsClassNames}`}
            name="focus-on"
            data-selected={selected === 'focus-on'}
            onclick={updateSelected}
          />
          <Button
            buttonText={"Short Break"}
            className={`short-break ${optionButtonsClassNames}`}
            name="short-break"
            data-selected={selected === 'short-break'}
            onclick={updateSelected}
          />
          <Button
            buttonText={"Long Break"}
            className={`long-break ${optionButtonsClassNames}`}
            name="long-break"
            data-selected={selected === 'long-break'}
            onclick={updateSelected}
          />
        </div>
        <div id="time-container">
          <div id="clock-display">
            <TimeDisplay duration={timeleft} />
          </div>
        </div>
        <div id="start-button-container">
          <Button
            buttonText={isActive ? 'Pause' : 'Start'}
            data-timer-active="false"
            value="start"
            id="start-button"
            className="min-w-[150px] text-2xl uppercase"
            onclick={() => {
              setIsActive(!isActive)
              if (timeleft === 0 && !isActive) {
                setTimeleft(userInput)
                setIsActive(true)
              } else {
                setTimeleft(timeleft)
              }
            }}
          />
        </div>
      </div>
      <div id="extras" className="mt-8 ">
        <div id="message-container" className="text-center text-[#dad7d7] text-[1.2rem]">
          <p id="focus-count">#1</p>
          <p id="message-text">Time to focus!</p>
          <div id="quote" className="mt-8 p-5 text-[1.3rem] font-semibold text-black rounded-lg bg-[#ffffff4d]"></div>
        </div>
      </div>
    </main>
  )
}

export default MainBody;