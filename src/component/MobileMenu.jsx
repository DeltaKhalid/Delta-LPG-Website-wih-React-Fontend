import React, { useEffect } from 'react';

const MobileMenu = () => {
    useEffect(() => {
        const togglerElements = document.querySelectorAll('.mobile-nav__toggler');
        const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');

        const toggleMobileMenu = () => {
            mobileNavWrapper.classList.toggle('expanded');
        };

        togglerElements.forEach(el => el.addEventListener('click', toggleMobileMenu));

        // Clean up
        return () => {
            togglerElements.forEach(el => el.removeEventListener('click', toggleMobileMenu));
        };
    }, []);

    return (
        <div className="mobile-nav__wrapper">
            <div className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box ">
                    <a href="/" aria-label="logo image">
                        
                        {/* <img src="src/assets/images/resources/logo-3.png" width="143" height="50" alt="Logo" /> */}
                        <img src="src/assets/images/resources/delta_header_logo_170_91.png" width="170" height="90" alt="Logo" />
                    </a>
                </div>

                <div className="mobile-nav__container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About </a></li>
                        <li><a href="/cylinder">Cylinder</a></li>
                        <li><a href="/bulk">Bulk</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled mobile_menu_text_color">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:info@deltalpg.com">info@deltalpg.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:+880255011901">+880 255 011 901</a>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
