

import React from 'react';
import Home from './pages/Home';
import About from './pages/about/About';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BoardOfDirectors from './pages/about/BoardOfDirectors';
import MissionVision from './pages/about/MissionVision';
import Cylinder from './pages/products/Cylinder';
import Bulk from './pages/products/Bulk';
import Reticulation from './pages/products/Reticulation';
// import Autogas from './pages/products/Autogas';
import Header from './component/Header';
import Footer from './component/Footer';
import Distribution from './pages/Distribution';
import { Link, NavLink } from 'react-router-dom'
import ProductsList from './pages/order/ProductsList';
import ApiTest from './constants/ApiTest';
import OrderNow from './pages/products/OrderNow';
import Faq from './pages/Faq';
import AmirulHaque from './pages/about/AmirulHaque';
import MustafaHaider from './pages/about/MustafaHaider';
import ContactPage2 from './pages/ContactPage2';

const App = () => {
  return (
    <BrowserRouter>
      {/* --- Header with Menu --- */}
      <Header/>
      {/* --- All Page Routes ---- */}
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* --- About Us --- */}
        <Route path='/about' element={<About/>}/>
        <Route path='/board-of-director' element={<BoardOfDirectors/>}/>
        <Route path='/mission-vision' element={<MissionVision/>}/>
        <Route path='/amirul-haque' element={<AmirulHaque/>}/>
        <Route path='/mustafa-haider' element={<MustafaHaider/>}/>

        {/* --- Products --- */}
        <Route path='/cylinder' element={<Cylinder/>}/>
        <Route path='/bulk' element={<Bulk/>}/>
        <Route path='/reticulation' element={<Reticulation/>}/>
        {/* <Route path='/autogas' element={<Autogas/>}/> */}

        {/* --- Order of Product --- */}
        <Route path='/product-list' element={<ProductsList/>}/>

        {/* --- Distribution Page --- */}
        <Route path='/distribution' element={<Distribution/>}/>

        {/* --- Contact Us --- */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact-page-2' element={<ContactPage2/>}/>

        {/* --- API test Page --- */}
        <Route path='/api-test' element={<ApiTest/>}/>

        {/* --- Order Now Page --- */}
        <Route path='/order-now' element={<OrderNow/>}/>

        {/* --- FAQ Page --- */}
        <Route path='/faqs' element={<Faq/>}/>

      </Routes>
      {/* --- Footer --- */}
      <Footer/>
    </BrowserRouter>
  );
};

export default App;




