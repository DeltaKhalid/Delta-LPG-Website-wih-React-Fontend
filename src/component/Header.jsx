// component/Header.jsx
// import React from 'react'
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { fetchHeaderInfo } from '../api/apiCall';
import Urls from '../constants/urls';


const Header = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const isActive = (path) => currentPath === path

  /// ================================================= Header Info API Call ================================================= ///
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHeaderInfo = async () => {
      try {
        const data = await fetchHeaderInfo();
        setHeaderData(data);
        
      } catch (error) {
        console.error('Failed to load header info:', error);
      } finally {
        setLoading(false);
      }
    };

    getHeaderInfo();
  }, []);

  if (loading) return <p>Loading header info...</p>;


  /// ================================================= Main Return Wrapper ================================================== ///
  return (
    <div className="menu_height">
      <header className="main-header clearfix">

        {/* --- Top Bar --- */}
        <div className="main-header__top">
          <div className="main-header__top-inner">
            <div className="main-header__top-address">
              <ul className="list-unstyled main-header__top-address-list">
                {/* --- Office Time --- */}
                <li>
                  <i className="icon"><span className="fa fa-clock"></span></i>
                  {/* <div className="text"><p>Sat to Thu: 09:00 am to 05:00 pm</p></div> */}
                  {/* <div className="text"><p>Office Time: {headerData.office_time}</p></div> */}
                  <div className="text"><p>{headerData.office_time}</p></div>
                </li>
                {/* --- Email Address --- */}
                <li>
                  <i className="icon"><span className="fa fa-envelope"></span></i>
                  <div className="text">
                    <p><a href="mailto:info@deltalpg.com">info@deltalpg.com</a></p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              <div className="main-header__top-menu-box">
                <ul className="list-unstyled main-header__top-menu">
                  {/* <li><a href="#">Our Faqs</a></li> */}
                  <li><Link to="/faqs" >Our Faqs</Link></li>
                  {/* <li><a href="/contact">Contact</a></li> */}
                  <li><Link to="/contact" >Contact</Link></li>
                </ul>
              </div>
              <div className="main-header__top-social-box">
                {/* --- Social Media Address --- */}
                <div className="main-header__top-social">
                  {/* --- Facebook Link --- */}
                  {/* <a href="#"><i className="fab fa-facebook-square"></i></a> */}
                  <a href={headerData.facebook_link} target="_blank"><i className="fab fa-facebook-square"></i></a>
                  
                  {/* --- Twitter Link --- */}
                  {/* <a href="#"><i className="fab fa-twitter"></i></a> */}

                  {/* --- LinkedIn Link --- */}
                  {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
                  <a href={headerData.linkedin_link} target="_blank"><i className="fab fa-linkedin"></i></a>

                  {/* --- Print rest Link --- */}
                  {/* <a href="#"><i className="fab fa-youtube"></i></a> */}
                  <a href={headerData.youtube_link} target="_blank"><i className="fab fa-youtube"></i></a>

                  {/* --- Instagram Link --- */}
                  {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                  <a href={headerData.instagram_link} target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Main Navigation --- */}
        <nav className="main-menu clearfix">
          <div className="main-menu__wrapper clearfix">
            <div className="main-menu__wrapper-inner clearfix">
              <div className="main-menu__left">
                <div className="main-menu__main-menu-box">

                  <div className="main-header__logo logo_padding_top">
                    {/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo_170_91.png" alt="Delta Logo" /></Link> */}
                    <Link to="/">
                      <img
                          src={`${Urls.baseUrl}${headerData.logo}`} // *** mush import Urls from '../constants/urls';
                          // alt={Array.from(productMap.values())[2].product_name}
                          alt='Logo is Loading...'
                          // style={{
                          // width: '100%',
                          // maxWidth: '300px',
                          // height: 'auto',
                          // borderRadius: '5px',
                          // }}
                      />
                    </Link>
                  </div>

                  <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                  <MobileMenu />

                  <ul className="main-menu__list">
                    <li className={`dropdown megamenu ${isActive('/') ? 'active-menu' : ''}`}>
                      <Link to="/">Home</Link>
                    </li>

                    <li className={`dropdown ${isActive('/about') ? 'active-menu' : ''}`}>
                      <Link to="/about">About</Link>
                      <ul className="border-top-2px">
                        <li className={`${isActive('/mission-vision') ? 'active-menu' : ''}`}>
                          <Link to="/mission-vision">Mission & Vision</Link>
                        </li>
                        <li className={`${isActive('/board-of-director') ? 'active-menu' : ''}`}>
                          <Link to="/board-of-director">Board of Directors</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#">Products</a>
                      <ul className="border-top-2px">
                        <li className={`${isActive('/cylinder') ? 'active-menu' : ''}`}>
                          <Link to="/cylinder">Cylinder</Link>
                        </li>
                        <li className={`${isActive('/bulk') ? 'active-menu' : ''}`}>
                          <Link to="/bulk">Bulk</Link>
                        </li>
                        <li className={`${isActive('/reticulation') ? 'active-menu' : ''}`}>
                          <Link to="/reticulation">Reticulation</Link>
                        </li>
                      </ul>
                    </li>

                    <li className={`${isActive('/distribution') ? 'active-menu' : ''}`}>
                      <Link to="/distribution">Distribution</Link>
                    </li>

                    <li className={`${isActive('/contact') ? 'active-menu' : ''}`}>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-menu__right">
                <div className="main-menu__call">
                  <div className="main-menu__call-icon"><i className="fas fa-phone"></i></div>
                  <div className="main-menu__call-content">
                    <p>Call Anytime</p>
                    <a href="tel:+880255011901">+880 255 011 901-3</a>
                  </div>
                </div>
                <div className="main-menu__btn-box">
                  <Link to="/order-now" className="thm-btn main-menu__btn">
                    <i className="fa fa-arrow-right"></i> Order Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>
      <div className="site-header__slider_top_border"></div>
    </div>
  )
}

export default Header











// ========================================================================= Old Header Code 2 =====================================

// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// // import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/about/About';
// import MissionVision from '../pages/about/MissionVision';
// import BoardOfDirectors from '../pages/about/BoardOfDirectors';
// // import Autogas from '../pages/products/Autogas';
// import Bulk from '../pages/products/Bulk';
// import Cylinder from '../pages/products/Cylinder';
// import Reticulation from '../pages/products/Reticulation';
// import Distribution from '../pages/Distribution';
// import Contact from '../pages/Contact';

// import { Link, useLocation } from 'react-router-dom'; // ← Add useLocation
// import MobileMenu from './MobileMenu';



// const Header = () => {

//     /// --- function for Active menu Color Change --- ///
//     const location = useLocation(); // ← Get current route path
//     const currentPath = location.pathname;
//     // Helper function to check active route
//     const isActive = (path) => currentPath === path;

    
//     return (


//         // ======================================================= Main Menu ====================================================== //
//         <div className='menu_height'>
//             <header className="main-header clearfix">

//                 {/* ... main header logo area ... */}
//                 {/* <div className="main-header__logo logo_padding_top"> */}

//                     {/* <a href="index.html"><img src="../src/assets/images/resources/delta_header_logo.png" alt=""/></a> */}
//                     {/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo.png" alt="Delta Logo" /></Link> */}
//                     {/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo_170_91.png" alt="Delta Logo" /></Link>
//                 </div> */}


//                 <div className="main-header__top">
//                     <div className="main-header__top-inner">
//                         <div className="main-header__top-address">
//                             <ul className="list-unstyled main-header__top-address-list">
//                                 <li>
//                                     <i className="icon">
//                                         <span className="fa fa-clock"></span>
//                                     </i>
//                                     <div className="text">
//                                         <p>Sat to Thu: 09:00 am to 05:00 pm</p>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <i className="icon">
//                                         <span className="fa fa-envelope"></span>
//                                     </i>
//                                     <div className="text">
//                                         <p><a href="mailto:needhelp@company.com">info@deltalpg.com</a></p>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="main-header__top-right">
//                             <div className="main-header__top-menu-box">
//                                 <ul className="list-unstyled main-header__top-menu">
//                                     <li><a href="faq.html">Our Faqs</a></li>
//                                     {/*<li><a href="contact.html">Pricing</a></li>*/}
//                                     <li><a href="contact.html">Contact</a></li>
//                                 </ul>
//                             </div>
//                             <div className="main-header__top-social-box">
//                                 <div className="main-header__top-social">
//                                     <a href="#"><i className="fab fa-facebook-square"></i></a>
//                                     <a href="#"><i className="fab fa-twitter"></i></a>
//                                     <a href="#"><i className="fab fa-pinterest-p"></i></a>
//                                     <a href="#"><i className="fab fa-instagram"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ------------------- Nav Start ------- */}
//                 <nav className="main-menu clearfix">
//                     <div className="main-menu__wrapper clearfix">
//                         <div className="main-menu__wrapper-inner clearfix">
//                             <div className="main-menu__left">

//                                 <div className="main-menu__main-menu-box">

//                                     <div className="main-header__logo logo_padding_top">
//                                         {/* <a href="index.html"><img src="../src/assets/images/resources/delta_header_logo.png" alt=""/></a> */}
//                                         {/* <Link to="/"><img src="../src/assets/images/resources/delta_header_logo.png" alt="Delta Logo" /></Link> */}
//                                         <Link to="/"><img src="../src/assets/images/resources/delta_header_logo_170_91.png" alt="Delta Logo" /></Link>
//                                     </div>



//                                     {/* --- Mobile Menu Button --- */}
//                                     {/* <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a> */}
//                                     <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
//                                     <MobileMenu />

//                                     <ul className="main-menu__list">
//                                         <li className={`dropdown megamenu ${isActive('/') ? 'active-menu' : ''}`}>
//                                             <Link to="/">Home</Link>
//                                         </li>

//                                         <li className={`dropdown ${isActive('/about') ? 'active-menu' : ''}`}>
//                                             <Link to="/about">About</Link>
//                                             <ul className="border-top-2px">
//                                                 <li className={`${isActive('/mission-vision') ? 'active-menu' : ''}`}>
//                                                     <Link to="/mission-vision">Mission & Vision</Link>
//                                                 </li>
//                                                 <li className={`${isActive('/board-of-director') ? 'active-menu' : ''}`}>
//                                                     <Link to="/board-of-director">Board of Directors</Link>
//                                                 </li>
//                                             </ul>
//                                         </li>

//                                         <li className="dropdown">
//                                             <a href="#">Products</a>
//                                             <ul className="border-top-2px">
//                                                 <li className={`${isActive('/cylinder') ? 'active-menu' : ''}`}>
//                                                     <Link to="/cylinder">Cylinder</Link>
//                                                 </li>
//                                                 <li className={`${isActive('/bulk') ? 'active-menu' : ''}`}>
//                                                     <Link to="/bulk">Bulk</Link>
//                                                 </li>
//                                                 <li className={`${isActive('/reticulation') ? 'active-menu' : ''}`}>
//                                                     <Link to="/reticulation">Reticulation</Link>
//                                                 </li>
//                                                 {/* <li className={`${isActive('/autogas') ? 'active-menu' : ''}`}>
//                                                     <Link to="/autogas">Autogas</Link>
//                                                 </li> */}
//                                             </ul>
//                                         </li>

//                                         <li className={`${isActive('/distribution') ? 'active-menu' : ''}`}>
//                                             <Link to="/distribution">Distribution</Link>
//                                         </li>

//                                         <li className={`${isActive('/contact') ? 'active-menu' : ''}`}>
//                                             <Link to="/contact">Contact</Link>
//                                         </li>
//                                     </ul>

//                                 </div>
//                             </div>

//                             {/* ... call & search section remains unchanged ... */}
//                             <div className="main-menu__right">
//                                     <div className="main-menu__call">
//                                         <div className="main-menu__call-icon">
//                                             <i className="fas fa-phone"></i>
//                                         </div>
//                                         <div className="main-menu__call-content">
//                                             <p>Call Anytime</p>
//                                             <a href="tel:9200368090">+880 255 011 901-3</a>
//                                         </div>
//                                     </div>
//                                     <div className="main-menu__search-box">
//                                         <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
//                                     </div>
//                                     <div className="main-menu__btn-box">
//                                         {/* <a href="product_order_now.html" className="thm-btn main-menu__btn"> <i className="fa fa-arrow-right"></i> Order Now</a> */}
//                                         <Link to="/product-list" className="thm-btn main-menu__btn">
//                                         <i className="fa fa-arrow-right"></i> Order Now
//                                         </Link>
//                                     </div>
//                                 </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
            
//             <div className="site-header__slider_top_border"></div>

//         </div>
//     );
// };

// export default Header;






// ======================================================= Old Heder Code 1 ========================================


// const Header = () => {
//     return (
    
//             <div className='menu_height'>
//                 <header className="main-header clearfix">
//                     <div className="main-header__logo">

//                         {/* <a href="index.html"><img src="../src/assets/images/resources/delta_header_logo.png" alt=""/></a> */}
//                         <Link to="/"><img src="../src/assets/images/resources/delta_header_logo.png" alt="Delta Logo" /></Link>
//                     </div>
//                     <div className="main-header__top">
//                         <div className="main-header__top-inner">
//                             <div className="main-header__top-address">
//                                 <ul className="list-unstyled main-header__top-address-list">
//                                     <li>
//                                         <i className="icon">
//                                             <span className="fa fa-clock"></span>
//                                         </i>
//                                         <div className="text">
//                                             <p>Sat to Thu: 09:00 am to 05:00 pm</p>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <i className="icon">
//                                             <span className="fa fa-envelope"></span>
//                                         </i>
//                                         <div className="text">
//                                             <p><a href="mailto:needhelp@company.com">info@deltalpg.com</a></p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="main-header__top-right">
//                                 <div className="main-header__top-menu-box">
//                                     <ul className="list-unstyled main-header__top-menu">
//                                         <li><a href="faq.html">Our Faqs</a></li>
//                                         {/*<li><a href="contact.html">Pricing</a></li>*/}
//                                         <li><a href="contact.html">Contact</a></li>
//                                     </ul>
//                                 </div>
//                                 <div className="main-header__top-social-box">
//                                     <div className="main-header__top-social">
//                                         <a href="#"><i className="fab fa-facebook-square"></i></a>
//                                         <a href="#"><i className="fab fa-twitter"></i></a>
//                                         <a href="#"><i className="fab fa-pinterest-p"></i></a>
//                                         <a href="#"><i className="fab fa-instagram"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <nav className="main-menu clearfix">
//                         <div className="main-menu__wrapper clearfix">
//                             <div className="main-menu__wrapper-inner clearfix">
//                                 <div className="main-menu__left">
//                                     <div className="main-menu__main-menu-box">
//                                         <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>

                                        
//                                         <ul className="main-menu__list">
//                                             <li className="dropdown current megamenu">

//                                                 <Link to="/">Home</Link>
                                                
//                                             </li>
//                                             <li>

//                                                 <Link to="/about">About</Link>
//                                                 <ul className="border-top-2px">

//                                                     <li><Link to="/mission-vision">Mission & Vision</Link></li>

//                                                     <li><Link to="/board-of-director">Board of Directors</Link></li>

//                                                 </ul>
//                                             </li>


//                                             {/* ------------------ ------------------------ */}
//                                             <li className="dropdown">
//                                             <a href="#">Products</a>
//                                             <ul className="border-top-2px">
//                                                 <li><Link to="/cylinder">Cylinder</Link></li>
//                                                 <li><Link to="/bulk">Bulk</Link></li>
//                                                 <li><Link to="/reticulation">Reticulation</Link></li>
//                                                 <li><Link to="/autogas">Autogas</Link></li>
//                                             </ul>
//                                             </li>


//                                             {/* ------------------------------------ ----------------------- */}



//                                             <li className="dropdown">
//                                             <Link to="/distribution">Distribution</Link>
//                                             </li>

//                                             <li>
//                                             <Link to="/contact">Contact</Link>
//                                             </li>


//                                         </ul>



                                        
//                                     </div>
//                                 </div>
//                                 <div className="main-menu__right">
//                                     <div className="main-menu__call">
//                                         <div className="main-menu__call-icon">
//                                             <i className="fas fa-phone"></i>
//                                         </div>
//                                         <div className="main-menu__call-content">
//                                             <p>Call Anytime</p>
//                                             <a href="tel:9200368090">+880 255 011 901-3</a>
//                                         </div>
//                                     </div>
//                                     <div className="main-menu__search-box">
//                                         <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
//                                     </div>
//                                     <div className="main-menu__btn-box">
//                                         {/* <a href="product_order_now.html" className="thm-btn main-menu__btn"> <i className="fa fa-arrow-right"></i> Order Now</a> */}
//                                         <Link to="/product_order_now.html" className="thm-btn main-menu__btn">
//                                         <i className="fa fa-arrow-right"></i> Order Now
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                 </header>
//                 <div className="site-header__slider_top_border"></div>
//             </div>

//     );
// };

// export default Header;