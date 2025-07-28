// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchBulkPage } from '../../api/apiCall';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';

const Bulk = () => {

    // ============================================ Bulk API Call ============================================== //
    const [bulkData, setBulkData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBulkPageData = async () => {
        try {
            const data = await fetchBulkPage();
            setBulkData(data);
            console.log('Bulk Page API Response Data :', data)
        } catch (error) {
            console.error('Failed to fetch Bulk Page data:', error);
        } finally {
            setLoading(false);
        }
        };

        getBulkPageData();
    }, []);

    if (loading) return <p>Loading Bulk Page...</p>;
    if (!bulkData) return <p>No data found.</p>;



    // ============================================ Main Return Area =========================================== //
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is Bulk Page.</h1> */}


            {/*Page Header Start*/}
            <section className="page-header wow fadeInUp">
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
                        <h2>Bulk</h2>
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
                        {/* <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Bulk LPG Solution <br/> </h2> */}
                        <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" > {bulkData.page_headline} <br/> </h2>
                    </div>
                </div>
            </div>

            {/* ----------------------------------------------------- page Head Image ------------------------------------------- */}
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        {/*Services One Single Start*/}
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><a href="modified-roofing.html"></a></h3>
                                    <img className="centered-image" src="src/assets/images/resources/bulk_service_img_01.png" alt=""/>
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

            {/* ----------------------------------------------------- Product Area One ------------------------------------------ */}
            <section className="cylinder_page">
                <div className="container">
                    <div className="row">
                    

                        {/*Services One Single Start*/}
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><a href="modified-roofing.html"></a></h3>
                                    <p className="services-one__text">
                                        {bulkData.description}
                                    </p>


                                    {/* <p className="services-one__text"/>
                                    LPG stands out as one of the most efficient and safe energy sources used in industries globally. 
                                    It offers significant savings on both fuel and maintenance costs for equipment such as burners,
                                    boilers, ovens, and furnaces, while also improving the uniformity and quality of the final product. At Delta LPG, 
                                    we combine global technical expertise with local experience in converting other fuels (HSD, ND, LNG to LPG) 
                                    to establish ourselves as a leading LPG service provider. Our comprehensive solutions encompass packaging, 
                                    installation, maintenance, guidance, and after-sales service, all centered on safety management and 
                                    just-in-time (JIT) delivery of LPG. Our technical teams are always ready to deliver customized technical 
                                    support solutions that meet your specific requirements and adhere to Bangladesh safety regulations. */}

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

            {/* ---  ---- */}
            <section className="cylinder_page">
                <div className="container">
                    <div className="row">
                    

                        

                        {/*Services One Single Start*/}
                        <div className="col-xl-12 col-lg-12 wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__content">
                                    {/* <h3 className="services-one__title"><a href="#">Commercial Uses</a></h3> */}
                                    <h3 className="services-one__title">{bulkData.title_01}</h3>
                                    <p className="services-one__text" >
                                        {bulkData.description_01}
                                    </p>
                                    {/* <p className="services-one__text">
                                    LPG has a wide range of cost-effective commercial applications, including but not limited to cooking, cooling equipment, 
                                    space heaters, boilers and more. On top of being flexible, reliable and affordable, LPG offers considerable economic and 
                                    environmental benefits over oil, HSD fuel or electricity as well as other forms of fuel; as it provides instant heat, it 
                                    is ideal for processes that require fast warm ups and cool downs. */}
                                    
                                    {/* 50 px Empty Div */}
                                    {/*<div class="empty_div"></div>*/}
                                    
                                    {/* </p> */}
                                
                                    
                                    
                                    <div className="services-one__read-more">
                                        {/*<a href="modified-roofing.html">Read More <i class="fa fa-arrow-right"></i></a>*/}
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
                                {/* <h3 className="services-one__title"><a href="#">Industrial Installation</a></h3> */}
                                <h3 className="services-one__title">{bulkData.title_02}</h3>
                                <p className="services-one__text">
                                    {bulkData.description_02}
                                </p>

                                {/* <p className="services-one__text">
								The versatility of Beximco LPG means that you can use it for heat, light and power whenever you need to. 
								However, beyond this LPG is also used to power a vast range of economic and environmentally responsible
								machinery in the industrial sector, including but not limited to space- and process- heating, 
								powering industrial ovens, boilers, generators, food production, kilns, furnaces, 
								production of packing material as well as Heat Treatment in industries such as metalwork, 
								ceramic, glass forging, annealing, billets, heating and melting Bitumen, textiles, paper 
								and industrial construction.  */}
								
								{/* 50 px Empty Div */}
								{/*<div class="empty_div"></div>*/}
								
								{/* </p> */}
							
								
								
                                <div className="services-one__read-more">
                                    {/*<a href="modified-roofing.html">Read More <i class="fa fa-arrow-right"></i></a>*/}
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
                                {/* <h3 className="services-one__title"><a href="#">Turnkey Project Execution</a></h3> */}
                                <h3 className="services-one__title">{bulkData.title_03}</h3>
                                <p className="services-one__text">
                                    {bulkData.description_03}
                                </p>

                                {/* <p className="services-one__text"/>
								If you are looking for an experienced team to provide a tailor made, cost efficient LPG solution, 
								then you can firmly rely on us. With numerous success stories under our belt, BEXIMCO LPG is a well preferred 
								LPG expert – from design to installation, commissioning and also maintenance. <br/>

								Benefits of our Bulk Installation Services:

								Complete holistic package - from planning, design & engineering services to commissioning
								Professional approach, quality workmanship and meticulous timeline
								Safe practices and provision of excellent safety features. Each stage of 
								the project is integrated with safety starting from materials to execution and commissioning
								Periodic training of user groups on LPG, safety, operation and maintenance of said installation */}

								
								{/* 50 px Empty Div */}
								{/*<div class="empty_div"></div>*/}
								
								
							
								
								
                                <div className="services-one__read-more">
                                    {/*<a href="modified-roofing.html">Read More <i class="fa fa-arrow-right"></i></a>*/}
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

export default Bulk;