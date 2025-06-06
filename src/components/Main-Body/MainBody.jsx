import OpenCloseModal from "../Utility/Buttons/ActionButtons/OpenCloseModal";
import Button from "../Utility/Buttons/Button";

const MainBody = () => {
  const optionButtonsClassNames = `min-w-[70px] text-white font-semibold option-button`
  return (
    <main className="mt-8 mx-auto max-w-[35vw] min-w-[400px] min-h-full">
      <div id="options-container" className="w-full min-h-[300px] p-5 flex flex-col justify-between items-center relative bg-[#ffffff4d] rounded-lg overflow-hidden">
        <svg className="hidden progress-svg" width="100%" height="100%">
          <rect className="progress-rect" x="0" y="0" width="100%" height="100%" />
        </svg>
        <div id="option-buttons" className="flex gap-1.5">
          <Button buttonText={"Focus On"} className={`${optionButtonsClassNames} focus-on`} data-selected='true' />
          <Button buttonText={"Short Break"} className={`${optionButtonsClassNames} short-break`} data-selected='false' />
          <Button buttonText={"Long Break"} className={`${optionButtonsClassNames} long-break`} data-selected='false' />
        </div>
        <div id="time-container">
          <div id="clock-display">
            <span className="font-medium text-[7.6em] text-white">25:00</span>
          </div>
        </div>
        <div id="start-button-container">
          <Button
            buttonText={"Start"}
            data-timer-active="false"
            value="start"
            id="start-button"
            className="min-w-[150px] text-2xl font-bold text-[#422d5e] uppercase"
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