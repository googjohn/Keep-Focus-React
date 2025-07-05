import Button from "../Utility/Button"

export default function TimerControl({ isRunning, handleOnClick }) {
  return (
    <>
      <div id="start-button-container">
        <Button
          buttonText={isRunning ? 'Stop' : 'Start'}
          dataTimerActive={isRunning}
          value={isRunning ? 'Stop' : 'Start'}
          id="start-button"
          customStyle="min-w-[150px] text-2xl uppercase bg-[#ffffff4d]"
          handleClick={handleOnClick}
        />
      </div>
    </>
  )
}