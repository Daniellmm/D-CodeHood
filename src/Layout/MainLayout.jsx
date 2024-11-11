import React, { Children } from 'react'
import Navbar from '../Components/Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout