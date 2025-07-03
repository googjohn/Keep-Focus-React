export default function Button({
  id,
  type,
  name,
  buttonText,
  customStyle,
  handleClick,
  dataSelected,
  dataTimerActive
}) {
  const baseStyle = `cursor-pointer border-0 hover:opacity-85
   leading-none rounded-[5px] p-2.5 box-shadow`
  const classNames = `${baseStyle} ${customStyle}`

  return (
    <>
      <button
        id={id}
        type={type}
        name={name}
        className={classNames}
        data-selected={dataSelected}
        data-timer-active={dataTimerActive}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  )
}