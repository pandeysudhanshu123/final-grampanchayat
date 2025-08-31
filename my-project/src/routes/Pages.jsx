import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Gallery from '../components/Gallery'
import News from '../components/News'
import PanchayatMember from '../components/PanchayatMember'
import Contact from '../components/Contact'
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/news' element={<News />} />
        <Route path='/members' element={<PanchayatMember />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Pages
