import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'

// * structure for 404 page, copy from Hans
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