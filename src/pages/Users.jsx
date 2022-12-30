import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'

import { SearchBar, UserCard } from '../components/index'
import { useGetUsersQuery } from '../redux/services/githubApi'

const Users = () => {
  const { searchTerm } = useParams()
  const { data } = useGetUsersQuery(searchTerm)

  const users = data?.items?.map((user) => user)

  return (
    <>
      <div className="app__header">
        <BsGithub className='text-5xl' />
        <SearchBar />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-10 py-5 xl:px-40">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </>
  )
}

export default Users