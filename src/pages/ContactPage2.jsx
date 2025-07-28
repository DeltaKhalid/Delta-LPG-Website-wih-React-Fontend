// import React from 'react';
// import React, { useState } from "react";
import React, { useState, useEffect } from "react";


const officeData = {
  "CORPORATE OFFICE": {
    image: "https://e7jecw7o93n.exactdn.com/wp-content/uploads/2024/06/tania-fernandez-vdjLv8Gwo0g-unsplash-1.jpg?lossy=1&ssl=1",
    address: "123 Corporate Blvd, Dhaka, Bangladesh",
    email: "corporate@yourdomain.com",
    phone: "+880 1234 567890",
  },
  "REGISTERED OFFICE": {
    image: "https://t4.ftcdn.net/jpg/04/03/02/41/240_F_403024148_sIJoD571eHza96q1VtfYO1J1yccC5prn.jpg",
    address: "456 Registered Road, Chittagong, Bangladesh",
    email: "registered@yourdomain.com",
    phone: "+880 9876 543210",
  },
  "MONGLA OFFICE": {
    image: "https://t4.ftcdn.net/jpg/04/03/02/41/240_F_403024148_sIJoD571eHza96q1VtfYO1J1yccC5prn.jpg",
    address: "Port Area, Mongla, Bangladesh",
    email: "mongla@yourdomain.com",
    phone: "+880 1122 334455",
  },
};




//   LDN: {
//     image: "https://t4.ftcdn.net/jpg/04/03/02/41/240_F_403024148_sIJoD571eHza96q1VtfYO1J1yccC5prn.jpg",
//     address: "10 Downing Street, London, UK",
//     email: "london@yourdomain.com",
//     phone: "+44 123 456 789",
//   },
//   NYC: {
//     image: "https://via.placeholder.com/300x400?text=New+York+Office",
//     address: "123 Manhattan St, NYC, USA",
//     email: "nyc@yourdomain.com",
//     phone: "+1 555 123 456",
//   },
//   DXB: {
//     image: "https://via.placeholder.com/300x400?text=Dubai+Office",
//     address: "701 Sondanella, 24th Floor, Dubai, Emirates",
//     email: "info@yourdomain.com",
//     phone: "123 456 7890",
//   },
// };


// const officeData = {
//   LDN: {
//     image: "https://via.placeholder.com/300x400?text=London+Office",
//     address: "10 Downing Street, London, UK",
//     email: "london@yourdomain.com",
//     phone: "+44 123 456 789",
//   },
//   NYC: {
//     image: "https://via.placeholder.com/300x400?text=New+York+Office",
//     address: "123 Manhattan St, NYC, USA",
//     email: "nyc@yourdomain.com",
//     phone: "+1 555 123 456",
//   },
//   DXB: {
//     image: "https://via.placeholder.com/300x400?text=Dubai+Office",
//     address: "701 Sondanella, 24th Floor, Dubai, Emirates",
//     email: "info@yourdomain.com",
//     phone: "123 456 7890",
//   },
// };


const ContactPage2 = () => {

    const [activeTab, setActiveTab] = useState("CORPORATE OFFICE");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const office = officeData[activeTab];





    // const [activeTab, setActiveTab] = useState("DXB");
    // const [animate, setAnimate] = useState(false);
    
    // useEffect(() => {
    //     setAnimate(true);
    //     const timer = setTimeout(() => setAnimate(false), 500); // match CSS duration
    //     return () => clearTimeout(timer);
    // }, [activeTab]);

    // const office = officeData[activeTab];



    // const [activeTab, setActiveTab] = useState("DXB");
    // const office = officeData[activeTab];





    return (
        <div>
            <h1>This is Contact page 2.</h1>

            <div className="contact-container">
            <div className="tab-menu">
                {Object.keys(officeData).map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>

            <div className={`info-box ${animate ? "fade-in" : ""}`}>
                <div className="info-left">
                <img src={office.image} alt={`${activeTab}`} />
                </div>
                <div className="info-right">
                <h3>{activeTab}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {office.address}</p>
                <p><i className="fas fa-envelope"></i> {office.email}</p>
                <p><i className="fas fa-phone"></i> {office.phone}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-pin"></i> View on Google Map
                </a>
                </div>
            </div>
            </div>


{/* ---------------------------------------------- old code 2 ------------------------------------------ */}

        {/* <div className="contact-container">
        <div className="tab-menu">
            {Object.keys(officeData).map((tab) => (
            <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
            ))}
        </div>

        <div className={`info-box ${animate ? "fade-in" : ""}`}>
            <div className="info-left">
            <img src={office.image} alt={`${activeTab} office`} />
            </div>
            <div className="info-right">
            <h3>{activeTab} Office</h3>
            <p><i className="fas fa-map-marker-alt"></i> {office.address}</p>
            <p><i className="fas fa-envelope"></i> {office.email}</p>
            <p><i className="fas fa-phone"></i> {office.phone}</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-map-pin"></i> View on Google Map
            </a>
            </div>
        </div>
        </div> */}





{/* -------------------------------------------------------- Old Code -------------------------------------------- */}
            {/* <div className="contact-container">
            <div className="tab-menu">
                {Object.keys(officeData).map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>

            <div className="info-box">
                <div className="info-left">
                <img src={office.image} alt={`${activeTab} office`} />
                </div>
                <div className="info-right">
                <h3>{activeTab} Office</h3>
                <p><i className="fas fa-map-marker-alt"></i> {office.address}</p>
                <p><i className="fas fa-envelope"></i> {office.email}</p>
                <p><i className="fas fa-phone"></i> {office.phone}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-pin"></i> View on Google Map
                </a>
                </div>
            </div>
            </div> */}





        </div>
    );
};

export default ContactPage2;