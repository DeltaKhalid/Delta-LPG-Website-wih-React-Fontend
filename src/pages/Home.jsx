import React, { useRef, useEffect, useState } from "react";
import Header from './../component/Header';
import Footer from '../component/Footer';
import ImageSlider from '../component/ImageSlider';
import { fetchHomePagePromotionVideo } from '../api/apiCall';
import { fetchSliderBelowSection } from '../api/apiCall';
import { fetchHomeAboutUsSection } from '../api/apiCall';
import { fetchHomeProducts } from '../api/apiCall';
import { fetchActiveProducts } from '../api/apiCall';
import Urls from "../constants/urls"; 
import { Link } from 'react-router-dom';

// import useScrollFadeUp from "../component/useScrollFadeUp.js"; // class for My-FadeIn-Up-Style




const Home = () => {

    /// ============================================================= Class Call Area ====================================================== ///
    // useScrollFadeUp(); // call for FadeInUp

    /// ============================================================= Variables ============================================================ ///

    /// ---------- Variables of Home Products API Call --------------------- ///
    const [homeProductsData, setHomeProductsData] = useState(null);
    const [homeProductsDataLoading, homeProductsDatasetLoading] = useState(true);

    /// ---------- Variables of Home page promotion video API Call --------- ///
    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    /// ---------- Variables of Class for Fade Animation ------------------- ///
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    /// ---------- Variables of Home Slider Below API Call ----------------- ///
    const [sliderBelowSectionData, setSliderBelowSectionDataData] = useState(null);
    const [loadingOfSliderBelowSection, setLoadingOfSliderBelowSection] = useState(true);

    /// ---------- Variables of Home About Us Content API Call ------------- ///
    const [homeAboutData, setHomeAboutData] = useState(null);
    // const [loading, setLoading] = useState(true);




    /// ============================================================== API Call Area ========================================================= ///

    /// ------------------- Home Page Active Product list API Call ----------- //
    const [activeProducts, setActiveProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
        try {
            const data = await fetchActiveProducts();
            setActiveProducts(data);
            console.log('Home Page Active Product List : ', data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
        };

        getProducts();
    }, []);

    // if (loading) return <p>Loading products...</p>;

    /// ------------------- Home Products API Call --------------------------- ///
    useEffect(() => {
        const getHomeProducts = async () => {
        try {
            const data = await fetchHomeProducts();
            setHomeProductsData(data);
            console.log('Home Products API Response Data :', data)
        } catch (error) {
            console.error('Failed to load home products:', error);
        } finally {
            setLoading(false);
        }
        };

        getHomeProducts();
    }, []);

    // if (homeProductsDataLoading) return <p>Loading Home Products...</p>;
    // if (!homeProductsData) return <p>No product data found.</p>;

    /// ------------------- Home About Us Content API Call ------------------- ///
    useEffect(() => {
        const getHomeAboutUsData = async () => {
        try {
            const data = await fetchHomeAboutUsSection();
            setHomeAboutData(data);
            console.log('Home About Us API Response Data:', data);
        } catch (error) {
            console.error('Failed to load Home About Us section:', error);
        } finally {
            setLoading(false);
        }
        };

        getHomeAboutUsData();
    }, []);

    // if (loading) return <p>Loading Home About Us section...</p>;

    /// -------------------- Home Slider Below API Call ---------------------- ///
    useEffect(() => {
        const getSliderBelowSectionData = async () => {
        try {
            const data = await fetchSliderBelowSection();
            setSliderBelowSectionDataData(data);
            console.log('Slider Below Section API Response Data:', data)
        } catch (error) {
            console.error('Failed to fetch slider below section:', error);
        } finally {
            setLoading(false);
        }
        };

        getSliderBelowSectionData();
    }, []);

    // if (loadingOfSliderBelowSection) return <p>Loading...</p>;
    // if (!sliderBelowSectionData) return <p>No data found.</p>;

    /// -------------------- Home page Promotional video API call ------------ ///
    useEffect(() => {
        const getPromotionalVideo = async () => {
        try {
            const data = await fetchHomePagePromotionVideo();
            setVideoData(data);
            console.log('Home Promotional video API Data response : ', data);
        } catch (err) {
            console.error('Failed to load promotional video:', err);
            setError('Failed to load video.');
        } finally {
            setLoading(false);
        }
        };

        getPromotionalVideo();
    }, []);

    // if (loading) return <p>Loading promotional video...</p>;
    // if (error) return <p>{error}</p>;
    // if (!videoData || !videoData.video_link) return <p>No video available.</p>;


    // ========================================================= Function Write Area ========================================================== //

    /// -------------------- Class My Face Upd Style ------------------------- ///

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



    // useEffect(() => {
    // const observer = new IntersectionObserver(
    //   entries => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add('active');
    //         observer.unobserve(entry.target); // Animation runs once
    //       }
    //     });
    //   },
    //   { threshold: 0.1 }
    // );

    // const elements = document.querySelectorAll('.my-fade-up-style');
    // elements.forEach(el => observer.observe(el));

    // return () => {
    //   elements.forEach(el => observer.unobserve(el));
    //     };
    // }, []);

    /// -------------------- Class for Fade Animation ------------------------ ///
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current); // Optional: Run animation only once
            }
        },
        { threshold: 0.1 } // Trigger when 10% is visible
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    
    



    /// ============================================================= Main Return File ======================================================= ///
    return (
        <div>
            <div className=""> 
                <div className=""></div>
                <div className=""></div>

                {/* ------------------------------------------------ Slider Section --------------------------------------------------------- */}
                <div>
                    {/* <div class="site-header__slider_top_border"></div> */}
                    <ImageSlider/>
                    <div className="site-header__slider_top_border"></div>
                </div>

                {/* ------------------------------------------------ Below The Slider Section ----------------------------------------------- */}
                {/* --- Below the Slider : quality materials, professional work, service estimate --- */}
                <section className="feature-one">
                    <div className="container">
                        <div className="feature-one__inner">
                            <div className="feature-one__dot">
                                <img src="assets/images/shapes/feature-one-dot.png" alt=""/>
                            </div>
                            <div className="row">
                                {/* --------------------------- Feature One Single Start --------------------------- */}
                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style" data-wow-delay="100ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-roof-5"></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                {/* <h3 className="feature-one__title"><a href="about.html">Quality <br/> materials </a></h3> */}
                                                {/* <h3 className="feature-one__title">{sliderBelowSectionData.text_01}</h3> */}
                                                <h3 className="feature-one__title">{sliderBelowSectionData?.text_01}</h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            {/* <p className="feature-one__text">Delta LPG always try to give you a good product for your safety.</p> */}
                                            <p className="feature-one__text">{sliderBelowSectionData?.description_01}</p>
                                            <div className="feature-one__read-more">
                                                {/* <a href="/about" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a> */}
                                                <Link to="/about"> Read More <i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                                {/* ------------------------------ Feature One Single Start ------------------------- */}
                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style-two" data-wow-delay="200ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-construction-worker"></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                {/* <h3 className="feature-one__title"><a href="team.html">Professional <br/> workers</a></h3> */}
                                                <h3 className="feature-one__title">{sliderBelowSectionData?.text_02}</h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            {/* <p className="feature-one__text">Delta LPG strive to deliver professional work of the highest quality.</p> */}
                                            <p className="feature-one__text">{sliderBelowSectionData?.description_02}</p>
                                            <div className="feature-one__read-more">
                                                {/* <a href="/about" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a> */}
                                                <Link to="/about"> Read More <i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                                {/* -------------------------------- Feature One Single Start -9999-------------------------*/}
                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style-three" data-wow-delay="300ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-online-registration"></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                {/* <h3 className="feature-one__title"><a href="contact.html">Service <br/> estimates</a></h3> */}
                                                <h3 className="feature-one__title">{sliderBelowSectionData?.text_03}</h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            {/* <p className="feature-one__text">If you want to know the cost of your service, mail to us. </p> */}
                                            <p className="feature-one__text">{sliderBelowSectionData?.description_03}</p>
                                            <div className="feature-one__read-more">
                                                {/* <a href="/about" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a> */}
                                                {/* <a href="/about">About </a> */}
                                                <Link to="/about"> Read More <i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------ About Section ( Welcome to Delta LPG ) --------------------------------- */}
                <section className="about-one">
                    {/* <div className="about-one__shape float-bob-x">
                        <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-one__left">

                                    <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                        <div ref={ref}
                                            className={`about-one__img ${isVisible ? "slideInLeft" : ""}`}
                                            style={{ visibility: isVisible ? "visible" : "hidden" }}>
                                            <img src="src/assets/images/resources/about-one-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="about-one__line">
                                            <img src="src/assets/images/shapes/about-one-line.png" alt=""/>
                                        </div>
                                        <div className="about-one__satisfied">
                                            <div className="about-one__satisfied-inner">
                                                <div className="about-one__satisfied-shape">
                                                    <img src="src/assets/images/shapes/about-one-satisfied-shape-1.png" alt=""/>
                                                </div>
                                                <div className="about-one__satisfied-content">
                                                    <div className="about-one__satisfied-count-box">
                                                        <h3 className="odometer" data-count="99">99</h3>
                                                        <span className="about-one__satisfied-percent">%</span>
                                                    </div>
                                                    <p className="about-one__satisfied-text">Satisfied customers</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-one__big-text">Delta LPG</div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-sub-title-box ">
                                            {/* <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p> */}
                                            <p className="section-sub-title my-fadeIn-up-style" data-wow-delay="100ms" >About Delta LPG 888</p>
                                            
                                            <div className="section-title-shape-1">
                                                <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>

                                        {/* test 009 */}
                                        
                                        {/* <h2 className={isVisible ? "slideInLeft" : ""} >Welcome To Delta LPG</h2> */}

                                        <div
                                            ref={ref}
                                            className={isVisible ? "fadeInUp " : ""}
                                            style={{ visibility: isVisible ? "visible" : "hidden" }}>
                                            {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Welcome To Delta LPG</h2> */}
                                            <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >{homeAboutData?.title_01}</h2>
                                            
                                        </div>

                                        {/* <div
                                            ref={ref}
                                            className={isVisible ? "slideInLeft " : ""}
                                            style={{ visibility: isVisible ? "visible" : "hidden" }}>
                                                <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Welcome To Delta LPG</h2>
                                        </div> */}




                                    </div>
                                    <p  ref={ref}
                                        className={isVisible ? "fadeInUp " : ""}
                                        style={{ visibility: isVisible ? "visible" : "hidden" }}>
                                            {homeAboutData?.description_01}
                                    </p>

                                    {/* <p  ref={ref}
                                        className={isVisible ? "fadeInUp " : ""}
                                        style={{ visibility: isVisible ? "visible" : "hidden" }}>
                                    DELTA LPG LIMITED (DLPGL), is an emerging LPG company of Bangladesh, was incorporated in Bangladesh as a Private Limited Company 
                                    with limited liability in the year 2016.
                                    </p> */}


                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
                                    DELTA LPG LIMITED (DLPGL), is an emerging LPG company of Bangladesh, was incorporated in Bangladesh as a Private Limited Company 
                                    with limited liability in the year 2016.
                                    </p> */}

                                    
                                    <ul className="list-unstyled about-one__points">
                                        <li>
                                            <div className="icon-box">
                                                <div className="icon">
                                                    <span className="icon-confirmation"></span>
                                                </div>
                                                <div className="text-box wow fadeInUp" data-wow-delay="100ms" >
                                                    {/* <p>Innovative work</p> */}
                                                    <p>{homeAboutData?.title_02}</p>
                                                </div>
                                            </div>
                                            <div className="text-box-two wow fadeInUp" data-wow-delay="100ms" >
                                                <p  ref={ref}
                                                    className={isVisible ? "fadeInUp " : ""}
                                                    style={{ visibility: isVisible ? "visible" : "hidden" }} >
                                                        {homeAboutData?.description_02}
                                                </p>

                                                {/* <p  ref={ref}
                                                    className={isVisible ? "fadeInUp " : ""}
                                                    style={{ visibility: isVisible ? "visible" : "hidden" }} >
                                                Delta LPG always try to give you a good innovation service with advanced solutions to enhance efficiency, 
                                                safety, and sustainability in LPG operations.
                                                </p> */}
                                            </div>
                                        </li>
                                        
                                        {/*<li>
                                            <div className="icon-box">
                                                <div className="icon">
                                                    <span className="icon-confirmation"></span>
                                                </div>
                                                <div className="text-box wow fadeInUp" data-wow-delay="100ms" >
                                                    <p>Certified company</p>
                                                </div>
                                            </div>
                                            <div className="text-box-two wow fadeInUp" data-wow-delay="100ms" >
                                                <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
                                            </div>
                                        </li>*/}
                                        
                                    </ul>
                                    <a href="/about" target="_blank" rel="noopener noreferrer" className="thm-btn about-one__btn wow fadeInUp" data-wow-delay="100ms" > <i className="fa fa-arrow-right"></i> Discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------ Our Products ----------------------------------------------------------- */}
                <section className="services-one ">
                    <div className="services-one-shape-1 float-bob-x">
                        <img src="src/assets/images/shapes/services-one-shape-1.png" alt=""/>
                    </div>
                    {/* <div className="services-one-shape-2">
                        <img src="src/assets/images/shapes/services-one-shape-2.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="services-one__top">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="services-one__top-left">
                                        <div className="section-title text-left">
                                            <div className="section-sub-title-box">
                                                {/* <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms">Our Products</p> */}
                                                <p className="section-sub-title my-fadeIn-up-style" data-wow-delay="100ms">{homeProductsData?.title}</p>
                                                <div className="section-title-shape-1">
                                                    <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                                </div>
                                            </div>
                                            {/* <h2 className="section-title__title_for_home wow fadeInUp" data-wow-delay="100ms">We’re providing quality LP Gas</h2> */}
                                            <h2 className="section-title__title_for_home my-fadeIn-up-style" data-wow-delay="100ms">{homeProductsData?.headline}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="services-one__top-right">
                                        <p className="services-one__top-right-text"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-one__bottom">
                            <div className="row">
                                {/* ------------------------- Product One Single Start 999 --------------------------------- */}

                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style" data-wow-delay="100ms">

                                    
                                    <div className="services-one__single">
                                        {/* --- 12 Kg Product Image --- */}
                                        <div className="services-one__img">
                                            {/*<img src="assets/images/services/services-1-1.jpg" alt="">*/}
                                            {/* <img src="src/assets/images/services/product_12_kg.jpg" alt=""/> */}

                                            {activeProducts.length > 1 && (
                                                <img
                                                src={`${Urls.baseUrl}${activeProducts[0].product_img}`}
                                                alt={activeProducts[0].product_name}
                                                />
                                            )}

                                            {/* {homeProductsData && (
                                                <>
                                                    <img
                                                    src={`${Urls.baseUrl}${homeProductsData.product_1_image}`}
                                                    alt="Product 1"
                                                    width="150"
                                                    />
                                                </>
                                            )} */}

                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-roof"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                            </div>
                                            {/* <h3 className="services-one__title"><a href="single-play-roofing.html">12 kg LP Gas</a></h3> */}
                                             {/* <h3 className="services-one__title"><a href="single-play-roofing.html">{homeProductsData?.product_1_name}</a></h3> */}
                                             <h3 className="services-one__title"><a href="single-play-roofing.html">{activeProducts[0]?.product_name}</a></h3>
                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/* <a href="order_now_12kg.html">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                                <a href="/cylinder" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}

                                {/*Services One Single Start*/}
                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style-two" data-wow-delay="200ms">
                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            {/*<img src="assets/images/services/services-1-2.jpg" alt="">*/}
                                            {/* <img src="src/assets/images/services/product_35_kg.jpg" alt=""/> */}

                                            {activeProducts.length > 1 && (
                                                <img
                                                src={`${Urls.baseUrl}${activeProducts[1].product_img}`}
                                                alt={activeProducts[1].product_name}
                                                />
                                            )}




                                            {/* {homeProductsData && (
                                                <>
                                                    <img
                                                    src={`${Urls.baseUrl}${homeProductsData.product_2_image}`}
                                                    alt="Product 1"
                                                    width="150"
                                                    />
                                                </>
                                            )} */}

                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-joist"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                            </div>
                                            {/* <h3 className="services-one__title"><a href="modified-roofing.html">33 kg LP Gas</a></h3> */}

                                            {/* <h3 className="services-one__title"><a href="single-play-roofing.html">{homeProductsData?.product_2_name}</a></h3> */}
                                            {/* <h3 className="services-one__title"><a href="single-play-roofing.html">{activeProducts[1]?.product_name}</a></h3> */}
                                            <h3 className="services-one__title"><a href="single-play-roofing.html">{activeProducts[1]?.product_name}</a></h3>

                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/* <a href="order_now_33kg.html">Read More <i className="fa fa-arrow-right"></i></a> */}
                                                <a href="/cylinder" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}

                                {/*Services One Single Start*/}
                                <div className="col-xl-4 col-lg-4 my-fadeIn-up-style-three" data-wow-delay="200ms">
                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            {/*<img src="assets/images/services/services-1-2.jpg" alt="">*/}
                                            {/* <img src="src/assets/images/services/product_45_kg.jpg" alt=""/> */}

                                            {activeProducts.length > 1 && (
                                                <img
                                                src={`${Urls.baseUrl}${activeProducts[2].product_img}`}
                                                alt={activeProducts[2].product_name}
                                                />
                                            )}



                                            {/* {homeProductsData && (
                                                <>
                                                    <img
                                                    src={`${Urls.baseUrl}${homeProductsData.product_3_image}`}
                                                    alt="Product 1"
                                                    width="150"
                                                    />
                                                </>
                                            )} */}


                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-joist"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                            </div>
                                            {/* <h3 className="services-one__title"><a href="modified-roofing.html">45 kg LP Gas</a></h3> */}
                                            {/* <h3 className="services-one__title"><a href="single-play-roofing.html">{homeProductsData?.product_3_name}</a></h3> */}
                                            <h3 className="services-one__title"><a href="single-play-roofing.html">{activeProducts[2]?.product_name}</a></h3>
                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/* <a href="order_now_33kg.html">Read More <i className="fa fa-arrow-right"></i></a> */}
                                                <a href="/cylinder" target="_blank" rel="noopener noreferrer">Read More <i className="fa fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------ Youtube Promotional Video ---------------------------------------------- */}
                <section className="trust-company ">
                    <div className="trust-company-shape-1"></div>
                    <div className="trust-company-shape-2"></div>
                    <div className="trust-company-shape-3"></div>
                    <div className="trust-company-shape-4"></div>
                    <div
                        className="trust-company-bg jarallax"
                        data-jarallax
                        data-speed="0.2"
                        data-imgposition="50% 0%"
                        style={{
                        backgroundImage: 'url(assets/images/backgrounds/trust-company-bg.jpg)',
                        }}>
                    </div>
                    {/* --------------------------- Video Link Imbed from API ---------------- */}
                    <div className="container my-fadeIn-up-style">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                            <div className="trust-company__left">
                                {videoData && videoData.video_link ? (
                                <div className="video_container">
                                    <iframe
                                    width="1200"
                                    height="615"
                                    src={videoData.video_link}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    ></iframe>
                                </div>
                                ) : (
                                <p>Loading promotional video...</p>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="container">
                        <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="trust-company__left">
                            <div className="video_container">
                                <iframe
                                width="1200"
                                height="615"
                                // src="https://www.youtube.com/embed/ecK58sun6z8?si=xWFcOWknQKws-tto&controls=0&rel=0"
                                // src={embedUrl}
                                src = {videoData.video_link}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                ></iframe>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> */}

                </section>

            </div>

        </div>

    );
};

