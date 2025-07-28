// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchMissionVisionContent } from '../../api/apiCall';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';

const MissionVision = () => {

    // ========================================================== Mission and Vision page API Call ============================ //
    const [missionVisionData, setMissionVisionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMissionVision = async () => {
        try {
            const data = await fetchMissionVisionContent();
            setMissionVisionData(data);
            console.log('Mission and Vision API Call data: ', data)
        } catch (error) {
            console.error('Failed to fetch Mission & Vision:', error);
        } finally {
            setLoading(false);
        }
        };

        getMissionVision();
    }, []);

    if (loading) return <p>Loading Mission & Vision...</p>;
    if (!missionVisionData) return <p>No data found.</p>;


    // ========================================================== Main Return Area ============================================ //
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is Mission & Vision Page.</h1> */}


            <div className="custom-cursor">

                <div className="custom-cursor__cursor"></div>
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

                    {/* <h1> This is Mission & Vision Page</h1> */}
                    {/* --- Page Header */}
                    <section className="page-header wow fadeInUp">
                        <div
                        className="page-header-bg"
                        style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="page-header__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><a href="index.html">Home</a></li>
                                    <li><span>/</span></li>
                                    <li>Mission & Vision</li>
                                </ul>
                                <h2>Mission & Vision</h2>
                            </div>
                        </div>
                    </section>
                    {/* --- page Head Line--- */}
                    <div className="mission_vision_headline_padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Delta LPG</p>
                                    <div className="section-title-shape-1">
                                        <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                    </div>
                                </div>
                                {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Our Mission and  Vision <br> </h2> */}
                            </div>
                        </div>
                    </div>

                    {/* --- About Us Page Content --- */}
                    <section className="mission_vision_headline">
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
                                                <img src="src/assets/images/resources/mission_vision.png" alt=""/>
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
                                <div className="col-xl-6">
                                    <div className="about-one__right">
                                    
                                        <div className="section-title text-left">
                                        
                                            {/*<div className="section-sub-title-box">
                                                <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>
                                                <div className="section-title-shape-1">
                                                    <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                                </div>
                                            </div>*/}
                                            
                                            {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Mission</h2> */}
                                            <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >{missionVisionData.title1}</h2>
                                        </div>
                                        <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
                                            {missionVisionData.description1}
                                        </p>

                                        {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
                                        A mission is a statement or declaration that defines the purpose, core values, and objectives of an individual, 
                                        organization, or movement. It serves as a guiding star, providing direction and motivation, and it encapsulates 
                                        the essence of what one seeks to achieve. A well-articulated mission aligns actions with goals, ensuring that every step 
                                        taken contributes to the broader vision.
                                        In organizations, a mission statement is pivotal. It informs stakeholders, from employees to customers, about 
                                        the company’s purpose and ambitions. For example, a non-profit's mission might focus on social impact, 
                                        like alleviating poverty or promoting education. In contrast, a tech company's mission might center on 
                                        innovation and enhancing user experiences.
                                        </p> */}
                                        
                                        <div className="section-title text-left">
                                        
                                            <div className="section-sub-title-box">
                                                {/*<p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LPG</p>*/}
                                                {/*<div className="section-title-shape-1">
                                                    <img src="assets/images/shapes/fire_icon.png" alt=""/>
                                                </div>*/}
                                            </div>
                                            
                                            {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Vision</h2> */}
                                            <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >{missionVisionData.title2}</h2>
                                        </div>
                                        <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
                                            {missionVisionData.description2}
                                        </p>

                                        {/* <p className="about-one__text wow fadeInUp" data-wow-delay="100ms" >
                                        Delta LPG aspires to be at the forefront of technological advancements in the LPG industry. The vision includes 
                                        continuous investment in research and development to enhance the efficiency, safety, and accessibility of LPG solutions. 
                                        This commitment to innovation ensures that Delta LPG not only meets but exceeds the evolving energy needs of its customers.
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

            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Footer/> */}
        </div>
    );
};

export default MissionVision;