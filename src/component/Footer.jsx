import React, { useRef, useEffect, useState } from "react";
import { fetchFooterInfo } from '../api/apiCall';

// import useScrollFadeUp from "../component/useScrollFadeUp.js"; 
// import useScrollFadeUp from "../component/useScrollFadeUp.js"


const Footer = () => {
    /// ===================================================== Variables ============================================================== ///

    // ----------------- Ref for animation on scroll
    // const aboutRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // Footer data state
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);



    /// ===================================================== Class Write Area ======================================================== ///

    /// ------------------- Class for FadeIn-Up-Style Animation ------------- ///
    // useScrollFadeUp(); // call for FadeInUp
    useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
            }
        });
        },
        { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
        '.my-fadeIn-up-style, .my-fadeIn-up-style-two, .my-fadeIn-up-style-three'
    );
    elements.forEach(el => observer.observe(el));

    return () => {
        elements.forEach(el => observer.unobserve(el));
    };
    }, []);







    // Animate on scroll
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => setIsVisible(entry.isIntersecting),
    //         { threshold: 0.1 }
    //     );

    //     if (aboutRef.current) {
    //         observer.observe(aboutRef.current);
    //     }

    //     return () => {
    //         if (aboutRef.current) {
    //             observer.unobserve(aboutRef.current);
    //         }
    //     };
    // }, []);

    /// ================================================== APi Call Area ================================================================ ///

    /// ----------------------------------- Footer API Call ------------------- ///
    useEffect(() => {
        const getFooterData = async () => {
            try {
                const data = await fetchFooterInfo();
                setFooterData(data);
                console.log("Footer API Data:", data);
            } catch (error) {
                console.error('Failed to fetch footer info:', error);
            } finally {
                setLoading(false);
            }
        };

        getFooterData();
    }, []);

    if (loading) return <p>Loading footer info...</p>;






    /// ==================================================================== Main Return Area =========================================== ///
    return (
        <div>
            <div class="site-bottom_top_border">
			    {/* <p class="site-footer__bottom-text">© All Copyright 2022 by <a href="#">Roofsie.com</a></p> */}
		    </div>

            <footer className="site-footer">
                <div className="site-footer-img-1">
                    <img src="src/assets/images/resources/site-footer-img-1.png" alt=""/>
                </div>
                <div className="site-footer-shape-1">
                    <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
                </div>
                <div className="container">
                    <div className="site-footer__top">
                        <div className="row ">

                            {/* --- Footer Text --- */}
                            {/* <div className="col-xl-4 col-lg-6 col-md-6" > */}
                            <div className="col-xl-4 col-lg-6 col-md-6 " >
                                <div className="footer-widget__column footer-widget__explore clearfix">
                                    <h3 className="footer-widget__title">Delta LPG</h3>
                                    <div class="custom-underline "></div>
                                    <p className="footer-widget__contact-text ">{footerData?.footer_text || "No footer text available."}</p>
                                     <div className="site-footer__social ">
                                        {/* <a href={headerData.facebook_link} target="_blank"><i className="fab fa-facebook-square"></i></a> */}
                                        <a href={footerData.facebook_link} target="_blank"><i className="fab fa-facebook"></i></a>

                                        {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
                                        <a href={footerData.youtube_link} target="_blank"><i className="fab fa-youtube"></i></a>

                                        {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
                                        <a href={footerData.linkedin_link} target="_blank"><i className="fab fa-linkedin"></i></a>
                                        
                                        {/* <a href="#"><i className="fab fa-pinterest-p"></i></a> */}
                                        {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                                        <a href={footerData.instagram_link} target="_blank"><i className="fab fa-instagram"></i></a>

                                    </div>

                                </div>
                            </div>
                            {/* <div
                                ref={aboutRef}
                                className={`col-xl-4 col-lg-6 col-md-6 ${isVisible ? "animated fadeInUp" : ""}`}
                                style={{ visibility: isVisible ? "visible" : "hidden" }}
                            >
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__about-text-box">
                                        <p>Test Text</p>
                                    </div>
                                    <div className="site-footer__social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div> */}

                            {/* --- Empty Block --- */}
                            <div className="col-xl-4 col-lg-6 col-md-6" >
                                <div className="footer-widget__column footer-widget__explore clearfix">
                                    {/* <h3 className="footer-widget__title">Delta LPG</h3>
                                    <div class="custom-underline"></div>
                                    <p className="footer-widget__contact-text">{footerData?.footer_text || "No footer text available."}</p>
                                     <div className="site-footer__social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div> */}

                                </div>
                            </div>

                            {/* --- Explore Section (static) --- */}
                            {/* <div className="col-xl-2 col-lg-6 col-md-6">
                                <div className="footer-widget__column footer-widget__explore clearfix">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="footer-widget__explore-list list-unstyled clearfix">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="Products.html">Products</a></li>
                                        <li><a href="mission_vision.html">Mission & Vision</a></li>
                                        <li><a href="distribution.html">Distribution</a></li>
                                    </ul>
                                </div>
                            </div> */}

                            {/* --- Newsletter Section (static) --- */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="footer-widget__column footer-widget__newsletter clearfix">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                    <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>
                                    <form className="footer-widget__newsletter-form">
                                        <div className="footer-widget__newsletter-input-box">
                                            <input type="email" placeholder="Enter Email Address" name="email"/>
                                            <button type="submit" className="footer-widget__newsletter-btn thm-btn">
                                                <i className="fa fa-arrow-right"></i>Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}

                            {/* --- Contact Info (static) --- */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6"> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-widget__column footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact</h3>
                                    <div class="custom-underline"></div>
                                    <p className="footer-widget__contact-text">
                                        {footerData.address}


                                        {/* TK BHABAN (16TH FLOOR) <br />
                                        13 KARWAN BAZAR <br />
                                        DHAKA-1215, Bangladesh */}
                                    </p>
                                    <ul className="list-unstyled footer-widget__contact-list">
                                        <li className=" margin_top_10px">
                                            <div className="icon"><i className="fa fa-envelope"></i></div>
                                            <div className="text">
                                                {/* <p><a href="mailto:info@deltalpg.com">info@deltalpg.com</a></p> */}
                                                {/* <p className="footer-widget__contact-text">{footerData.footer_text}</p> */}
                                                <p className="footer-widget__title">{footerData.email}</p>
                                            </div>
                                        </li>
                                        <li className=" margin_top_10px">
                                            <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                            <div className="text">
                                                {/* <p><a href="tel:+880255011904">+880 255 011 904</a></p> */}
                                                {/* <p className="site-footer__bottom-text">{footerData.phone_number}</p> */}
                                                <p className="footer-widget__title">{footerData.phone_number}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Footer Bottom --- */}
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    {/* <p className="site-footer__bottom-text">Copyright © 2025 Delta LPG</p> */}
                                    <p className="site-footer__bottom-text">{footerData.footer_credits_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;






/// =========================================================== old code ============================================================== ///
// // import React from 'react';
// import React, { useRef, useEffect, useState } from "react";
// import { fetchFooterInfo } from '../api/apiCall';

// const Footer = () => {
//     // --- For Footer Animation --- //
//     const ref = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     // --- For API Call --- //
//     const [footerData, setFooterData] = useState(null);
//     const [loading, setLoading] = useState(true);

    
//     // ====================================== Footer Animation ===================================== //
//     // const ref = useRef(null);
//     // const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//         ([entry]) => setIsVisible(entry.isIntersecting),
//         { threshold: 0.1 }
//         );

//         if (ref.current) {
//         observer.observe(ref.current);
//         }

//         return () => {
//         if (ref.current) {
//             observer.unobserve(ref.current);
//         }
//         };
//     }, []);


//     // ====================================== Footer API Call ====================================== //
//         useEffect(() => {
//         const getFooterData = async () => {
//             try {
//                 const data = await fetchFooterInfo();
//                 setFooterData(data);
//                 console.log("Fetched footer text:", data.footer_text); // ✅ this is correct
//             } catch (error) {
//                 console.error('Failed to fetch footer info:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getFooterData();
//     }, []);

//     if (loading) return <p>Loading footer info...</p>;

//     // ==================================================== Main Return Area ================================================ //
//     return (
//         <div>
//             <footer className="site-footer">
//                 <div className="site-footer-img-1">
//                     <img src="src/assets/images/resources/site-footer-img-1.png" alt=""/>
//                 </div>
//                 <div className="site-footer-shape-1">
//                     <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
//                 </div>
//                 <div className="container">
//                     <div className="site-footer__top">
//                         <div className="row">

//                             {/* --- Footer Text --- */}
//                             <div 
                            
//                             // className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms"

//                             ref={ref}
//                             className={`col-xl-4 col-lg-6 col-md-6 ${isVisible ? "animated fadeInUp" : ""}`}
//                             // data-wow-delay={isVisible ? "200ms" : undefined}
//                             style={{ visibility: isVisible ? "visible" : "hidden" }}>
                            

//                                 <div className="footer-widget__column footer-widget__about">
//                                     <div className="footer-widget__about-text-box">
                                        
//                                         <p 
//                                             ref={ref}
//                                             className={`footer-widget__about-text_2 ${isVisible ? "animated fadeInUp" : ""}`}
//                                             data-wow-delay={isVisible ? "500ms" : undefined}
//                                             style={{ visibility: isVisible ? "visible" : "hidden" }}>

//                                             {footerData?.footer_text || "No footer text available."}

//                                             {/* Bangladesh's Largest Conglomerates are behind Delta LPG - TK Group and SEACOM Group with decades of experience in 
//                                             doing business acress Trading, Manufacturing, Shipping, International, logistics, Service and more Delta LPG looks
//                                             to soar up & beyond. */}
//                                         </p>

//                                     </div>
//                                     <div className="site-footer__social">
//                                         <a href="#"><i className="fab fa-twitter"></i></a>
//                                         <a href="#"><i className="fab fa-facebook"></i></a>
//                                         <a href="#"><i className="fab fa-pinterest-p"></i></a>
//                                         <a href="#"><i className="fab fa-instagram"></i></a>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* --- Explore --- */}
//                             <div 
                            
//                             // className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms"

//                             ref={ref}
//                             className={`col-xl-2 col-lg-6 col-md-6 ${isVisible ? "animated fadeInUpTwoSecond" : ""}`}
//                             // data-wow-delay={isVisible ? "200ms" : undefined}
//                             style={{ visibility: isVisible ? "visible" : "hidden" }}>
                
//                                 <div className="footer-widget__column footer-widget__explore clearfix">
//                                     <h3 className="footer-widget__title">Explore</h3>
//                                     <ul className="footer-widget__explore-list list-unstyled clearfix">
//                                         <li><a href="about.html">About</a></li>
//                                         <li><a href="contact.html">Contact</a></li>
//                                         <li><a href="Products.html">Products</a></li>
//                                         <li><a href="mission_vision.html">Mission & Vision</a></li>
//                                         <li><a href="distribution.html">Distribution</a></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             {/* --- Newsletter --- */}
//                             <div 
//                             // className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms"

//                             ref={ref}
//                             className={`col-xl-3 col-lg-6 col-md-6 ${isVisible ? "animated fadeInUpThreeSecond" : ""}`}
//                             // data-wow-delay={isVisible ? "300ms" : undefined}
//                             style={{ visibility: isVisible ? "visible" : "hidden" }}>
                            
                            
                            
                            
//                                 <div className="footer-widget__column footer-widget__newsletter clearfix">
//                                     <h3 className="footer-widget__title">Newsletter</h3>
//                                     <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>
//                                     <form className="footer-widget__newsletter-form">
//                                         <div className="footer-widget__newsletter-input-box">
//                                             <input type="email" placeholder="Enter Email Address" name="email"/>
//                                             <button type="submit" className="footer-widget__newsletter-btn thm-btn"><i className="fa fa-arrow-right"></i>Subscribe</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>

//                             {/* --- Contact info --- */}
//                             <div 
                            
                            
//                             // className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms"

//                             ref={ref}
//                             className={`col-xl-3 col-lg-6 col-md-6 wow ${isVisible ? "animated fadeInUpFourSecond" : ""}`}
//                             data-wow-delay={isVisible ? "500ms" : undefined}
//                             style={{ visibility: isVisible ? "visible" : "hidden" }}>
                            
                            
                            
//                                 <div className="footer-widget__column footer-widget__contact">
//                                     <h3 className="footer-widget__title">Contact</h3>
//                                     {/*<p className="footer-widget__contact-text">88 Broklyn Golden Road Street, <br> New York. USA</p>*/}
//                                     {/* <p className="footer-widget__contact-text">TK BHABAN (16TH FLOOR) <br> 13 KARWAN BAZAR <br> DHAKA-1215, Bangladesh.</p> */}
//                                     <p className="footer-widget__contact-text">
//                                         TK BHABAN (16TH FLOOR) <br />
//                                         13 KARWAN BAZAR <br />
//                                         DHAKA-1215, Bangladesh
//                                         </p>
//                                     <ul className="list-unstyled footer-widget__contact-list">
//                                         <li>
//                                             <div className="icon">
//                                                 <i className="fa fa-envelope"></i>
//                                             </div>
//                                             <div className="text">
//                                                 <p><a href="mailto:needhelp@company.com ">info@deltalpg.com</a></p>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="icon">
//                                                 <i className="fas fa-phone-alt"></i>
//                                             </div>
//                                             <div className="text">
//                                                 <p><a href="tel:9200368090">+880 255 011 904</a></p>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="site-footer__bottom">
//                         <div className="row">
//                             <div className="col-xl-12">
//                                 <div className="site-footer__bottom-inner">
//                                     {/*<p className="site-footer__bottom-text">© All Copyright 2022 by <a href="#">www.deltalpg.com</a></p>*/}
//                                     {/* <p className="site-footer__bottom-text fadeInUp">Copyright © 2025 Delta LPG</p> */}
//                                     <p className="site-footer__bottom-text">Copyright © 2025 Delta LPG</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );


// };

// export default Footer;