export default Home;






































// import React, { useRef, useEffect, useState } from "react";
// import Header from './../component/Header';
// import Footer from '../component/Footer';
// import ImageSlider from '../component/ImageSlider';
import { js } from '@eslint/js';



// const Home = () => {

//     //  Class for Fade Animation
//     const ref = useRef();
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//         ([entry]) => {
//             if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.unobserve(ref.current); // Optional: Run animation only once
//             }
//         },
//         { threshold: 0.1 } // Trigger when 10% is visible
//         );

//         if (ref.current) {
//         observer.observe(ref.current);
//         }

//         return () => {
//         if (ref.current) observer.unobserve(ref.current);
//         };
//     }, []);


//     // ========================================================= Main Return File ======================================================= //
//     return (
//         <div>


//             <div className="custom-cursor">

//             <div className="custom-cursor__cursor"></div>
//             <div className="custom-cursor__cursor-two"></div>

//                             {/* ------------------------------------------------ Image Slider ------------------------ */}
//             <div>
//                 {/* <div class="site-header__slider_top_border"></div> */}
//                 <ImageSlider/>
//                 <div className="site-header__slider_top_border"></div>
//             </div>

//             {/* ------------------------------------------------ Body area of Page ------------------- */}
            
//             {/* --- Below the Slider ( quality materials, professional work, service estimate) --- */}
//             <section className="feature-one">
//                 <div className="container">
//                     <div className="feature-one__inner">
//                         <div className="feature-one__dot">
//                             <img src="assets/images/shapes/feature-one-dot.png" alt=""/>
//                         </div>
//                         <div className="row">
//                             {/*Feature One Single Start*/}
//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
//                                 <div className="feature-one__single">
//                                     <div className="feature-one__top">
//                                         <div className="feature-one__icon">
//                                             <span className="icon-roof-5"></span>
//                                         </div>
//                                         <div className="feature-one__title-box">
//                                             <h3 className="feature-one__title"><a href="about.html">Quality <br/> materials </a></h3>
//                                         </div>
//                                     </div>
//                                     <div className="feature-one__single-inner">
//                                         <p className="feature-one__text">Delta LPG always try to give you a good product for your safety.</p>
//                                         <div className="feature-one__read-more">
//                                             <a href="about.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Feature One Single End*/}
//                             {/*Feature One Single Start*/}
//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
//                                 <div className="feature-one__single">
//                                     <div className="feature-one__top">
//                                         <div className="feature-one__icon">
//                                             <span className="icon-construction-worker"></span>
//                                         </div>
//                                         <div className="feature-one__title-box">
//                                             <h3 className="feature-one__title"><a href="team.html">Professional <br/> workers</a></h3>
//                                         </div>
//                                     </div>
//                                     <div className="feature-one__single-inner">
//                                         <p className="feature-one__text">Delta LPG strive to deliver professional work of the highest quality.</p>
//                                         <div className="feature-one__read-more">
//                                             <a href="about.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Feature One Single End*/}
//                             {/*Feature One Single Start*/}
//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
//                                 <div className="feature-one__single">
//                                     <div className="feature-one__top">
//                                         <div className="feature-one__icon">
//                                             <span className="icon-online-registration"></span>
//                                         </div>
//                                         <div className="feature-one__title-box">
//                                             <h3 className="feature-one__title"><a href="contact.html">Service <br/> estimates</a></h3>
//                                         </div>
//                                     </div>
//                                     <div className="feature-one__single-inner">
//                                         <p className="feature-one__text">If you want to know the cost of your service, mail to us. </p>
//                                         <div className="feature-one__read-more">
//                                             <a href="contact.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Feature One Single End*/}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* --- About Start ( Welcome to Delta LPG ) --- */}
//             <section className="about-one">
//                 <div className="about-one__shape float-bob-x">
//                     <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-6">
//                             <div className="about-one__left">
//                                 <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
//                                 data-wow-duration="2500ms">
//                                     <div ref={ref}
//                                          className={`about-one__img ${isVisible ? "slideInLeft" : ""}`}
//                                          style={{ visibility: isVisible ? "visible" : "hidden" }}>
//                                         <img src="src/assets/images/resources/about-one-img-1.jpg" alt=""/>
//                                     </div>
//                                     <div className="about-one__line">
//                                         <img src="src/assets/images/shapes/about-one-line.png" alt=""/>
//                                     </div>
//                                     <div className="about-one__satisfied">
//                                         <div className="about-one__satisfied-inner">
//                                             <div className="about-one__satisfied-shape">
//                                                 <img src="src/assets/images/shapes/about-one-satisfied-shape-1.png" alt=""/>
//                                             </div>
//                                             <div className="about-one__satisfied-content">
//                                                 <div className="about-one__satisfied-count-box">
//                                                     <h3 className="odometer" data-count="99">99</h3>
//                                                     <span className="about-one__satisfied-percent">%</span>
//                                                 </div>
//                                                 <p className="about-one__satisfied-text">Satisfied customers</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="about-one__big-text">Delta LPG</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-6">
//                             <div className="about-one__right">
//                                 <div className="section-title text-left">
//                                     <div className="section-sub-title-box">
//                                         <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
//                                         <div className="section-title-shape-1">
//                                             <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
//                                         </div>
//                                     </div>

//                                     {/* test 009 */}
                                    
//                                     {/* <h2 className={isVisible ? "slideInLeft" : ""} >Welcome To Delta LPG</h2> */}

//                                     <div
//                                         ref={ref}
//                                         className={isVisible ? "fadeInUp " : ""}
//                                         style={{ visibility: isVisible ? "visible" : "hidden" }}>
//                                         <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Welcome To Delta LPG</h2>
//                                     </div>

//                                     {/* <div
//                                         ref={ref}
//                                         className={isVisible ? "slideInLeft " : ""}
//                                         style={{ visibility: isVisible ? "visible" : "hidden" }}>
//                                             <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Welcome To Delta LPG</h2>
//                                     </div> */}




//                                 </div>

//                                 <p  ref={ref}
//                                     className={isVisible ? "fadeInUp " : ""}
//                                     style={{ visibility: isVisible ? "visible" : "hidden" }}>
//                                 DELTA LPG LIMITED (DLPGL), is an emerging LPG company of Bangladesh, was incorporated in Bangladesh as a Private Limited Company 
//                                 with limited liability in the year 2016.
//                                 </p>


//                                 {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
//                                 DELTA LPG LIMITED (DLPGL), is an emerging LPG company of Bangladesh, was incorporated in Bangladesh as a Private Limited Company 
//                                 with limited liability in the year 2016.
//                                 </p> */}

                                








