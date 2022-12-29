import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'
import { VscCircleFilled } from 'react-icons/vsc'

const RepoList = () => {
  return (    
    <div className="flex flex-col gap-3 text-sm py-10">
      <h4>Repos</h4>
      <p className="text-gray-300/80">
        This is a code repository for the corresponding YouTube video. In this video, we will create an interesting react project from scratch - A React Advice App. We're going to use React on the front en…
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="pills">react</span>
        <span className="pills">reactjs</span>
        <span className="pills">vuejs</span>
        <span className="pills">tailwindcss</span>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex items-center text-gray-300/80">
          <VscCircleFilled className='text-teal-500 text-lg' />
          Javascript
        </span>
        <span className="flex items-center text-gray-300/80">
          <AiOutlineStar className='mr-1' />
          15
        </span>
        <span className="flex items-center text-gray-300/80">
          <TbGitFork className='mr-1' />
          35
        </span>
        <span className="text-gray-300/80">
          Updated on Aug 1
        </span>
      </div>
    </div>
  )
}

export default RepoList