import { UseAppContext } from "../AppContenxt/UseAppContext"
import Button from "../Buttons/Button"

const Modal = () => {

  const { modalActive, updateModalActive } = UseAppContext()
  const classNames = `min-w-full min-h-full absolute top-0 right-0 pt-12 bg-[#807b7b3b]`

  return (
    <>
      <div
        id="modal-container"
        className={modalActive ? `${classNames}` : `hidden ${classNames}`}
        data-modal-active={modalActive}
      >
        <div id="modal" className="max-w-[400px] h-full m-auto bg-gray-50 rounded-lg">
          <div id="modal-header" className="border-[#b6b2b2] border-b-2 text-center text-[1.5rem] p-2.5">
            <h2 className="relative font-semibold text-[1.3rem] text-[#808080]">SETTING
              <Button
                buttonText={'X'}
                onclick={updateModalActive}
                className="absolute top-0 right-0 py-0 text-[#808080]"
                id="close-modal"
              />
            </h2>
          </div>
          <div id="modal-main" className="min-h-[450px] flex flex-col p-2.5">
            <div className="modal-section">
              <div className="modal-section-title">
                <h3 className="text-[1.2rem] font-semibold">TIMER</h3>
              </div>
              <div className="modal-content-container">
                <div className="modal-content-title text-[1.1rem] font-semibold text-[#4b4b4b] py-[5px]">
                  <h3>Time (minutes)</h3>
                </div>
                <div className="modal-content">
                  <div className="modal-items py-[5px] flex gap-[10px]">
                    <div className="item1">
                      <label htmlFor="modal-focus">Focus</label>
                      <input type="number" className="modal-input" name="focus-on" min="1" data-value="25" placeholder="25" id="modal-focus" />
                    </div>
                    <div className="item2">
                      <label htmlFor="modal-short-break">Short Break</label>
                      <input type="number" className="modal-input" name="short-break" min="1" data-value="5" placeholder="5" id="modal-short-break" />
                    </div>
                    <div className="item3">
                      <label htmlFor="modal-long-break">Long Break</label>
                      <input type="number" className="modal-input" name="long-break" min="1" data-value="15" placeholder="15" id="modal-long-break" />
                    </div>
                  </div>
                  <div className="modal-interval py-[5px]">
                    <label htmlFor="interval" className="modal-content-title">Long Break Interval</label>
                    <input type="number" className="modal-input interval" name="interval" min="3" placeholder="4" data-value="4" id="interval" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-section mt-auto">
              <div className="modal-section-title text-[1rem] text-[#808080] py-[5px]"></div>
              <div className="modal-items">
                <div className="item">
                  <Button
                    buttonText={'Save'}
                    onclick={updateModalActive}
                    className="min-w-[150px] font-bold block m-auto text-2xl uppercase"
                    id="save-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal