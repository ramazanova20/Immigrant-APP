import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Main from './components/Main/Main'
import FirstSteps from './components/Main/FirstSteps'
import KnowledgeBase from './components/Main/KnowledgeBase'
import Survey from './components/Main/Survey'
import Help from './components/Main/Help'
import Fag from './components/Main/Fag'
import Resources from './components/Main/Resources'
import MapLocations from './components/Main/MapLocations'
import Emergency from './components/Main/Emergency'


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
          <Route path="/fag" element={<Fag/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/mapLocations" element={<MapLocations/>} />
          <Route path="/emergency" element={<Emergency/>} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
