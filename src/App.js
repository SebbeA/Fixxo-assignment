import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4397824/pexels-photo-4397824.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4397810/pexels-photo-4397810.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4490019/pexels-photo-4490019.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4389662/pexels-photo-4389662.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    // { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    // { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4389666/pexels-photo-4389666.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    // { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/691567/pexels-photo-691567.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    // { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg?auto=compress&cs=tinysrgb&w=1600"}
  ])

  // const [topProducts, setTopProducts] = useState([
  //   { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  // ])

  // const [flashSaleProducts, setFlashSaleProducts] = useState([
  //   { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
  //   { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  // ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView products={products} />} />
        <Route path="/categories" element={<CategoriesView /> } />
        <Route path="/products" element={<ProductsView products={products} />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />  
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;