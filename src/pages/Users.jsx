import React from 'react'
import { BsGithub } from 'react-icons/bs'

import { SearchBar, UserCard } from '../components/index'

const Users = () => {
  return (
    <>
      <div className="app__header">
        <BsGithub className='text-5xl' />
        <SearchBar />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-10 py-5 xl:px-40">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  )
}

export default Users