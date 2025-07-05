import Button from "../Utility/Button"

export default function ModeSelector({ handleOnClickSelected, selectedMode }) {
  const baseStyle = `option-button min-w-[70px] text-white bg-[#ffffff4d]`

  return (
    <>
      <div id="option-buttons" className="flex gap-1.5">
        <Button
          buttonText={"Focus On"}
          customStyle={`focus-on ${baseStyle}`}
          name={"focus-on"}
          dataSelected={selectedMode === "focus-on"}
          handleClick={handleOnClickSelected}
        />
        <Button
          buttonText={"Short Break"}
          customStyle={`short-break ${baseStyle}`}
          name={"short-break"}
          dataSelected={selectedMode === "short-break"}
          handleClick={handleOnClickSelected}
        />
        <Button
          buttonText={"Long Break"}
          customStyle={`long-break ${baseStyle}`}
          name={"long-break"}
          dataSelected={selectedMode === "long-break"}
          handleClick={handleOnClickSelected}
        />
      </div>
    </>
  )
}