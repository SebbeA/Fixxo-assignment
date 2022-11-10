import React from 'react'
// * importing productcard component
import ProductCard from '../components/ProductCard';
// * Added prop (products from app.js)
const FlashSaleSection = ({products = []}) => {
  return (
    <section className="flash-grid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-2">
            {/* importing ProductCard component here */}
              {
                products.map(product => <ProductCard key={product.articleNumber} product={product} />)
              }
          </div>
          <div className="flashsale">
            <div className="flashsale-body">
              <h1 className="flashsale-title">2 FOR USD $29</h1>
              <button className="button-theme-white">FLASH SALE</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FlashSaleSection