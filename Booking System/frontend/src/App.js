import React from 'react'
import Home from './components/Home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowFlight from './components/ShowFlight/showflight';
import SearchFlight from './components/SearchFlight/searchflight';
import PurchaseFlight from './components/PurchaseFlight/purchaseflight';
import './App.css'

function App() {
  
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-flight' element={<SearchFlight />} />
          <Route path='/show-flight' element={<ShowFlight />} />
          <Route path='/purchase-flight' element={<PurchaseFlight />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
