import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-800 w-full text-white'>
      <ul className='flex justify-center items-center gap-6 p-3'>
        <li>Home</li>
        <li>Search</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

export default NavBar