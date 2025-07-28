// import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchContactPage } from '../api/apiCall';


// ========================================= Function for show 3 Tab ================ ///
const officeData = {
  "CORPORATE OFFICE": {
    // image: "https://deltalpg.com/wp-content/uploads/2019/05/TK-Bhaban.png",
    image: "src/assets/images/brand/TK-Bhaban_Im_600_600.png",
    address: "123 Corporate Blvd, Dhaka, Bangladesh",
    email: "corporate@yourdomain.com",
    phone: "+880 1234 567890",
  },
  "REGISTERED OFFICE": {
    // image: "https://e7jecw7o93n.exactdn.com/wp-content/uploads/2024/06/tania-fernandez-vdjLv8Gwo0g-unsplash-1.jpg?lossy=1&ssl=1",
    image: "src/assets/images/brand/secom_img_600_600.png",
    address: "456 Registered Road, Chittagong, Bangladesh",
    email: "registered@yourdomain.com",
    phone: "+880 9876 543210",
  },
  "MONGLA OFFICE": {
    // image: "https://e7jecw7o93n.exactdn.com/wp-content/uploads/2024/06/tania-fernandez-vdjLv8Gwo0g-unsplash-1.jpg?lossy=1&ssl=1",
    image: "src/assets/images/brand/mongla_office_img_600_600.png",
    address: "Port Area, Mongla, Bangladesh",
    email: "mongla@yourdomain.com",
    phone: "+880 1122 334455",
  },
};