//                                 <ul className="list-unstyled about-one__points">
//                                     <li>
//                                         <div className="icon-box">
//                                             <div className="icon">
//                                                 <span className="icon-confirmation"></span>
//                                             </div>
//                                             <div className="text-box wow fadeInUp" data-wow-delay="100ms" >
//                                                 <p>Innovative work</p>
//                                             </div>
//                                         </div>
//                                         <div className="text-box-two wow fadeInUp" data-wow-delay="100ms" >
//                                             <p  ref={ref}
//                                                 className={isVisible ? "fadeInUp " : ""}
//                                                 style={{ visibility: isVisible ? "visible" : "hidden" }} >
//                                             Delta LPG always try to give you a good innovation service with advanced solutions to enhance efficiency, 
//                                             safety, and sustainability in LPG operations.
//                                             </p>
//                                         </div>
//                                     </li>
                                    
//                                     {/*<li>
//                                         <div className="icon-box">
//                                             <div className="icon">
//                                                 <span className="icon-confirmation"></span>
//                                             </div>
//                                             <div className="text-box wow fadeInUp" data-wow-delay="100ms" >
//                                                 <p>Certified company</p>
//                                             </div>
//                                         </div>
//                                         <div className="text-box-two wow fadeInUp" data-wow-delay="100ms" >
//                                             <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
//                                         </div>
//                                     </li>*/}
                                    
