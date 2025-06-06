const Button = ({ buttonText, onclick, className = '', ...rest }) => {
  const allClassNames = `p-[10px] bg-[#ffffff4d] border-0 rounded-[5px] cursor-pointer ${className}`
  return (
    <button
      type="button"
      onClick={onclick}
      className={allClassNames}
      {...rest}>
      {buttonText}
    </button>
  )
}

export default Button;