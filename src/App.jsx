// import { useState } from 'react'
import Header from './components/Header/Header'
import MainBody from './components/Main-Body/MainBody'
import Modal from './components/Utility/Modal/Modal'
import { AppContextProvider } from './components/Utility/AppContenxt/AppContext'
import './index.css'

export default function App() {
  return (
    <>
      <AppContextProvider>
        <Header />
        <MainBody />
        <Modal />
      </AppContextProvider>
    </>
  )
}