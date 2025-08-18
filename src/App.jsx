import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Main from './components/Main/Main'
import FirstSteps from './components/Main/FirstSteps'
import KnowledgeBase from './components/Main/KnowledgeBase'
import Survey from './components/Main/Survey'
import Help from './components/Main/Help'


function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/firststeps" element={<FirstSteps/>} />
          <Route path="/knowledgebase" element={<KnowledgeBase/>} />
          <Route path="/survey" element={<Survey/>} />
          <Route path="/help" element={<Help/>} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
