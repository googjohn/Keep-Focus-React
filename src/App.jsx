import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'
import Header from './componentsInUse/Header/Header'
import SettingsModal from './componentsInUse/SettingsModal/SettingsModal'
import useCountdown from './componentsInUse/Utility/Countdown';
import MainBody from './componentsInUse/MainBody/MainBody';
import useAlarm from './componentsInUse/Utility/Alarm';

export default function App() {
  // "focus-on" | "short-break" | "long-break"
  const [selectedMode, setSelectedMode] = useState('focus-on');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // updates come from settings modal input
  const [settings, setSettings] = useState({
    focusOn: 25,
    shortBreak: 5,
    longBreak: 15,
    interval: 4
  });

  let initialDuration;
  switch (selectedMode) {
    case 'focus-on': initialDuration = settings.focusOn; break;
    case 'short-break': initialDuration = settings.shortBreak; break;
    case 'long-break': initialDuration = settings.longBreak; break;
  }

  // init timeleft
  const { timeleft, setTimeleft, isRunning, setIsRunning } = useCountdown(initialDuration);

  /* handlers */
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSelectedMode = (e) => {
    const { name } = e.target
    if (name === selectedMode) return;
    setSelectedMode(name);
    setIsRunning(false)
  }

  const handleOnChangeSettings = useCallback((e) => {
    const { name, value } = e.target;
    setIsRunning(false);

    let keyToUpdate;
    switch (name) {
      case 'focus-on': keyToUpdate = 'focusOn'; break;
      case 'short-break': keyToUpdate = 'shortBreak'; break;
      case 'long-break': keyToUpdate = 'longBreak'; break;
      case 'interval': keyToUpdate = 'interval'; break;
      default: return;
    }
    setSettings(prev => {
      return {
        ...prev,
        [keyToUpdate]: +value,
      }
    })
  }, [])

  return (
    <>
      <div id="App" className={selectedMode}>
        <Header handleOpenModal={handleOpenModal} />
        <SettingsModal
          settings={settings}
          isModalOpen={isModalOpen}
          handleOnChange={handleOnChangeSettings}
          handleOpenModal={handleOpenModal}
        />
        <MainBody
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          handleOnClickSelected={handleSelectedMode}
          timeleft={timeleft}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setTimeleft={setTimeleft}
          settings={settings}
        // alarm={{ playAndStopAlarm, alarmRef }}
        />
      </div>
    </>
  )
}