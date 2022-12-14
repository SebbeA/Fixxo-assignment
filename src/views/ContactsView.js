import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'
// * importing breadcrumb section
import BreadcrumbSection from '../sections/BreadcrumbSection'
// * importing mapsection section
import MapSection from '../sections/MapSection'
// * importing concactform section
import ContactFormSection from '../sections/ContactFormSection'
// * importing footer section
import FooterSection from '../sections/FooterSection'

const ContactsView = () => {
  window.top.document.title = 'Contatcs | Fixxo.'

  return (
    <>
      <MainMenuSection />
      {/* sets currentPage as Contacts */}
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView