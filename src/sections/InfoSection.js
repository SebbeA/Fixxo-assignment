import React from 'react'
import { NavLink } from 'react-router-dom'
import images3 from '../assets/images/support-icon.svg'
import images4 from '../assets/images/payment-icon.svg'
import images5 from '../assets/images/truck-icon.svg'

const InfoSection = () => {
  return (
    <section className="info">
        <div className="container">
            <div className="info-icons">
                <div className="info-icon">
                    <img src={images3} alt="support" />
                    <h1 className="text">Customer Support</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <img src={images4} alt="payment" />
                    <h1 className="text">Secured Payment</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <img src={images5} alt="truck" />
                    <h1 className="text">Free Home Delivery</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <img src={images5} alt="truck" />
                    <h1 className="text">30 Day Return</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection