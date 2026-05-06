
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Loader from './component/Loader';
import { preloadSiteApis } from './api/startupLoader';

const MINIMUM_LOADER_DURATION_MS = 3000;
const STARTUP_PREFETCH_MAX_WAIT_MS = 7000;

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BoardOfDirectors = lazy(() => import('./pages/about/BoardOfDirectors'));
const MissionVision = lazy(() => import('./pages/about/MissionVision'));
const Cylinder = lazy(() => import('./pages/products/Cylinder'));
const Bulk = lazy(() => import('./pages/products/Bulk'));
const Reticulation = lazy(() => import('./pages/products/Reticulation'));
const Distribution = lazy(() => import('./pages/Distribution'));
const ProductsList = lazy(() => import('./pages/order/ProductsList'));
const ApiTest = lazy(() => import('./constants/ApiTest'));
const OrderNow = lazy(() => import('./pages/products/OrderNow'));
const Faq = lazy(() => import('./pages/Faq'));
const AmirulHaque = lazy(() => import('./pages/about/AmirulHaque'));
const MustafaHaider = lazy(() => import('./pages/about/MustafaHaider'));
const ContactPage2 = lazy(() => import('./pages/ContactPage2'));
const ShopNow = lazy(() => import('./pages/order/ShopNow'));
const AddToCart = lazy(() => import('./pages/order/AddToCart'));
const CartAllPage = lazy(() => import('./pages/order/CartAllPage'));
const BuyNow = lazy(() => import('./pages/order/BuyNow'));

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const minimumLoaderDelay = new Promise((resolve) => {
      window.setTimeout(resolve, MINIMUM_LOADER_DURATION_MS);
    });

    const preloadWithSafetyTimeout = Promise.race([
      preloadSiteApis(),
      new Promise((resolve) => {
        window.setTimeout(() => {
          console.warn('Startup API prefetch timed out. Continuing app render.');
          resolve();
        }, STARTUP_PREFETCH_MAX_WAIT_MS);
      }),
    ]);

    Promise.all([preloadWithSafetyTimeout, minimumLoaderDelay]).finally(() => {
      if (isMounted) {
        setIsAppReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isAppReady) {
    return <Loader label="Loading Delta LPG..." />;
  }

  return (
    <BrowserRouter>
      {/* --- Header with Menu --- */}
      <Header/>
      {/* --- All Page Routes ---- */}
      <Suspense fallback={<Loader label="Loading page..." fullscreen={false} /> }>
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

          {/* --- Order of Product --- */}
          <Route path='/product-list' element={<ProductsList/>}/>
          <Route path='/shop-now' element={<ShopNow/>}/>
          <Route path='/order-now' element={<OrderNow/>}/>
          <Route path='/add-to-cart' element={<AddToCart/>}/>
          <Route path='/cart-all-show' element={<CartAllPage/>}/>
          <Route path='/buy-now' element={<BuyNow/>}/>

          {/* --- Distribution Page --- */}
          <Route path='/distribution' element={<Distribution/>}/>

          {/* --- Contact Us --- */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/contact-page-2' element={<ContactPage2/>}/>

          {/* --- API test Page --- */}
          <Route path='/api-test' element={<ApiTest/>}/>

          {/* --- FAQ Page --- */}
          <Route path='/faqs' element={<Faq/>}/>
        </Routes>
      </Suspense>
      {/* --- Footer --- */}
      <Footer/>
    </BrowserRouter>
  );
};

export default App;




