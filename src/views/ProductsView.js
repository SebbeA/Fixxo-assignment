// * importing useContext
import React, { useContext } from 'react'
// * importing all sections below
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
// * importing a context here and using it below
import { ProductsContext } from '../contexts/contexts'

// * sets and using useContext
const ProductsView = () => {
  const products = useContext(ProductsContext);
  window.top.document.title = 'Products | Fixxo.'

  return (
     // * structure for what will show on the page
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" products={products}/>
      <FooterSection />
    </>
  )
}

export default ProductsView