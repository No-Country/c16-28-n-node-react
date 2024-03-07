import React, { useState } from 'react'


const SearchBar = () => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
    }
    
  return (
    <div className='bg-slate-800 p-4 flex justify-center items-center'>
        <div className='p-1 bg-[#fff] flex justify-center items-center rounded-full w-min'>

        <input className='p-1 pl-4 rounded-l-full focus:outline-none focus:ring-0 focus:ring-main-color focus:border-transparent' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...'/>
        <button className='bg-[#fff] p-2 text-black rounded-r-full border-gray border-l-2' onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        </button>
        </div>
    </div>
  )
}

export default SearchBar