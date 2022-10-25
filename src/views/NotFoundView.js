import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'

const NotFoundView = () => {
  return (
    <>
      <MainMenuSection />
      <div className="container d-flex justify-content-center align-items-center">
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  )
}

export default NotFoundView