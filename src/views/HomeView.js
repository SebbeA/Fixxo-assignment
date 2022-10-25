import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'
import TopPickSection from '../sections/TopPickSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import FooterSection from '../sections/FooterSection'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  ])

  const [topproducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  ])

  const [flashsaleproducts, setFlashSaleProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  ])
  
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <CollabSection />
      <TopPickSection title="Top Products" products={topproducts} />
      <FlashSaleSection title="Flash Sale" products={flashsaleproducts}/>
      <FooterSection />
    </>
  )
}

export default HomeView