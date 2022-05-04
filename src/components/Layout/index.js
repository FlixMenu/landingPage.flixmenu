
import React from 'react'

function Layout({ children }) {
  return (
    <div className="relative w-screen h-screen mx-auto bg-flixDark-800 text-flixWhite-400">
      {children}
    </div>
  )
}

export default Layout

