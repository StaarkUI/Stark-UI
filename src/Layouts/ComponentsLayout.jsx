import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import ComponentPage from '../pages/ComponentPage'


const ComponentsLayout = () => {
  return (
    <div>
        <ComponentPage />
        <Outlet />
    </div>
  )
}

export default ComponentsLayout