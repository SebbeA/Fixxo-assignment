// * importing useContext
import React, { useContext } from 'react'
// * importing all sections below 
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'
import TopPickSection from '../sections/TopPickSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'
// * importing 2 contexts and using it below
import { FeaturedProductsContext, SquareProductsContext } from '../contexts/contexts'

// * sets and define products and square with useContext
const HomeView = () => {
  const products = useContext(FeaturedProductsContext);
  const square = useContext(SquareProductsContext);
  window.top.document.title = 'Fixxo.'
  
// * sets what will show on homeview and what products for what section
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <CollabSection />
      <TopPickSection products={square} />
      <FlashSaleSection products={square} />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView