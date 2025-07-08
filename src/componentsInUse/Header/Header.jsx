import Button from "../Utility/Button"
import TimerIndicator from "../Utility/TimerIndicator"

export default function Header({ timeleft, isRunning, duration, handleOpenModal }) {
  const baseStyle = `relative max-w-[550px] min-w-[400px]
    h-[80px] p-[10px] m-auto text-gray-200 flex justify-between
    items-center border-[#8a8a8a] border-b-2`

  return (
    <>
      <header className={baseStyle}>
        <AppTitle title={'Keep Focus'} />
        <SettingsButton handleOnClick={handleOpenModal} />
        <TimerIndicator
          timeleft={timeleft}
          isRunning={isRunning}
          duration={duration}
        />
      </header>
    </>
  )
}

function AppTitle({ title }) {
  return (
    <div id='app-title'>
      <h2 className='text-3xl font-medium pl-[10px] text-shadow'>{title}</h2>
    </div>
  )
}

function SettingsButton({ handleOnClick }) {
  return (
    <div id='settings-modal'>
      <Button
        buttonText={'Settings'}
        customStyle={"bg-[#ffffff4d]"}
        handleClick={handleOnClick}
      />
    </div>
  )
}