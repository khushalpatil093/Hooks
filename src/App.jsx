import React from 'react'
import './App.css'
import HookUseState from './AllHooks/HookUseState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LearnHooks from './AllHooks/LearnHooks'
import Navbar from './components/Navbar'
import HookUseEffect from './AllHooks/HookUseEffect'
import HookUseMemo from './AllHooks/HookUseMemo'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LearnHooks/>}/>
        <Route path="/hookUseState" element={<HookUseState/>}/>
        <Route path="/hookUseEffect" element={<HookUseEffect/>}/>
        <Route path="/hookUseMemo" element={<HookUseMemo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App