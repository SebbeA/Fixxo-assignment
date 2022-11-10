// * importing useState and useEffect
import React, { useState, useEffect } from 'react'
// * importing useParams
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductDetails from '../sections/ProductDetails'

// * sets and using useParams and useState
const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

// * a function to fetch data from API
    useEffect(() => {
      const fetchData = async () => {
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProduct(await result.json())
      }
      fetchData()
  }, [])

  return (
    // * structure for what will show on the page
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Products" /> 
        <ProductDetails product={product}/>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView