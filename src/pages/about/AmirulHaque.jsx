// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchBoardOfDirectors } from '../../api/apiCall';
import Urls from '../../constants/urls';

const AmirulHaque = () => {

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


    /// ======================================================== Main Return Area ====================================================== ///
    return (
        <div>
            {/* <h1>this is Md. Amirul Haque page</h1> */}

            {/* --- Page Header */}
            <section className="page-header wow fadeInUp">
                <div
                className="page-header-bg"
                style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            {/* <li><a href="index.html">Board of Director</a></li> */}
                            {/* <li><span>/</span></li> */}
                            {/* <li>Mohammed Amirul Haque</li> */}
                        </ul>
                        {/* <h2>Mohammed Amirul Haque</h2> */}
                    </div>
                </div>
            </section>

            {/* ================================================= New Section =============================== */}
            <div className="md-container wow fadeInUp">

                {/* <h2 className="md-title">Mohammed Amirul Haque</h2> */}
                <h2 className="md-title"> {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[0].name : "Loading..."} </h2>

                <div className="md-card ">
                    <div className="md-image">
                        {/* <img src={directorImg} alt="Mohammed Amirul Haque" /> */}
                        {/* <img src="src/assets/images/shapes/about-one-shape.png" alt="Mohammed Amirul Haque" /> */}


                        <div className="md-image">
                            {boardOfDirectorsData.length > 1 && (
                                <img
                                src={`${Urls.baseUrl}${boardOfDirectorsData[0].director_image}`}
                                alt={boardOfDirectorsData[1].name}
                                />
                            )}
                        </div>


                    </div>
                    <div className="md-content">
                        {/* <h4 className="md-role">Managing Director</h4> */}
                        <h4 className="md-role"> {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[0].designation : "Loading..."} </h4>
                        <p className="md-education">
                            {/* Post Graduation in Leadership and Sustainability and a Fellow Member of the Institute of Petroleum, United Kingdom */}
                            {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[0].qualification : "Loading..."} 
                        </p>
                        <p className="md-join-date"><em>Joining Date : </em></p>
                        <hr />
                        <p className="md-description">
                            {/* ?Mr. Mohammed Amirul Haque is the founder Managing Director and CEO of Premier Cement Mills Limited. 
                            He is a visionary world class entrepreneur and an elite businessman who embarked and involved himself into 
                            various businesses such as Trading & Shipping, Agriculture and Fishing, Real Estate, etc. for the last three 
                            decades. He did his Post Graduation in Leadership and Sustainability from England and He is also a Fellow Member 
                            of The Institute of Petroleum, United Kingdom. */}

                            {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[0].about_of_director : "Loading..."}

                        </p>

                        <div className="md-image-gallery">
                            <img src="src/assets/images/brand/premier_logo_180.png" alt="Image 1" />
                            <img src="src/assets/images/brand/deltalpg_logo_180.png" alt="Image 2" />
                            <img src="src/assets/images/brand/seacom_group_logo_180.png" alt="Image 3" />
                            <img src="src/assets/images/brand/runsha_logo_180.png" alt="Image 4" />
                            <img src="src/assets/images/brand/roknoor_logo_180.png" alt="Image 5" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmirulHaque;