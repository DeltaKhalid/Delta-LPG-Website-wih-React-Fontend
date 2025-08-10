// import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import React, { useEffect, useState } from 'react';
import { fetchBoardOfDirectors } from '../../api/apiCall';
import Urls from '../../constants/urls';
import { Link } from "react-router-dom";

const BoardOfDirectors = () => {

    /// ================================================================= API Call Area ================================================== ///
    
    // ------------------------- Board of Director ApI Call ------------------------------------------------ ///
    const [boardOfDirectorsData, setBoardOfDirectorsData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDirectors = async () => {
        try {
            const data = await fetchBoardOfDirectors();
            setBoardOfDirectorsData(data);
            console.log('Board Of Directors API Response Data :', data);
        } catch (error) {
            console.error('Failed to fetch Board of Directors:', error);
        } finally {
            setLoading(false);
        }
        };

        getDirectors();
    }, []);

    // ------------------------- Code for Page Route according the Board Member Name ----------------------- ///
    const getRouteByName = (name) => {
    switch (name) {
        case "Mohammed Amirul Haque":
            return "/amirul-haque";
        case "Mohammad Mustafa Haider":
            return "/mustafa-haider";
        default:
            return "#";
        }
    };

    // if (loading) return <p>Loading Board of Directors...</p>;



    /// ================================================================= Main Return Area =============================================== ///
    return (
        <div>
            
            {/* ----------------------------- Header with Menu ---------- */}
            {/* <Header/> */}
            {/* <h1>This is Board Of Director Page.</h1> */}

            <div className="">

            <div className=""></div>
            <div className=""></div>

            {/* ---------------------------------------------------------- Pre Loader ----------------------------------------------------------------------- */}
            {/* <div className="preloader">
                <div className="preloader__image"></div>
            </div> */}
            {/* // /.preloader  */}


            {/* // ============= Page Wrapper ===============// */}
            <div className="page-wrapper">
                {/* === Header === */}
                {/* <Header/> */}

                {/* <h1> This is Board of Directors Page</h1> */}
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
                                <li>Board of Directors</li>
                            </ul>
                            <h2>Board of Directors</h2>
                        </div>
                    </div>
                </section>
                {/* --- page headline --- */}
                <section className="team-page">
                    {/* Headline of Board of Directors  */}
                    <div className="project-one__top">
                        <div className="container">
                            <div className="section-title text-center">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Delta LPG</p>
                                    <div className="section-title-shape-1">
                                        <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                    </div>
                                </div>
                                <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Board of Directors <br/> </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {/* ============================================== board of Director Section ================================================ */}
                            
                            <div className="row">
                                {boardOfDirectorsData.map((director, index) => (
                                    <div
                                        className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                        data-wow-delay={`${100 * (index + 1)}ms`}
                                        key={director.id}>
                                    
                                        <Link
                                            to={getRouteByName(director.name)}
                                            // target="_blank"
                                            className="team-one__single"
                                            style={{ textDecoration: "none", color: "inherit" }}>
                                        
                                            <div className="team-one__img-box">
                                                <div className="team-one__img">
                                                    <img
                                                    src={`${Urls.baseUrl}${director.director_image}`}
                                                    alt={director.name}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        borderRadius: "8px",
                                                    }}
                                                    />
                                                </div>
                                                <ul className="list-unstyled team-one__social">
                                                    <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-square"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">
                                                        <i className="fab fa-pinterest-p"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="team-one__content-box">
                                                <div className="team-one__content">
                                                    <h3 className="team-one__name">
                                                    <a href="#">{director.name}</a>
                                                    </h3>
                                                    <p className="team-one__sub-title">{director.designation}</p>
                                                    <ul className="list-unstyled team-one__social-two">
                                                    <li>
                                                        <a href="#">
                                                        <i className="fas fa-share-alt"></i>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                    <div className="team-one__shape">
                                                    <img
                                                        src="src/assets/images/shapes/team-one-shape.png"
                                                        alt=""
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            
                            
                            
                            
                            
                            
                            {/* <div className="row">
                                {boardOfDirectorsData.map((director, index) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${100 * (index + 1)}ms`} key={director.id}>
                                    <div className="team-one__single">
                                        <div className="team-one__img-box">
                                        <div className="team-one__img">





                                            
                                            <img
                                            src={`${Urls.baseUrl}${director.image}`}
                                            alt={director.name}
                                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                            />


                                        </div>
                                        <ul className="list-unstyled team-one__social">
                                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                                    </div>
                                        <div className="team-one__content-box">
                                        <div className="team-one__content">
                                            <h3 className="team-one__name">
                                            <a href="#">{director.name}</a>
                                            </h3>
                                            <p className="team-one__sub-title">{director.designation}</p>
                                            <ul className="list-unstyled team-one__social-two">
                                            <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                            </ul>
                                            <div className="team-one__shape">
                                            <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                ))} 
                            </div> */}









                            {/*Team One Single End*/}
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

export default BoardOfDirectors;







/// =================================================== Old Code 01 ======================================================= ///
// import React from 'react';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';

// const BoardOfDirectors = () => {
//     return (
//         <div>
            
//             {/* ----------------------------- Header with Menu ---------- */}
//             {/* <Header/> */}
//             {/* <h1>This is Board Of Director Page.</h1> */}

//             <div className="">

//             <div className=""></div>
//             <div className=""></div>

//             {/* ---------------------------------------------------------- Pre Loder ----------------------------------------------------------------------- */}
//             {/* <div className="preloader">
//                 <div className="preloader__image"></div>
//             </div> */}
//             {/* // /.preloader  */}


//             {/* // ============= Page Wrapper ===============// */}
//             <div className="page-wrapper">
//                 {/* === Header === */}
//                 {/* <Header/> */}

//                 {/* <h1> This is Board of Directors Page</h1> */}
//                 {/* --- Page Header --- */}
//                 <section className="page-header">
//                     <div
//                     className="page-header-bg"
//                     style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>
//                     </div>

//                     <div className="container">
//                         <div className="page-header__inner">
//                             <ul className="thm-breadcrumb list-unstyled">
//                                 <li><a href="index.html">Home</a></li>
//                                 <li><span>/</span></li>
//                                 <li>Board of Directors</li>
//                             </ul>
//                             <h2>Board of Directors</h2>
//                         </div>
//                     </div>
//                 </section>
//                 {/* --- page headline --- */}
//                 <section className="team-page">
//                     {/* Headline of Board of Directors  */}
//                     <div className="project-one__top">
//                         <div className="container">
//                             <div className="section-title text-center">
//                                 <div className="section-sub-title-box">
//                                     <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Delta LPG</p>
//                                     <div className="section-title-shape-1">
//                                         <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
//                                     </div>
//                                 </div>
//                                 <h2 className="section-title__title wow fadeInUp" data-wow-delay="100ms" >Board of Directors <br/> </h2>
//                             </div>
//                         </div>
//                     </div>

//                                 <div className="container">
//                 <div className="row">
//                     {/* ============================================== Team One Single Start ================================================ */}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/chairman sir.png" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">Christian Bale</a></h3>
//                                     <p className="team-one__sub-title">Executive</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                     {/* ============================================== Team One Single Start ================================================ */}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/chairman sir.png" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">Christian Bale</a></h3>
//                                     <p className="team-one__sub-title">Executive</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                     {/*Team One Single Start*/}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/team-1-1.jpg" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">Mike Hardson</a></h3>
//                                     <p className="team-one__sub-title">Director</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                     {/*Team One Single Start*/}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/team-1-1.jpg" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">David Cooper</a></h3>
//                                     <p className="team-one__sub-title">Consultant</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                     {/*Team One Single Start*/}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/team-1-1.jpg" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">Kevin Martin</a></h3>
//                                     <p className="team-one__sub-title">Executive</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                     {/*Team One Single Start*/}
//                     <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
//                         <div className="team-one__single">
//                             <div className="team-one__img-box">
//                                 <div className="team-one__img">
//                                     <img src="src/assets/images/team/team-1-1.jpg" alt=""/>
//                                 </div>
//                                 <ul className="list-unstyled team-one__social">
//                                     <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
//                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                                 </ul>
//                             </div>
//                             <div className="team-one__content-box">
//                                 <div className="team-one__content">
//                                     <h3 className="team-one__name"><a href="team-details.html">Jessica Brown</a></h3>
//                                     <p className="team-one__sub-title">Worker</p>
//                                     <ul className="list-unstyled team-one__social-two">
//                                         <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
//                                     </ul>
//                                     <div className="team-one__shape">
//                                         <img src="src/assets/images/shapes/team-one-shape.png" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*Team One Single End*/}
//                 </div>
//             </div>


//                 </section>

//                 {/* === Footer === */}
//                 {/* <Footer/> */}
//             </div>
//         </div>




//             {/* ----------------------------- Header with Menu ---------- */}
//             {/* <Footer/> */}
//         </div>
//     );
// };

// export default BoardOfDirectors;