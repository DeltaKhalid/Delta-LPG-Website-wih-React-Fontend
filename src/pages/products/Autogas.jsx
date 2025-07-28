import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const Autogas = () => {
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is AutoGas page.</h1> */}

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
                            <li>Autogas</li>
                        </ul>
                        <h2>Autogas</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/* Headline of Board of Directors */}
            <div className="product_head_margin">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Delta LPG</p>
                            <div className="section-title-shape-1">
                                <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                            </div>
                        </div>
                        <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" > AUTOGAS <br/> </h2>
                    </div>
                </div>
            </div>

            {/*Services Page Start*/}
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        {/*Services One Single Start*/}
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><a href="modified-roofing.html"></a></h3>
                                    <img className="centered-image" src="src/assets/images/resources/delta_auto_gas_06.jpg" alt=""/>
                                    {/* 50 px Empty Div */}
                                    {/*<div className="empty_div"></div>*/}
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

            {/* ---  --- */}
            <section className="cylinder_page">
            <div className="container">
                <div className="row">
				

					

                    {/*Services One Single Start*/}
                    <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__content">
                                
                                <p className="services-one__text">
								Auto Gas: The Premier Alternative Fuel for Cars
								Auto Gas is rapidly emerging as the leading alternative fuel to petrol for automobiles. Across the globe, 
								many developed nations are transitioning their vehicles from gasoline to Auto Gas. Here are the key 
								reasons driving this shift:
								
								{/* 50 px Empty Div */}
								{/*<div className="empty_div"></div>*/}
								</p>
								
								<h3 className="auto_gas_page_title_two"><a href="#">1. Environmental Benefits : </a></h3>
								<p className="auto_gas_page_body_text">
								Auto Gas produces fewer emissions compared to traditional gasoline, helping to reduce air pollution and combat climate change.
								</p>
								
								<h3 className="auto_gas_page_title_two"><a href="#">2. Cost Efficiency: : </a></h3>
								<p className="auto_gas_page_body_text">
								Auto Gas is often more affordable than petrol, offering significant savings for drivers and reducing overall transportation costs.
								</p>
								
								<h3 className="auto_gas_page_title_two"><a href="#">3. Engine Longevity: : </a></h3>
								<p className="auto_gas_page_body_text">
								Vehicles running on Auto Gas typically experience less wear and tear, which can result in longer engine life and lower maintenance expenses.
								</p>
								
								<h3 className="auto_gas_page_title_two"><a href="#">4. Energy Security : </a></h3>
								<p className="auto_gas_page_body_text">
								By diversifying fuel sources, countries can enhance their energy security and reduce dependence on imported oil.
								</p>
							
								
								
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


            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Footer/> */}
        </div>
    );
};

export default Autogas;