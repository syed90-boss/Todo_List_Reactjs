import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()} >
            <label htmlFor="search">Search</label>
            <input
            id="search"
            placeholder='search Items'
            role="searchbox"
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
  )
}

export default SearchItem