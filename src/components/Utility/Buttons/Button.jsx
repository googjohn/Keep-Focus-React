
const Button = ({ buttonText, onclick, className = '', ...rest }) => {

  const buttonBaseStyle = `cursor-pointer border-0 bg-[#ffffff4d] hover:opacity-85 rounded-[5px] p-[10px] font-semibold`
  const allClassNames = `${buttonBaseStyle} ${className}`;

  return (
    <button
      type="button"
      className={allClassNames}
      {...rest}
      onClick={onclick}
    >
      {buttonText}
    </button>
  )
}

export default Button;