import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    navigate(`users/`)
  }
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder='Search Github user, ex: github_user'
      />
    </form>
  )
}

export default SearchBar