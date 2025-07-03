import Button from "../Utility/Button"

export default function Header({ handleOpenModal }) {
  const baseStyle = `relative max-w-[550px] min-w-[400px]
    h-[80px] p-[10px] m-auto text-gray-200 flex justify-between
    items-center border-[#b6b2b2] border-b-2`

  return (
    <>
      <header className={baseStyle}>
        <AppTitle title={'Keep Focus'} />
        <SettingsButton handleOnClick={handleOpenModal} />
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