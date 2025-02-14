import React from 'react'
import { Outlet } from 'react-router'


function App() {
  return (
    <div>
       <>
        <p>Header Menu</p>
        <Outlet />
      </>
      </div>
  )
}

export default App