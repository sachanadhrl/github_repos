import React from 'react'
import { BsGithub } from 'react-icons/bs'

import '../assets/scss/pages/discover.scss'
import { SearchBar } from '../components/index'

const Discover = () => {

  return (
    <div className="app__discover">
      <BsGithub />
      <SearchBar />
    </div>
  )
}

export default Discover