const Contact = () => {

    /// ===================================================================== Function Write Area ================================ ///

    /// --- Function for Contact info Tab --- ///
    const [activeTab, setActiveTab] = useState("CORPORATE OFFICE");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const office = officeData[activeTab]; 

    /// --- Function for mail send --- ///
    function emailSend(){
        Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }

    /// ===================================================================== Contact API Call =================================== ///
    const [contactData, setContactData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContactInfo = async () => {
        try {
            const data = await fetchContactPage();
            setContactData(data);
            console.log("Contact Page Data : " + data);
        } catch (error) {
            console.error('Failed to load contact info:', error);
        } finally {
            setLoading(false);
        }
        };

        getContactInfo();
    }, []);

    if (loading) return <p>Loading contact info...</p>;

    // ====================================================================== Main Return Area =================================== ///
    return (
        <div>
            {/* <h1> This is Contact Page.</h1> */}
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


                    {/* <h1> This is Contact Page</h1> */}
                    {/* --- page head --- */}
                    <section className="page-header fadeInUp">
                        <div
                        className="page-header-bg"
                        style={{ backgroundImage: "url(src/assets/images/backgrounds/contact_header_banner_01.jpg)" }}>
                        </div>

                        <div className="container">
                            <div className="page-header__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><a href="index.html">Home</a></li>
                                    <li><span>/</span></li>
                                    <li>Contact</li>
                                </ul>
                                <h2>Contact</h2>
                            </div>
                        </div>
                    </section>





                    {/* ----------------------------- 3 Tab for showing 3 office address -------------------- */}
                    <div className="section-title text-center margin_top_50_px">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Contact with us</p>
                            <div className="section-title-shape-1">
                                <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                            </div>
                        </div>
                        {/*<h2 className="section-title__title"><br></h2>*/}
                    </div>


                                        {/* --- UnderLine --- */}
                    <div className="contact_page_form_header_underline">
                        {/* <p class="site-footer__bottom-text">© All Copyright 2022 by <a href="#">Roofsie.com</a></p> */}
                    </div>



                    <section>
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
                    </section>

                    {/* --- page content --- */}
                    {/* <section className="contact-details wow fadeInUp">
                        <div className="container">
                            <ul className="list-unstyled contact-details__list">
                                <li>
                                    <div className="contact-details__icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="contact-details__content">
                                        <h4>
                                            <p href="tel:9200368090" className="contact-details__number-1">
                                                +880 255 011 901-3
                                                {contactData.phone_number_1}
                                            </p>
                                            <br />
                                            <p href="tel:6668888000" className="contact-details__number-2">
                                                +880 255 011 904
                                                {contactData.phone_number_2}
                                            </p>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-details__icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <div className="contact-details__content">
                                        <h4>
                                            <p href="mailto:info@company.com" className="contact-details__number-1">
                                                info@deltalpg.com
                                                {contactData.email_1}
                                            </p>
                                            <br />
                                            <a href="mailto:needhelp@company.com" className="contact-details__number-2">
                                                sels@deltalpg.com
                                                {contactData.email_2}
                                            </a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-details__icon_of_address">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="contact-details__content">
                                        <p><strong>Address:</strong><br />{contactData.address.replace(/\r\n/g, '<br />')}</p>
                                        <p><strong></strong>{contactData.address.replace(/\r\n/g, '')}</p>
                                        <h4>
                                            TK BHABAN (16TH FLOOR) 13
                                            <br />
                                            KARWAN BAZAR
                                            <br />
                                            DHAKA 1215, Bangladesh
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section> */}

                    {/* --- UnderLine --- */}
                    {/* <div className="contact_page_form_header_underline">
                        <p class="site-footer__bottom-text">© All Copyright 2022 by <a href="#">Roofsie.com</a></p>
                    </div> */}

                    {/* --- contact form --- */}
                    <section className="contact-page">
                        <div className="contact-page-shape-1">
                            <img src="src/assets/images/shapes/contact-page-shape-1.png" alt=""/>
                        </div>
                        <div className="container margin_top_50_px">
                            <div className="section-title text-center">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title wow fadeInUp" data-wow-delay="100ms" >Send Your Massage</p>
                                    <div className="section-title-shape-1">
                                        <img src="src/assets/images/shapes/fire_icon.png" alt=""/>
                                    </div>
                                </div>
                                {/*<h2 className="section-title__title"><br></h2>*/}
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="contact-page__form">
                                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated"
                                            noValidate="noValidate">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your name" name="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email address" name="email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea name="message" placeholder="Write a message"></textarea>
                                                    </div>
                                                    <div className="comment-form__btn-box">
                                                        <button type="submit" className="thm-btn comment-form__btn"> <i
                                                                className="fa fa-arrow-right"></i> Send a message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <div dangerouslySetInnerHTML={{ __html: contactData.map_link }} /> */}
                    {/* --- Google Map --- */}
                    {/* <section className="google-map google-map-two">
                        <iframe
                            // src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3651.9004874759607!2d90.39078227605823!3d23.75092778875481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.7505405!2d90.39324839999999!4m5!1s0x3755b8a2ac138305%3A0x70ddbf0dc79bfae3!2zMm5kIEZsb29yLCDgpp_gpr8g4KaV4KeHIOCml-CnjeCmsOCngeCmqiwg4Kaf4Ka_LuCmleCnhyDgpq3gpqzgpqgsIDEzIOCmleCmvuCmnOCngCDgpqjgppzgprDgp4HgprIg4KaH4Ka44Kay4Ka-4KauIOCmuOCmsOCmo-Cmvywg4Kai4Ka-4KaV4Ka-IDEyMTU!3m2!1d23.7511758!2d90.39332279999999!5e0!3m2!1sbn!2sbd!4v1715501275399!5m2!1sbn!2sbd"
                            // src = {{ __html: contactData.map_link }}
                            src = {contactData.map_link}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </section> */}

                    <section className="google-map google-map-two" >
                        
                        <div
                            dangerouslySetInnerHTML={{ __html: contactData.map_link }}
                            style={{ width: '100%', height: '450px', border: 0 }}
                        />
                    </section>

                    

                    {/* === Footer === */}
                    {/* <Footer/> */}



                </div>




            </div>
        </div>
    );
};

export default Contact;