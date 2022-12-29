import React from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { HiOutlineUsers, HiOutlineLocationMarker, HiOutlineMail, HiOutlineLink } from 'react-icons/hi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

import { RepoList } from '../components'

const UserDetail = () => {
  return (
    <>
      <div className="app__header">
        <Link to={`/`}>
          <BiLeftArrowAlt className='text-3xl' />
        </Link>
        <div>
          <h3 className='text-2xl font-bold'>John Doe</h3>
        </div>
      </div>
      <div className="flex justify-start items-start gap-10 px-10 py-5 xl:px-40">
        <div className='w-2/6'>
          <img
            src="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            alt="User"
            className="w-full object-cover rounded-lg"
          />
          <h2 className='mt-3'>John Doe</h2>
          <h4 className='font-extralight text-lg'>johndoe</h4>
          <p className='font-light mt-3'>JavaScript Enthusiast & Educator</p>
          <div className='flex items-center gap-2 text-sm mt-3'>
            <HiOutlineUsers className='text-gray-300/80' />
            <p className='font-semibold'>
              999.1k <span className="font-light text-gray-300/80">followers</span>
            </p>
            -
            <p className='font-semibold'>
              15 <span className="font-light text-gray-300/80">following</span>
            </p>
          </div>
          <div className='flex items-center gap-2 font-light text-sm mt-3'>
            <HiOutlineBuildingOffice2 className='text-gray-300/80' />
            <p>JavaScript Mastery</p>
          </div>
          <div className='flex items-center gap-2 font-light text-sm mt-1'>
            <HiOutlineLocationMarker className='text-gray-300/80' />
            <p>Croatia</p>
          </div>
          <div className='flex items-center gap-2 font-light text-sm mt-1'>
            <HiOutlineMail className='text-gray-300/80' />
            <p>contact@jsmastery.pro</p>
          </div>
          <div className='flex items-center gap-2 font-light text-sm mt-1'>
            <HiOutlineLink className='text-gray-300/80' />
            <p>jsmastery.pro</p>
          </div>
        </div>
        <div className='w-4/6'>
          <h2>Repositories (66)</h2>
          <div className='divide-y divide-gray-500'>
            <RepoList />
            <RepoList />
            <RepoList />
            <RepoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail