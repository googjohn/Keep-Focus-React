import { useState } from 'react'
import Header from './componentsInUse/Header/Header'
import './index.css'

export default function App() {
  // "focus-on" | "short-break" | "long-break"
  const [selectedMode, setSelectedMode] = useState('focus-on')

  const handleOpenModal = () => {
    setSelectedMode(!selectedMode)
  }
  return (
    <>
      <div id="App" className={selectedMode}>
        <Header handleOpenModal={handleOpenModal} />
        {/* <MainBody /> */}
        {/* <Modal /> */}
      </div>
    </>
  )
}