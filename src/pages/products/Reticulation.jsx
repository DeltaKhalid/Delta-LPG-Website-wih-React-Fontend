// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchReticulationPage } from '../../api/apiCall';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';

const Reticulation = () => {


    // ======================================================= Reticulation API Call =================================== //
    const [ReticulationData, SetReticulationData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getReticulationData = async () => {
        try {
            const data = await fetchReticulationPage();
            SetReticulationData(data);
            console.log('Reticulation API Response Data:', data)
        } catch (error) {
            console.error('Error fetching Reticulation data:', error);
        } finally {
            setLoading(false);
        }
        };

        getReticulationData();
    }, []);

    if (loading) return <p>Loading Reticulation Page...</p>;
    if (!ReticulationData) return <p>No data found.</p>;

    // ======================================================= Main Return Area ======================================== //
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is Reticulation Page.</h1> */}

            
            {/*Page Header Start*/}
            <section className="page-header fadeInUp">
                <div
                className="page-header-bg"
                style={{ backgroundImage: 'url(src/assets/images/backgrounds/page-header-bg.jpg)' }}></div>

                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Reticulation</li>
                        </ul>
                        <h2>Reticulation</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}

                      {/* Headline of Board of Directors */}
            <div className="mission_vision_headline_padding">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            {/* <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >DELTA LPG</p> */}
                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >{ReticulationData.section_headline_01}</p>
                            <div className="section-title-shape-1">
                                <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                            </div>
                        </div>
                        {/*<h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Mission and  Vision <br> </h2>*/}
                    </div>
                </div>
            </div>

            {/* --- ============================================ section 3 =================================== --- */}
            <section className="distribution_headline">
                {/* <div className="about-one__shape float-bob-x">
                    <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="about-one__left">
                                <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                    <div className="reticulation_img_box_design">
                                        <img src="src/assets/images/resources/reticulation_img_01.png" alt=""/>
                                    </div>
                                    
                                    {/*<div className="about-one__img">
                                        <img src="assets/images/resources/reticulation_img_01.png" alt=""/>
                                    </div>*/}
                                    
                                    
                                    <div className="about-one__line">
                                        <img src="src/assets/images/shapes/about-one-line.png" alt=""/>
                                    </div>
                                    <div className="about-one__satisfied">
                                        <div className="about-one__satisfied-inner">
                                            
                                            {/*<div className="about-one__satisfied-shape">
                                                <img src="assets/images/shapes/about-one-satisfied-shape-1.png" alt=""/>
                                            </div>*/}
                                            
                                            {/*
                                            <div className="about-one__satisfied-content">
                                                <div className="about-one__satisfied-count-box">
                                                    <h3 className="odometer" data-count="98">00</h3>
                                                    <span className="about-one__satisfied-percent">%</span>
                                                </div>
                                                <p className="about-one__satisfied-text">Satisfied customers</p>
                                            </div>*/}
                                            
                                        </div>
                                    </div>
                                    <div className="about-one__big-text">Delta LPG</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* First Section  */}
                        
                        <div className="col-xl-6 col-md-12">
                            <div className="about-one__right">
                                <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }}>
                                    {ReticulationData.description_01}
                                </p>
                            
                                {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }}>
                                The Reticulated System is the latest and safest centralized storage solution (cylinder bank or bulk tank) 
                                designed for uninterrupted gas supply to large real estate developments, commercial buildings, and industrial facilities.
                                DELTA LPG adheres to the highest standards of quality and safety, fully conforming to all statutory guidelines. 
                                Equipped with technical expertise, extensive experience, and a high level of professionalism, 
                                we offer customized LPG storage solutions that include design, installation, setup, and commissioning 
                                tailored to your project needs. Our professional team ensures the safest installation at your premises, 
                                while our robust supply chain guarantees that you will never run out of LPG.
                                </p> */}
                                
                                <div className="reticulation_page_title_design_two">
                                
                                    <div className="section-sub-title-box">
                                        {/*<p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>*/}
                                        {/*<div className="section-title-shape-1">
                                            <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                        </div>*/}
                                    </div>
                                    
                                    <h5 className="reticulation_page_title_design wow fadeInUp" data-wow-delay="100ms" >Advantage of Reticulated system:</h5>
                                </div>
                                {/*<p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = "text-align: justify" >
                                LPG distribution System is designed with a integrated link of supply chain 
                                to distribute LP Gas in Northern and southern Zone of Bangladesh. Mother Vessel with Imported LP Gas will arrive at our Chittagong 
                                and Mongla facility. Our LP Gas Carrying Ships will distribute LP Gas in Greater Dhaka, Comilla & Sylhet Zone Mini satellite 
                                Plant will help to mitigate cost of Carrying of Cylinder and reduce time of Cylinder refilling and also availability 
                                of LPG around the country for the end users. LP Gas will be used as a cleaner fuel in Household, Restaurant, Hotels, 
                                Mess, Workshop, Small Industries, and Factories in the form of cylinder and by Bobtail/LP Gas Tank Lorry to 
                                AUTO GAS STATION for all kinds of Vehicles use.
                                
                                </p>*/}

                                {/* <p>
                                    {ReticulationData.advantage_list}
                                </p> */}
                                
        
                                <p>
                                    → Uninterrupted supply.
                                    <br />
                                    → Free from refill booking & reminders for gas cylinders.
                                    <br />
                                    → Secured from explosion.
                                    <br />
                                    → No floor damage from rolling of the cylinders.
                                    <br />
                                    → No waste of valuable kitchen space.
                                    <br />
                                    → 100% safe LPG supplied at optimum pressure to kitchen/end user’s point.
                                    <br />
                                    → Saving of time & money.
                                </p>

                                
                                
                                

                                
                                
                                
                            </div>
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </section>

            {/* --------------------------- ------------------------------- */}
            {/* ---  --- */}
            {/* Headline of Board of Directors */}
            <div className="mission_vision_headline_padding">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            {/* <h1 className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Our Plants</h1> */}
                            <h1 className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >{ReticulationData.section_headline_02}</h1>
                            <div className="section-title-shape-1">
                                <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                            </div>
                        </div>
                        {/*<h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Mission and  Vision <br> </h2>*/}
                    </div>
                </div>
            </div>

            {/* // ================================================ section three ======================== // */}
            <section className="distribution_headline">
                {/* <div className="about-one__shape float-bob-x">
                    <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                </div> */}
                <div className="container">
                    <div className="row">
                    

                        
                        {/* First Section  */}
                        
                        <div className="col-xl-6 col-md-12">
                            <div className="about-one__right">
                            
                                <div className="reticulation_page_title_design_two">
                                
                                    {/*<div className="section-sub-title-box">
                                        <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                        </div>
                                    </div>*/}
                                    
                                    {/* <h5 className="reticulation_page_title_design wow fadeInUp" data-wow-delay="100ms" >Reticulated System with Cylinder Bank:</h5> */}
                                    <h5 className="reticulation_page_title_design wow fadeInUp" data-wow-delay="100ms" >{ReticulationData.title_02}</h5>
                                </div>
                                <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }} >
                                   {ReticulationData.description_02}
                                </p>

                                {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }} >
                                A Cylinder Bank comprises multiple cylinders organized into two manifolds: one active and the other on standby as a backup. 
                                When the cylinders in the active manifold are empty, the standby manifold takes over, and the empty cylinders are replaced 
                                with filled ones. A reticulated system using a Cylinder Bank can supply LPG to residential apartments, housing societies, 
                                ceramic industries, food processing plants, manufacturing industries, dryers, boilers, welding sections, and machinery 
                                requiring high-pressure LP gas.
                                </p> */}
                                
                                <div className="empty_div_20px"> </div>
                                
                                {/* para 2 */}
                                <div className="reticulation_page_title_design_two">
                                
                                    {/*<div className="section-sub-title-box">
                                        <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                        </div>
                                    </div>*/}
                                    
                                    {/* <h5 className="reticulation_page_title_design wow fadeInUp" data-wow-delay="100ms" >Reticulated System with Bullet Tanks:</h5> */}
                                    <h5 className="reticulation_page_title_design wow fadeInUp" data-wow-delay="100ms" >{ReticulationData.title_03}</h5>
                                </div>
                                <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }} >
                                   {ReticulationData.description_03}
                                </p>

                                {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: 'justify' }} >
                                When monthly LPG consumption exceeds 1000 KG, a bulk storage facility, known as a Bullet Tank solution, is recommended. 
                                This solution is primarily used by large-scale industries with significant LPG consumption needs. The required tank 
                                sizes are determined by the peak LPG consumption. All Bulk Storage designs adhere to standard codes and the tanks are 
                                outfitted with standard accessories such as Rochester gauges, remote-operated valves, regulators, excess flow check valves, 
                                gauges, vaporizers, and instrument control panels.
                                </p> */}
                                
                                

                                
                            </div>
                        </div>
                        
                        {/* image from Right */}
                        
                        <div className="col-xl-6 col-md-12">
                            <div className="about-one__righ">
                                <div className="about-one__img-box wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                
                                    <div className="reticulation_img_box_design">
                                        <img src="src/assets/images/resources/reticulation_img_05.png" alt=""/>
                                    </div>
                                
                                    {/*<div className="about-one__img">
                                        <img src="assets/images/resources/reticulation_img_01.png" alt=""/>
                                    </div>*/}
                                    
                                    
                                    <div className="about-one__line">
                                        <img src="src/assets/images/shapes/about-one-line.png" alt=""/>
                                    </div>
                                    
                                    <div className="about-one__satisfied">
                                        <div className="about-one__satisfied-inner">
                                            
                                            {/*<div className="about-one__satisfied-shape">
                                                <img src="assets/images/shapes/about-one-satisfied-shape-1.png" alt=""/>
                                            </div>*/}
                                            
                                            {/*
                                            <div className="about-one__satisfied-content">
                                                <div className="about-one__satisfied-count-box">
                                                    <h3 className="odometer" data-count="98">00</h3>
                                                    <span className="about-one__satisfied-percent">%</span>
                                                </div>
                                                <p className="about-one__satisfied-text">Satisfied customers</p>
                                            </div>*/}
                                            
                                        </div>
                                    </div>
                                    <div className="about-one__big-text">Delta LPG</div>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </section>



            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Footer/> */}
        </div>
    );
};

export default Reticulation;