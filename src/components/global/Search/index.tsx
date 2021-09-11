import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="search w-100 position-relative me-5">
      <input type="text" className="px-3 form-control me-4 w-100" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Enter your search..." />
    </div>
  )
}

export default Search