//                                 </ul>
//                                 <a href="about.html" className="thm-btn about-one__btn wow fadeInUp" data-wow-delay="100ms" > <i className="fa fa-arrow-right"></i> Discover more</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
            
//             {/* --- Our Products  --- */}
//             <section className="services-one">
//                 <div className="services-one-shape-1 float-bob-x">
//                     <img src="src/assets/images/shapes/services-one-shape-1.png" alt=""/>
//                 </div>
//                 <div className="services-one-shape-2">
//                     <img src="src/assets/images/shapes/services-one-shape-2.png" alt=""/>
//                 </div>
//                 <div className="container">
//                     <div className="services-one__top">
//                         <div className="row">
//                             <div className="col-xl-7 col-lg-6">
//                                 <div className="services-one__top-left">
//                                     <div className="section-title text-left">
//                                         <div className="section-sub-title-box">
//                                             <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms">Our Products</p>
//                                             <div className="section-title-shape-1">
//                                                 <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
//                                             </div>
//                                         </div>
//                                         <h2 className="section-title__title_for_home wow fadeInUp" data-wow-delay="100ms">We’re providing quality LP Gas</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5 col-lg-6">
//                                 <div className="services-one__top-right">
//                                     <p className="services-one__top-right-text"></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="services-one__bottom">
//                         <div className="row">
//                             {/* ------------------------- Product One Single Start --------------------------------- */}

