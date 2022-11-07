import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'
import TopPickSection from '../sections/TopPickSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'
import { FeaturedProductsContext, SquareProductsContext } from '../contexts/contexts'


const HomeView = () => {
  const products = useContext(FeaturedProductsContext);
  const square = useContext(SquareProductsContext);
  window.top.document.title = 'Fixxo.'
  
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