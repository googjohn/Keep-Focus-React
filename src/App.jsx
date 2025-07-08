import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Header from './componentsInUse/Header/Header'
import SettingsModal from './componentsInUse/SettingsModal/SettingsModal'
import useCountdown from './componentsInUse/Utility/Countdown';
import MainBody from './componentsInUse/MainBody/MainBody';
import { UseSavedSettings } from './componentsInUse/Utility/SaveSettings';
import './index.css'

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

  // call/initialize settings once if there is user input saved
  useEffect(() => {
    UseSavedSettings(setSettings)
  }, [])

  // init alarm audio
  const alarmRef = useRef(new Audio('/sound/alarm-buzzer.wav'));
  const alarmRefTimeoutId = useRef(null);
  const alarmObj = useMemo(() => {
    return { alarmRef, alarmRefTimeoutId }
  }, [])

  const modeSelection = {
    'focus-on': settings.focusOn,
    'short-break': settings.shortBreak,
    'long-break': settings.longBreak
  }

  let initialDuration = modeSelection[selectedMode] * 60

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

    const keyObj = {
      'focus-on': 'focusOn',
      'short-break': 'shortBreak',
      'long-break': 'longBreak',
      'interval': 'interval',
    }
    let keyToUpdate = keyObj[name]
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
        <Header
          timeleft={timeleft}
          isRunning={isRunning}
          duration={initialDuration}
          handleOpenModal={handleOpenModal}
        />
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
          alarmRefObj={alarmObj}
        />
      </div>
    </>
  )
}