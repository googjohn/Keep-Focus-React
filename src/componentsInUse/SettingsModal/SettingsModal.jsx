import Button from "../Utility/Button"
import { SaveSettings } from "../Utility/SaveSettings"

export default function SettingsModal({
  settings,
  isModalOpen,
  handleOnChange,
  handleOpenModal,
}) {
  const containerStyle = "fixed z-20 top-0 right-0 w-screen h-screen bg-[#807b7b3b]"

  return (
    <>
      <div
        id="modal-container"
        className={isModalOpen ? containerStyle : `hidden ${containerStyle}`}
        data-modal-active={isModalOpen}
      >
        <Modal
          handleOnChange={handleOnChange}
          handleOnClick={handleOpenModal}
          settings={settings}
        />
      </div>
    </>
  )
}

function Modal({ handleOnClick, handleOnChange, settings }) {
  const modalStyle = "max-w-[400px] mt-[80px] h-auto m-auto bg-gray-50 border rounded-lg"
  const handleOpenModalAndSaveSettings = () => {
    handleOnClick();
    SaveSettings(settings);
  }
  return (
    <>
      <div id="modal" className={modalStyle}>
        <ModalHeader
          modalHeaderTitle={"Settings"}
          handleOnClick={handleOnClick}
        />
        <ModalMain>
          <ModalSection sectionTitle={'Timer'}>
            <ModalContent contentTitle={'Time (minutes)'}>
              <Content
                contentType={'input-group'}
                handleOnChange={handleOnChange}
                handleOnClick={handleOnClick}
                settings={settings}
              />
            </ModalContent>
          </ModalSection>
          <ModalSection sectionTitle={''}>
            <ModalContent contentTitle={''}>
              <Content
                contentType={'button-group'}
                handleOnChange={handleOnChange}
                handleOnClick={handleOpenModalAndSaveSettings}
                settings={settings}
              />
            </ModalContent>
          </ModalSection>
        </ModalMain>
      </div>
    </>
  )
}

function ModalMain({ children }) {
  return (
    <>
      <div id="modal-main" className="min-h-[450px] flex flex-col p-2.5">
        {children}
      </div>
    </>
  )
}

function ModalSection({ children, sectionTitle }) {
  return (
    <>
      <div className="modal-section">
        <div className="modal-section-title">
          <h3 className="text-[1.2rem] text-[#808080] font-semibold">{sectionTitle}</h3>
        </div>
        {children}
      </div>
    </>
  )
}

function ModalHeader({ modalHeaderTitle, handleOnClick }) {
  const modalHeaderStyle = "border-[#b6b2b2] border-b-2 text-center text-[1.5rem] p-2.5"
  return (
    <>
      <div id="modal-header" className={modalHeaderStyle}>
        <h2 className="relative font-semibold text-[1.3rem] text-[#808080]">
          {modalHeaderTitle}
          <Button
            buttonText={'X'}
            handleClick={handleOnClick}
            customStyle={"absolute top-0 right-0 py-1 bg-[#b6b2b23b] text-[#808080]"}
          />
        </h2>
      </div>
    </>
  )
}

function ModalContent({ contentTitle, children }) {
  return (
    <>
      <div className="modal-content-container">
        <div className="modal-content-title text-[1.1rem] font-semibold text-[#808080] py-[5px]">
          <h3>{contentTitle}</h3>
        </div>
        {children}
      </div>
    </>
  )
}

function Content({ contentType, handleOnClick, handleOnChange, settings }) {
  return (
    <>
      {
        contentType === 'input-group' ?
          <InputGroup handleOnChange={handleOnChange} settings={settings} /> :
          <ButtonGroup handleOnClick={handleOnClick} />
      }
    </>
  )
}

function InputGroup({ handleOnChange, settings }) {
  const { focusOn, shortBreak, longBreak, interval } = settings;
  return (
    <>
      <div className="modal-content text-[#808080]">
        <div className="modal-items py-[5px] flex gap-[10px]">
          <div className="input-group">
            <ModalInput
              label={"Focus"}
              name={"focus-on"}
              id={"modal-focus-on"}
              value={focusOn}
              handleOnChange={handleOnChange} />
          </div>
          <div className="input-group">
            <ModalInput
              label={"Short Break"}
              name={"short-break"}
              id={"modal-short-break"}
              value={shortBreak}
              handleOnChange={handleOnChange} />
          </div>
          <div className="input-group">
            <ModalInput
              label={"Long Break"}
              name={"long-break"}
              id={"modal-long-break"}
              value={longBreak}
              handleOnChange={handleOnChange} />
          </div>
        </div>
      </div>
      <div className="modal-interval py-[5px] text-[#808080]">
        <ModalInput
          label={"Interval"}
          name={"interval"}
          id={"modal-interval"}
          className={"interval"}
          min={3}
          value={interval}
          handleOnChange={handleOnChange}
        />
      </div>
    </>
  )
}

function ButtonGroup({ handleOnClick }) {
  return (
    <div className="modal-content text-[#808080]">
      <div className="modal-items">
        <div className="button-group">
          <Button
            id={"save-button"}
            buttonText={'Save'}
            customStyle="min-w-[150px] font-bold block mt-40 mx-auto text-2xl uppercase "
            handleClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  )
}

function ModalInput({ handleOnChange, label, name, id, value, min, className }) {
  const baseClass = 'modal-input'
  const classNames = `${baseClass} ${className}`

  return (
    <>
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="number"
        value={value || 1}
        min={min || 1}
        className={classNames}
        onChange={handleOnChange}
      />
    </>
  )
}