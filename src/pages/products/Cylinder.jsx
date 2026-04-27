// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchCylinderPage } from '../../api/apiCall';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';
import useVisibility from '../../component/useVisibility';
// --- for div fadeUp --- //
import FadeUpTrigger from '../../assets/js/script';
import '../../assets/css/my.css'; // Your CSS file with divFadeUp and animate




const Cylinder = () => {

    const { ref, isVisible } = useVisibility();

    // ========================================================== Cylinder API Call ================================= //
    const [cylinderData, setCylinderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCylinderData = async () => {
        try {
            const data = await fetchCylinderPage();
            setCylinderData(data);
            console.log('Cylinder API Call Response data:', data)
        } catch (error) {
            console.error('Failed to load cylinder data:', error);
        } finally {
            setLoading(false);
        }
        };

        getCylinderData();
    }, []);

    if (loading) return <p>Loading cylinder data...</p>;
    if (!cylinderData) return <p>No data available.</p>;

    // ========================================================== Main Return Area ================================== //
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is Cylinder Page.</h1> */}

            <div className="">

                <div className=""></div>
                <div className="custom-cursor__cursor-two"></div>

                {/* ---------------------------------------------------------- Pre Loder ----------------------------------------------------------------------- */}
                {/* <div class="preloader">
                    <div class="preloader__image"></div>
                </div> */}
                {/* // /.preloader  */}


                {/* // ============= Page Wrapper ===============// */}
                <div className="page-wrapper">
                    {/* === Header === */}
                    {/* <Header/> */}

                    {/* <h1> This is Cylinder Page</h1> */}


                    {/*Page Header Start*/}
                    <section className="page-header fadeInUp">
                        <div
                        className="page-header-bg"
                        style={{ backgroundImage: 'url(src/assets/images/backgrounds/page-header-bg.jpg)' }}>
                        </div>

                        <div className="container">
                            <div className="page-header__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><a href="index.html">Home</a></li>
                                    <li><span>/</span></li>
                                    <li>Cylinder</li>
                                </ul>
                                <h2>Cylinder</h2>
                            </div>
                        </div>
                    </section>
                    {/*Page Header End*/}


                    {/* Headline of Board of Directors */}
                    <div className="product_head_margin">
                        <div className="container">
                            <div className="section-title text-center ">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Delta LPG</p>
                                    <div className="section-title-shape-1">
                                        <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                    </div>
                                </div>
                                <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Products <br/> </h2>
                            </div>
                        </div>
                    </div>


                    {/* ------------------------------------------ Product Area One ---------------------------------------- */}
                    <section className="cylinder_page">
                        <div className="container">
                            <div className="row">
                                {/*Services One Single Start*/}
                                <div 
                                    className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    



                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            <img src="src/assets/images/services/product_12_kg.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-roof"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                                
                                            </div>
                                            {/*<h3 className="services-one__title"><a href="single-play-roofing.html">12 kg LP Gas</a></h3>*/}
                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/*<a href="#">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*Services One Single End*/}
                                

                                {/*Services One Single Start*/}
                                <div className="col-xl-8 col-lg-8 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="services-one__single">
                                        <div className="services-one__content">
                                            {/* <h3 className="services-one__title"><a href="modified-roofing.html">12 kg LP Gas</a></h3> */}
                                            <h3 className="services-one__title">{cylinderData.cylinder_1_name}</h3>
                                            <p className="services-one__text">
                                            {cylinderData.cylinder_1_description}
                                            </p>

                                            {/* <p className="services-one__text">
                                            A 12 kg liquefied petroleum (LP) gas cylinder is a popular choice for households and small businesses. 
                                            These cylinders contain a propane-butane mix, compressed into liquid form, and are widely used for cooking, 
                                            heating, and sometimes even in off-grid energy setups.
                                            Safety is paramount with LP gas. Ensure the cylinder is stored upright, away from heat sources, and in a well-ventilated area. 
                                            Regularly check for leaks using soapy water, and always connect and disconnect appliances according to the manufacturer's instructions. */}
                                            {/* 50 px Empty Div */}
                                            {/* <div className="empty_div_20px"></div> */}
                                            {/* </p> */}
                                            <div className="services-one__read-more">
                                                {/*<a href="modified-roofing.html">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}
                                
                            </div>
                        </div>
                    </section>

                    {/* ------------------------------------------ Product Area Twok ---------------------------------------- */}
                    <section className="cylinder_page">
                        <div className="container">
                            <div className="row">
                            
                                {/*Services One Single Start*/}
                                <div className="col-xl-8 col-lg-8 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="services-one__single">
                                        <div 
                                            className="services-one__content"
                                            // ref={ref}
                                            // className={`services-one__content ${isVisible ? "animated fadeInUp" : ""}`}
                                            // data-wow-delay={isVisible ? "500ms" : undefined}
                                            // style={{ visibility: isVisible ? "visible" : "hidden" }}
                                            >

                                            {/* <h3 className="services-one__title"><a href="modified-roofing.html">33 kg LP Gas</a></h3> */}
                                            <h3 className="services-one__title">{cylinderData.cylinder_2_name}</h3>
                                            <p className="services-one__text">{cylinderData.cylinder_2_description}</p>

                                            {/* <p className="services-one__text">
                                            A 33 kg liquefied petroleum (LP) gas cylinder is a robust option for high-demand applications. 
                                            With a mix of propane and butane, these cylinders serve as a vital fuel source for commercial kitchens, 
                                            industrial settings, and large households. Handling and storage of a 33 kg cylinder requires adherence 
                                            to safety standards. It should be kept upright in a ventilated space, away from ignition sources. 
                                            Regular inspections for leaks using soapy water and proper connection techniques are crucial to ensure safety. */}
                                            
                                            {/* 50 px Empty Div */}
                                            {/* <div className="empty_div_20px"></div> */}
                                            
                                            {/* </p> */}
                                            <div className="services-one__read-more">
                                                {/*<a href="modified-roofing.html">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}
                            
                                {/*Services One Single Start*/}
                                <div 
                                
                                    className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms"
                                    // ref={ref}
                                    // className={`col-xl-4 col-lg-4 ${isVisible ? "animated fadeInUp" : ""}`}
                                    // data-wow-delay={isVisible ? "00ms" : undefined}
                                    // style={{ visibility: isVisible ? "visible" : "hidden" }}
                                    >


                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            <img src="src/assets/images/services/product_35_kg.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-roof"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                                
                                            </div>
                                            {/*<h3 className="services-one__title"><a href="single-play-roofing.html">12 kg LP Gas</a></h3>*/}
                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/*<a href="#">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*Services One Single End*/}
                                
                            </div>
                        </div>
                    </section>

                    {/* ------------------------------------------ Product Area Three ---------------------------------------- */}
                    <section className="cylinder_page">
                        <div className="container">
                            <div className="row">
                                {/*Services One Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            <img src="src/assets/images/services/product_45_kg.jpg" alt=""/>
                                        </div>
                                        <div className="services-one__content">
                                            <div className="services-one__icon_design_2">
                                                {/*<span className="icon-roof"></span>*/}
                                                <img src="src/assets/images/shapes/fire_icon_40.png" alt=""/>
                                                
                                            </div>
                                            {/*<h3 className="services-one__title"><a href="single-play-roofing.html">12 kg LP Gas</a></h3>*/}
                                            {/*<p className="services-one__text">Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>*/}
                                            <div className="services-one__read-more">
                                                {/*<a href="#">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*Services One Single End*/}
                                
                                {/*Services One Single Start*/}
                                <div className="col-xl-8 col-lg-8 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="services-one__single">
                                        <div className="services-one__content">
                                            {/* <h3 className="services-one__title"><a href="modified-roofing.html">45 kg LP Gas</a></h3> */}
                                            <h3 className="services-one__title"><a href="modified-roofing.html">{cylinderData.cylinder_3_name}</a></h3>
                                            <p className="services-one__text">
                                            {cylinderData.cylinder_3_description}
                                            </p>

                                            {/* <p className="services-one__text">
                                            A 45 kg liquefied petroleum (LP) gas cylinder is ideal for high-consumption environments. 
                                            Containing a mixture of propane and butane, these cylinders cater to a broad spectrum of uses, 
                                            including large households, commercial kitchens, industrial applications, and even agricultural needs.
                                            Safety considerations are essential with such large cylinders. They should be stored upright in a secure, 
                                            ventilated area, and far from ignition sources. Regular checks for leaks using soapy water and careful handling 
                                            during connection and disconnection are necessary to prevent hazards. */}
                                            {/* 50 px Empty Div */}
                                            {/*<div className="empty_div_10px"></div>*/}
                                            
                                            {/* </p> */}
                                            <p data-wow-delay="200ms">Hello</p>
                                            <div className="services-one__read-more">
                                                {/*<a href="modified-roofing.html">Read More <i className="fa fa-arrow-right"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Services One Single End*/}
                                
                            </div>
                        </div>
                    </section>



                    {/* === Footer === */}
                    {/* <Footer/> */}



                </div>




            </div>



            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Footer/> */}
        </div>
    );
};

export default Cylinder;