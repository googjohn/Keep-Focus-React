import { useAppContext } from "../Utility/AppContenxt/AppContext"
import Button from "../Utility/Buttons/Button"

const Header = () => {

  const { updateModalActive } = useAppContext();
  const baseClasses = `max-w-[40vw] min-w-[400px] h-full mx-auto px-[10px] py-[10px] flex justify-between items-center text-gray-200 border-[#b6b2b2] border-b-2`

  return (
    <header className={baseClasses}>
      <div className="" id="app-title">
        <h2 className="text-3xl">Keep Focus</h2>
      </div>
      <div className="" id="settings-modal">
        <Button
          buttonText={"Settings"}
          onclick={updateModalActive}
        />
      </div>
    </header>
  )
}

export default Header