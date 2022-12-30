import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { HiOutlineUsers, HiOutlineLocationMarker, HiOutlineMail, HiOutlineLink } from 'react-icons/hi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

import { RepoList } from '../components'
import { useGetUserByUsernameQuery, useGetReposByUsernameQuery } from '../redux/services/githubApi'

const UserDetail = () => {
  const { username } = useParams()
  const { data: user, isFetching: isFetchingUser } = useGetUserByUsernameQuery({ username })
  const { data: userRepos, isFetching: isFetchingRepos  } = useGetReposByUsernameQuery({ username })

  if (isFetchingUser || isFetchingRepos) return 'Loading data...'

  return (
    <>
      <div className="app__header">
        <Link to={`/`}>
          <BiLeftArrowAlt className='text-3xl' />
        </Link>
        <div>
          <h3 className='text-2xl font-bold'>{ user.name }</h3>
        </div>
      </div>
      <div className="flex justify-start items-start gap-10 px-10 py-5 xl:px-40">
        <div className='w-2/6'>
          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-full object-cover rounded-lg"
          />
          <h2 className='mt-3'>{ user.name }</h2>
          <h4 className='font-extralight text-lg'>{ user.login }</h4>
          <p className='font-light mt-3'>{ user.bio }</p>
          <div className='flex items-center gap-2 text-sm mt-3'>
            <HiOutlineUsers className='text-gray-300/80' />
            <p className='font-semibold'>
              { user.followers } <span className="font-light text-gray-300/80">followers</span>
            </p>
            -
            <p className='font-semibold'>
              { user.following } <span className="font-light text-gray-300/80">following</span>
            </p>
          </div>
          {user.company && (
            <div className='flex items-center gap-2 font-light text-sm mt-3'>
              <HiOutlineBuildingOffice2 className='text-gray-300/80' />
              <p>{ user.company }</p>
            </div>
          )}
          {user.location && (
            <div className='flex items-center gap-2 font-light text-sm mt-1'>
              <HiOutlineLocationMarker className='text-gray-300/80' />
              <p>{ user.location }</p>
            </div>
          )}
          {user.email && (
            <div className='flex items-center gap-2 font-light text-sm mt-1'>
              <HiOutlineMail className='text-gray-300/80' />
              <p>{ user.email }</p>
            </div>
          )}
          {user.blog && (
            <div className='flex items-center gap-2 font-light text-sm mt-1'>
              <HiOutlineLink className='text-gray-300/80' />
              <p>{ user.blog }</p>
            </div>
          )}
        </div>
        <div className='w-4/6'>
          <h2>Repositories (66)</h2>
          <div className='divide-y divide-gray-500'>
            {userRepos?.map((repo) => (
              <RepoList
                key={repo.id}
                repo={repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail