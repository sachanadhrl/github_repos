import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder='Search Github user, ex: github_user'
        value={searchTerm}
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
    </form>
  )
}

export default SearchBar