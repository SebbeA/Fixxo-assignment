import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = ({products = []}) => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" products={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView