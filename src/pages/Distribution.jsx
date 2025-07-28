// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchDistributionPage } from '../api/apiCall';

import '../assets/css/my.css'; // Adjust path if needed
// import useScrollFadeUp from "../component/useScrollFadeUp.js"; // class for My-FadeIn-Up-Style



const Distribution = () => {

    /// =============================================== Class Call Area ===================================== ///
    // useScrollFadeUp(); // call for FadeInUp

    useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            console.log('Observed entry:', entry); // ✅ Debug
            if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
            }
        });
        },
        { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.distributionFadeInUp');
    elements.forEach(el => observer.observe(el));

    return () => {
        elements.forEach(el => observer.unobserve(el));
    };
    }, []);


    // useEffect(() => {
    // const observer = new IntersectionObserver(
    //     entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //         entry.target.classList.add('active');
    //         observer.unobserve(entry.target);
    //         }
    //     });
    //     },
    //     { threshold: 0.1 }
    // );

    // const elements = document.querySelectorAll(
    //     '.my-fadeIn-up-style, .my-fadeIn-up-style-two, .my-fadeIn-up-style-three'
    // );
    // elements.forEach(el => observer.observe(el));

    // return () => {
    //     elements.forEach(el => observer.unobserve(el));
    // };
    // }, []);


    // ================================================ Distribution API Call =============================== //
    const [distributionData, setDistributionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDistributionData = async () => {
        try {
            const data = await fetchDistributionPage();
            setDistributionData(data);
            console.log('Distribution API Call Data :', data);
        } catch (error) {
            console.error('Failed to load distribution data:', error);
        } finally {
            setLoading(false);
        }
        };

        getDistributionData();
    }, []);

    if (loading) return <p>Loading distribution info...</p>;





    /// ====================================================================== Main Return Area =================================================== //
    return (
        <div>
            {/* <h1>This is Distribution Page</h1> */}
            <div className="">

                <div className=""></div>
                <div className=""></div>

                {/* ------------------------------ Pre Loader ----------------------- */}
                {/* <div class="preloader">
                    <div class="preloader__image"></div>
                </div> */}
                {/* // /.preloader  */}


                {/* // ============= Page Wrapper ===============// */}
                <div className="page-wrapper">
                    {/* === Header === */}
                    {/* <Header/> */}

                    {/* <h1> This is Distribution Page</h1> */}

                    {/* --- page Head --- */}
                    <section className="page-header fadeInUp">
                        <div
                        className="page-header-bg"
                        style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>

                        </div>

                        <div className="container">
                            <div className="page-header__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><a href="index.html">Home</a></li>
                                    <li><span>/</span></li>
                                    <li>Distribution</li>
                                </ul>
                                <h2>Distribution</h2>
                            </div>
                        </div>
                    </section>

                    {/* --- page Content --- */}
                    <div className="mission_vision_headline_padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-sub-title-box">

                                {/* <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >OUR FACILITIES</p> */}
                                <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >{distributionData.title_one}</p>

                                <div className="section-title-shape-1">
                                    <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                </div>
                            </div>
                            {/*<h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Mission and  Vision <br> </h2>*/}
                        </div>
                    </div>
                    </div>

                    <div>
                        <h1 className="distributionFadeInUp">This is a Test case.</h1>
                    </div>
                
                
                <section className="distribution_headline">
                    <div className="about-one__shape float-bob-x">
                        <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-one__left">
                                    <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                        <div className="about-one__img">
                                            <img src="src/assets/images/resources/distribution_img_1.2.png" alt=""/>
                                        </div>
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
                            
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                
                                    <div className="section-title text-left">
                                    
                                        {/*<div className="section-sub-title-box">
                                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>*/}
                                        
                                        {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >OUR FACILITIES</h2> */}
                                        <h2 className="section-title__title " data-wow-delay="100ms" >{distributionData.headline_one}</h2>
                                    </div>

                                    <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: "justify" }}>
                                    {distributionData.description_one}
                                    </p>


                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style={{ textAlign: "justify" }}>
                                    With our strong Delivery network of high quality road tankers and numerous trucks - 
                                    Delta LPG is able to provide service to our customers nationwide - hassle free.
                                    With strategically located satellite plant and numerous RDCs all across the country - 
                                    Delta LPG is poised to bring high quality liquified gas to your doorstep
                                    </p> */}
                                    
                                    <div className="section-title text-left">
                                    
                                        <div className="section-sub-title-box">
                                            {/*<p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>*/}
                                            {/*<div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>*/}
                                        </div>
                                        
                                        {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Distribution System</h2> */}
                                        <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >{distributionData.headline_two}</h2>
                                    </div>
                                    <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    {distributionData.description_two}
                                    </p>

                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    LPG distribution System is designed with a integrated link of supply chain 
                                    to distribute LP Gas in Northern and southern Zone of Bangladesh. Mother Vessel with Imported LP Gas will arrive at our Chittagong 
                                    and Mongla facility. Our LP Gas Carrying Ships will distribute LP Gas in Greater Dhaka, Comilla & Sylhet Zone Mini satellite 
                                    Plant will help to mitigate cost of Carrying of Cylinder and reduce time of Cylinder refilling and also availability 
                                    of LPG around the country for the end users. LP Gas will be used as a cleaner fuel in Household, Restaurant, Hotels, 
                                    Mess, Workshop, Small Industries, and Factories in the form of cylinder and by Bobtail/LP Gas Tank Lorry to 
                                    AUTO GAS STATION for all kinds of Vehicles use.
                                    </p> */}
                                    
                                    
                                    

                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                            
                            
                            
                        </div>
                    </div>
                </section>
                {/* --------------------------------------------------------------------------- Area 2 9999 ------------------------------------------------------------ */}
                
                <div>
                        <h1 className="distributionFadeInUp">This is a Test case.</h1>
                    </div>
                
                {/* Headline of Board of Directors */}
                <div className="mission_vision_headline_padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-sub-title-box">

                                <h1 className="section-sub-title my-fade-up-style"  >Our Plants 55</h1>
                                {/* <h1 className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >{distributionData.title_two}</h1> */}

                                <div className="section-title-shape-1">
                                    <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                </div>
                            </div>
                            {/*<h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Mission and  Vision <br> </h2>*/}
                        </div>
                    </div>
                </div>
                
                <section className="distribution_headline">
                    <div className="about-one__shape float-bob-x">
                        <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                        

                            
                            {/* First Section  */}
                            
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                
                                    <div className="section-title text-left">
                                    
                                        {/*<div className="section-sub-title-box">
                                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>*/}
                                        
                                        {/* <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >Unit 01: Mongla LPG Storage and Bottling Plant</h5> */}
                                        {/* <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >{distributionData.headline_three}</h5> */}
                                        <h5 className="section-title__title_2 wow fadeInUp">{distributionData.headline_three}</h5>
                                    </div>

                                    <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    {distributionData.description_three}
                                    </p>

                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    Situated in Mongla Port Industrial Area, the plan is equipped with three Spherical Tanks having total capacity of 5000mt and a 
                                    yearly Storage capacity of 180,000 MT to store Imported LP Gas. The plant is equipped with its own jetty facility and easily handle 
                                    any vessel upto 6M draft. The plant has filling facility for 12.5 Kg, 15 kg, 33 Kg & 45 kg LP gas Cylinders. The plant has also Bulk 
                                    filling facilities to Bobtail/LP gas carrying lorry.
                                    </p> */}
                                    
                                    {/* para 2 */}
                                    <div className="section-title text-left">
                                    
                                        {/*<div className="section-sub-title-box">
                                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>*/}
                                        
                                        {/* <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >Unit 01: Mongla LPG Storage and Bottling Plant</h5> */}
                                        <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >{distributionData.headline_four}</h5>
                                    </div>
                                    <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    {distributionData.description_four}
                                    </p>

                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    Located in Tengramari , Rampal , Bagerhat over a area of 4.38 Acres of land. The plant has two lines production facility 
                                    of 12.5 Kg, 15 kg, 33 Kg & 45 kg LP gas Cylinders. Machineries for Two full lines imported from International Machinery 
                                    Industries, china a large and reputed manufacturer Cylinder Manufacturing Plant. Cylinders are made from high grade 
                                    imported Raw Materials: Steel Sheet, Valve and collar, welding flux, welding wire, steel shots, Zinc wire etc.
                                    </p> */}
                                    
                                    

                                    
                                </div>
                            </div>
                            
                            {/* image from Right */}
                            
                            <div className="col-xl-6">
                                <div className="about-one__righ">
                                    <div className="about-one__img-box wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                        <div className="about-one__img">
                                            <img src="src/assets/images/resources/distribution_img_2.2.png" alt=""/>
                                        </div>
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
                {/* --------------------------------------------------------------------------- Area 3 ------------------------------------------------------------ */}
                
                <section className="distribution_headline">
                    <div className="about-one__shape float-bob-x">
                        <img src="src/assets/images/shapes/about-one-shape.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                        

                            
                            {/* First Section  */}
                            
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                
                                    <div className="section-title text-left">
                                    
                                        {/*<div className="section-sub-title-box">
                                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>*/}
                                        
                                        {/* <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >Unit 03: Sayedpur LPG Storage and Bottling Plant</h5> */}
                                        <h5 className="section-title__title_2 " data-wow-delay="100ms" >{distributionData.headline_five}</h5>
                                    </div>
                                    <p className="about-one__text my-fadeIn-up-style" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    {distributionData.description_five}
                                    </p>

                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    Located at Sayedpur, Narayangonj , Dhaka with an area of 3 Acres land, with total yearly Storage Capacity of 216,000MT equipped with 
                                    6nos Mounted Tanks. This plant also equipped with Filling hall for filling cylinders size of 12.5kg, 15kg, 33kg & 45 kg and has Bulk 
                                    filling facilities to load Bobtail/LP gas carrying lorries.
                                    </p> */}
                                    

                                    
                                    

                                    
                                </div>
                            </div>
                            
                            {/* image from Right */}
                            
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                
                                    <div className="section-title text-left">
                                    
                                        {/*<div className="section-sub-title-box">
                                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                            </div>
                                        </div>*/}
                                        
                                        {/* <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >Unit 04: Sitakundha LPG Storage and Bottling Plant</h5> */}
                                        <h5 className="section-title__title_2 wow fadeInUp" data-wow-delay="100ms" >{distributionData.headline_six}</h5>
                                    </div>
                                    <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    {distributionData.description_six}
                                    </p>

                                    {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" style = {{ textAlign: "justify" }} >
                                    Our Sitakunda plant is Located at:  Sitakundha, Noralia, Sitakunda, Chattogram having yearly production capacity of 288,000 MT of 
                                    LP Gas with Storage tank capacity of 12000MT. It has a land area of 11.63 Acres. The plant is equipped with Filling hall having 
                                    facilities of filling 12.5kg, 15kg small sizes cylinder and 33 & 45 kg big sizes cylinders. It also has capacity of filling 
                                    Bobtail /Road tanker.
                                    </p> */}
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                            
                            
                            
                        </div>
                    </div>
                </section>





                    {/* === Footer === */}
                    {/* <Footer/> */}
                </div>
                
            </div>
        </div>
    );
};

export default Distribution;