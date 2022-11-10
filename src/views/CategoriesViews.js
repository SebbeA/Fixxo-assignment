import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'
// * importing footer section
import FooterSection from '../sections/FooterSection'

const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default CategoriesView