//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">

                                
//                                 <div className="services-one__single">
//                                     <div className="services-one__img">
//                                         {/*<img src="assets/images/services/services-1-1.jpg" alt="">*/}
//                                         <img src="src/assets/images/services/product_12_kg.jpg" alt=""/>
//                                     </div>
//                                     <div className="services-one__content">
//                                         <div className="services-one__icon_design_2">
//                                             {/*<span className="icon-roof"></span>*/}
//                                             <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
//                                         </div>
//                                         <h3 className="services-one__title"><a href="single-play-roofing.html">12 kg LP Gas</a></h3>
//                                         {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
//                                         <div className="services-one__read-more">
//                                             <a href="order_now_12kg.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Services One Single End*/}
//                             {/*Services One Single Start*/}
//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
//                                 <div className="services-one__single">
//                                     <div className="services-one__img">
//                                         {/*<img src="assets/images/services/services-1-2.jpg" alt="">*/}
//                                         <img src="src/assets/images/services/product_35_kg.jpg" alt=""/>
//                                     </div>
//                                     <div className="services-one__content">
//                                         <div className="services-one__icon_design_2">
//                                             {/*<span className="icon-joist"></span>*/}
//                                             <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
//                                         </div>
//                                         <h3 className="services-one__title"><a href="modified-roofing.html">33 kg LP Gas</a></h3>
//                                         {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
//                                         <div className="services-one__read-more">
//                                             <a href="order_now_33kg.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Services One Single End*/}
//                             {/*Services One Single Start*/}
//                             <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
//                                 <div className="services-one__single">
//                                     <div className="services-one__img">
//                                         {/*<img src="assets/images/services/services-1-2.jpg" alt="">*/}
//                                         <img src="src/assets/images/services/product_45_kg.jpg" alt=""/>
//                                     </div>
//                                     <div className="services-one__content">
//                                         <div className="services-one__icon_design_2">
//                                             {/*<span className="icon-joist"></span>*/}
//                                             <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
//                                         </div>
//                                         <h3 className="services-one__title"><a href="modified-roofing.html">45 kg LP Gas</a></h3>
//                                         {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
//                                         <div className="services-one__read-more">
//                                             <a href="order_now_33kg.html">Read More <i className="fa fa-arrow-right"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*Services One Single End*/}
//                         </div>
//                     </div>
//                 </div>
//             </section>
                

                

//             </div>


            


//         </div>

//     );
// };

// export default Home;