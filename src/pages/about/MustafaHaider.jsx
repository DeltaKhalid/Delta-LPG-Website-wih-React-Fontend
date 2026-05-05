import React, { useEffect, useState } from "react";
import { fetchBoardOfDirectors } from "../../api/apiCall";
import Urls from "../../constants/urls";

// Import images instead of using: "src/assets/...."
import pageHeaderBg from "../../assets/images/backgrounds/page-header-bg.jpg";

import tkLogo from "../../assets/images/brand/tk_logo_180_3.png";
import samudaLogo from "../../assets/images/brand/samuda_logo_180.png";
import deltaLpgLogo from "../../assets/images/brand/deltalpg_logo_180.png";
import superLogo from "../../assets/images/brand/super_logo_180.png";
import premierLogo from "../../assets/images/brand/premier_logo_180.png";

const MustafaHaider = () => {
  // ------------------------- Board of Director API Call ------------------------- //
  const [boardOfDirectorsData, setBoardOfDirectorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDirectors = async () => {
      try {
        const data = await fetchBoardOfDirectors();
        setBoardOfDirectorsData(Array.isArray(data) ? data : []);
        console.log("Board Of Directors API Response Data :", data);
      } catch (error) {
        console.error("Failed to fetch Board of Directors:", error);
      } finally {
        setLoading(false);
      }
    };

    getDirectors();
  }, []);

  // Pick director by index (your code uses [1])
  const director = boardOfDirectorsData?.[1];

  // Build director image URL safely
  const directorImageSrc =
    director?.director_image
      ? Urls.buildMediaUrl(director.director_image)
      : "";

  return (
    <div>
      {/* --- Page Header */}
      <section className="page-header wow fadeInUp">
        <div
          className="page-header-bg"
          style={{ backgroundImage: `url(${pageHeaderBg})` }}
        />
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">{/* breadcrumb */}</ul>
          </div>
        </div>
      </section>

      {/* ================================================= New Section =============================== */}
      <div className="md-container wow fadeInUp">
        <h2 className="md-title">
          {loading ? "Loading..." : director?.name || "No data found"}
        </h2>

        <div className="md-card">
          <div className="md-image">
            {directorImageSrc ? (
              <img src={directorImageSrc} alt={director?.name || "Director"} />
            ) : (
              !loading && <div>No image available</div>
            )}
          </div>

          <div className="md-content">
            {/* --- Designation --- */}
            <h4 className="md-role">
              {loading ? "Loading..." : director?.designation || ""}
            </h4>

            {/* --- Qualification --- */}
            <p className="md-education">
              {loading ? "Loading..." : director?.qualification || ""}
            </p>

            <p className="md-join-date">
              <em>Joining Date : </em>
              {/* If API has joining_date field, you can show it like below */}
              {/* {!loading ? director?.joining_date || "" : ""} */}
            </p>

            <hr />

            <p className="md-description">
              {loading ? "Loading..." : director?.about_of_director || ""}
            </p>

            <div className="md-image-gallery">
              <img src={tkLogo} alt="TK" />
              <img src={samudaLogo} alt="Samuda" />
              <img src={deltaLpgLogo} alt="Delta LPG" />
              <img src={superLogo} alt="Super" />
              <img src={premierLogo} alt="Premier" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustafaHaider;














/// ====================================================== Old Code 02 ====================================================== ///

// // import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { fetchBoardOfDirectors } from '../../api/apiCall';
// import Urls from '../../constants/urls';


// const MustafaHaider = () => {

//         // ------------------------- Board of Director ApI Call ------------------------------------------------ ///
//         const [boardOfDirectorsData, setBoardOfDirectorsData] = useState([]);
//         // const [loading, setLoading] = useState(true);
    
//         useEffect(() => {
//             const getDirectors = async () => {
//             try {
//                 const data = await fetchBoardOfDirectors();
//                 setBoardOfDirectorsData(data);
//                 console.log('Board Of Directors API Response Data :', data);
//             } catch (error) {
//                 console.error('Failed to fetch Board of Directors:', error);
//             } finally {
//                 setLoading(false);
//             }
//             };
    
//             getDirectors();
//         }, []);


//     /// ======================================================= Main Return Area ==================================================== ///
//     return (
//         <div>
//             {/* <h1>This is Mostafa Haider Page.</h1> */}
//             {/* --- Page Header */}
//             <section className="page-header wow fadeInUp">
//                 <div
//                 className="page-header-bg"
//                 style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>
//                 </div>
//                 <div className="container">
//                     <div className="page-header__inner">
//                         <ul className="thm-breadcrumb list-unstyled">
//                             {/* <li><a href="index.html">Board of Director</a></li> */}
//                             {/* <li><span>/</span></li> */}
//                             {/* <li>Mohammed Amirul Haque</li> */}
//                         </ul>
//                         {/* <h2>Mohammed Amirul Haque</h2> */}
//                     </div>
//                 </div>
//             </section>
//             {/* ================================================= New Section =============================== */}
//             <div className="md-container wow fadeInUp">
//                 {/* <h2 className="md-title">Mohammad Mustafa Haider </h2> */}
//                 {/* <h2 className="md-title"> {boardOfDirectorsData[1].name} </h2> */}
//                 <h2 className="md-title"> {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[1].name : "Loading..."} </h2>
                
//                 <div className="md-card ">


//                     <div className="md-image">
//                         {boardOfDirectorsData.length > 1 && (
//                             <img
//                             src={`${Urls.baseUrl}${boardOfDirectorsData[1].director_image}`}
//                             alt={boardOfDirectorsData[1].name}
//                             />
//                         )}
//                     </div>


//                     {/* <div className="md-image">
//                         <img src={directorImg} alt="Mohammed Amirul Haque" />
//                         <img src="src/assets/images/shapes/about-one-shape.png" alt="Mohammed Amirul Haque" />

//                         src={`${Urls.baseUrl}${boardOfDirectorsData[0].director_image}`}
//                         <img src={`${Urls.baseUrl}${boardOfDirectorsData[1].director_image}`} alt="Mohammed Amirul Haque" />

//                     </div> */}



//                     <div className="md-content">
//                         {/* --- Designation --- */}
//                         <h4 className="md-role"> {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[1].designation : "Loading..."} </h4>
//                         {/* --- Qualification --- */}
//                         <p className="md-education">
//                             {/* Post Graduation in Leadership and Sustainability and a Fellow Member of the Institute of Petroleum, United Kingdom */}

//                             {/* {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[1].designation : "Loading..."} */}

//                             {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[1].qualification : "Loading..."}

//                         </p>
//                         <p className="md-join-date"><em>Joining Date : </em></p>
//                         <hr />
//                         <p className="md-description">
//                             {/* Mr. Mohammed Amirul Haque is the founder Managing Director and CEO of Premier Cement Mills Limited. He is a visionary 
//                             world class entrepreneur and an elite businessman who embarked and involved himself into various businesses such as 
//                             Trading & Shipping, Agriculture and Fishing, Real Estate, etc. for the last three decades. He did his Post Graduation 
//                             in Leadership and Sustainability from England and He is also a Fellow Member of The Institute of Petroleum, United Kingdom. */}

//                             {boardOfDirectorsData.length > 1 ? boardOfDirectorsData[1].about_of_director : "Loading..."}

//                         </p>

//                         <div className="md-image-gallery">
//                             <img src="src/assets/images/brand/tk_logo_180_3.png" alt="Image 3" />
//                             <img src="src/assets/images/brand/samuda_logo_180.png" alt="Image 1" />
//                             <img src="src/assets/images/brand/deltalpg_logo_180.png" alt="Image 2" />
//                             <img src="src/assets/images/brand/super_logo_180.png" alt="Image 4" />
//                             <img src="src/assets/images/brand/premier_logo_180.png" alt="Image 5" />
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MustafaHaider;