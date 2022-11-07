import React from 'react'
import ProductCard from '../components/ProductCard';

const FlashSaleSection = ({title, products = []}) => {
  return (
    <section className="flash-grid">
        <div className="container">
          {/* <h1>{title}</h1> */}
          <div className="row row-cols-1 row-cols-md-2 g-2">
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