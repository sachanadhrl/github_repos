import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'

import { SearchBar, UserCard, Loader } from '../components/index'
import { useGetUsersQuery } from '../redux/services/githubApi'

const Users = () => {
  const { searchTerm } = useParams()
  const { data, isFetching } = useGetUsersQuery(searchTerm)

  const users = data?.items?.map((user) => user)

  if (isFetching) return <Loader />

  return (
    <>
      <div className="app__header">
        <BsGithub className='text-5xl' />
        <SearchBar />
      </div>
      {users.length > 0
      ? 
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-10 py-5 xl:px-40">
          {users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      : 
        <div className="flex justify-center items-center py-5">
          <p className="text-xl">
            We couldn’t find any repositories matching '<span className='font-bold'>{searchTerm}</span>'
          </p>
        </div>
      }
    </>
  )
}

export default Users