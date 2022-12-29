import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Discover, Users, UserDetail } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Discover /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/user-detail' element={ <UserDetail /> } />
    </Routes>
  )
}

export default App