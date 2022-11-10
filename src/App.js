// * importing useEffect and useState
import React, {useEffect, useState} from 'react'
// * importing all CSS
import './App.css';
// * importing BrowerRouterm Routes and Route for a easy way to jump between pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// * importing all views below
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesViews';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
// * importing all Contexts
import { ProductsContext, FeaturedProductsContext, SquareProductsContext } from './contexts/contexts'

// * sets and defines useState
function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [square, setSquare] = useState([])

// * a function for fetch all data from API
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

// * a function for fetch featured data from API
    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

  // * a function for fetch square data from API
    const fetchSquareData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSquare(await result.json())
    }
    fetchSquareData()    

  }, [setProducts, setFeatured, setSquare])  

  return (
    // * Links all views so we easy can jump between pages
    <BrowserRouter>
    {/* Provider provides different values */}
      <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <SquareProductsContext.Provider value={square}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView /> } />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />  
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </SquareProductsContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;