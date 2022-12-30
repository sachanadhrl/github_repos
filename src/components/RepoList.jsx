import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'
import { VscCircleFilled } from 'react-icons/vsc'

const RepoList = ({ repo }) => {
  return (    
    <div className="flex flex-col gap-3 text-sm py-10">
      <h4>{ repo.name }</h4>
      <p className="text-gray-300/80">
        { repo.description }
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {repo.topics?.map((topic, index) => (
          <span key={index} className="pills">{ topic }</span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {repo.language && (
          <span className="flex items-center text-gray-300/80">
            <VscCircleFilled className='text-teal-500 text-lg' />
            { repo.language }
          </span>
        )}
        <span className="flex items-center text-gray-300/80">
          <AiOutlineStar className='mr-1' />
          { repo.stargazers_count }
        </span>
        <span className="flex items-center text-gray-300/80">
          <TbGitFork className='mr-1' />
          { repo.forks }
        </span>
      </div>
    </div>
  )
}

export default RepoList