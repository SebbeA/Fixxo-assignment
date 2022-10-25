import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'

const ContactsView = () => {
  window.top.document.title = 'Contatcs | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contatcs" />
      <MapSection />
      <FooterSection />
    </>
  )
}

export default ContactsView