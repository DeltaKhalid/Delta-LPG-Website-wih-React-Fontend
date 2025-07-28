// import React from 'react';
import React, { useEffect, useState } from 'react';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

// import { fetchAboutUsContent } from '../../api/apiCall';

import { fetchAboutPageContent } from '../../api/apiCall';




const About = () => {

    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAboutData = async () => {
        try {
            const data = await fetchAboutPageContent();
            setAboutData(data);
            console.log('About Us API Response Data :', data)
        } catch (error) {
            console.error('Failed to load about us data:', error);
        } finally {
            setLoading(false);
        }
        };

        getAboutData();
    }, []);

    if (loading) return <p>Loading about us...</p>;
    if (!aboutData) return <p>No about us data available.</p>;

    // const [aboutContent, setAboutContent] = useState('');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const getContent = async () => {
    //     try {
    //         const data = await fetchAboutUsContent();
    //         setAboutContent(data.content || []);
    //         console.log(data);
            
    //     } catch (error) {
    //         setAboutContent('Failed to load content.');
    //     } finally {
    //         setLoading(false);
    //     }
    //     };

    //     getContent();
    // }, []);

    // --- Product List --- //
    





    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1> This is About Page.</h1> */}

            <div className="">

            <div className=""></div>
            <div className=""></div>

            {/* ---------------------------------------------------------- Pre Loder ----------------------------------------------------------------------- */}
            {/* <div class="preloader">
                <div class="preloader__image"></div>
            </div> */}
            {/* // /.preloader  */}


            {/* // ============= Page Wrapper ===============// */}
                <div className="page-wrapper">
                    {/* === Header === */}
                    {/* <Header/> */}


                    {/* <h1> This is About Page</h1> */}

                    {/* --- Page Header --- */}
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
                                    <li>About</li>
                                </ul>
                                <h2>About us</h2>
                            </div>
                        </div>
                    </section>

                    {/* --- Page Content --- */}
                    <section className="about-three about-four">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-three__left">
                                        <div className="about-three__img-box wow slideInLeft" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                            <div className="about-three__img">
                                                {/*<img src="assets/images/resources/about_us_page_banner_03.png" alt=""/>*/}
                                            </div>
                                            <div className="about-three__img-two">
                                                <img src="src/assets/images/resources/about_us_page_banner_03.png" alt=""/>
                                            </div>
                                            {/*<div className="about-three__border"></div>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-three__right">
                                        <div className="section-title text-left">
                                            <div className="section-sub-title-box">
                                                {/* <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >About Delta LP Gas Ltd.</p> */}
                                                <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >{aboutData.title}</p>
                                                <div className="section-title-shape-1">
                                                    <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                                </div>
                                            </div>
                                            {/*<h2 className="section-title__title">Roofsie - exceptional roofing services</h2>*/}
                                        </div>


                                        <p className="about_us_text_design wow fadeInUp" data-wow-delay="100ms">{aboutData.description}</p>

                                        {/* <p className="about_us_text_design wow fadeInUp" data-wow-delay="100ms" >DELTA LPG LIMITED (DLPGL), is an emerging LPG company of Bangladesh, was incorporated in Bangladesh as a 
                                        Private Limited Company with limited liability in the year 2016. The company is lead by two pioneer businessmen Mr. Mohammad Mustafa Haider - 
                                        the only son of Mr. M. Abul Kalam, Managing Director of T.K Group as the Chairman of the Company and Mr. Mohammed Amirul Haque of Seacom Group 
                                        as the Managing Director of the Company. LPG sector is booming in Bangladesh under the current government’s initiative having huge prospect 
                                        of opportunity growth which created scope for setting up more LPG satellite plants to meet huge future demand of LPG in Household & 
                                        transportation sector. With the modern set up and cutting edge technology Delta LPG Limited is expecting to perform very favorably in 
                                        the business in coming years.</p> */}
                                        
                                        
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

export default About;