import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/ProjectPage/Projects'
import Experience from './pages/ExperiencePage/Experience'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import Footer from './components/Footer/Footer'
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App