import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { label: 'Home', to: '/' },
    {
        label: 'About Us',
        to: '/about',
        key: 'about',
        children: [
            { label: 'Mission & Vision', to: '/mission-vision' },
            { label: 'Board of Director', to: '/board-of-director' },
        ],
    },
    {
        label: 'Products',
        to: '/shop-now',
        key: 'products',
        children: [
            { label: 'Cylinder', to: '/cylinder' },
            { label: 'Bulk', to: '/bulk' },
            { label: 'Reticulation', to: '/reticulation' },
        ],
    },
    { label: 'Distribution', to: '/distribution' },
    { label: 'Contact', to: '/contact' },
];

const MobileMenu = () => {
    const location = useLocation();
    const [expandedMenus, setExpandedMenus] = useState({});

    const activeParentKeys = useMemo(() => {
        return menuItems
            .filter((item) => item.children?.some((child) => child.to === location.pathname))
            .map((item) => item.key);
    }, [location.pathname]);

    useEffect(() => {
        const togglerElements = document.querySelectorAll('.mobile-nav__toggler');
        const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');

        const toggleMobileMenu = () => {
            mobileNavWrapper?.classList.toggle('expanded');
        };

        togglerElements.forEach(el => el.addEventListener('click', toggleMobileMenu));

        return () => {
            togglerElements.forEach(el => el.removeEventListener('click', toggleMobileMenu));
        };
    }, []);

    useEffect(() => {
        setExpandedMenus((current) => {
            const nextState = {};

            activeParentKeys.forEach((key) => {
                nextState[key] = true;
            });

            return { ...current, ...nextState };
        });

        const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
        mobileNavWrapper?.classList.remove('expanded');
    }, [activeParentKeys, location.pathname]);

    const handleCloseMenu = () => {
        const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');
        mobileNavWrapper?.classList.remove('expanded');
    };

    const toggleSubmenu = (key) => {
        setExpandedMenus((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    const isPathActive = (path) => location.pathname === path;

    return (
        <div className="mobile-nav__wrapper">
            <div className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box ">
                    <Link to="/" aria-label="logo image" onClick={handleCloseMenu}>
                        <img src="src/assets/images/resources/delta_header_logo_170_91.png" width="170" height="90" alt="Logo" />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    <ul className="main-menu__list mobile-menu__list">
                        {menuItems.map((item) => {
                            const isExpanded = Boolean(expandedMenus[item.key]);
                            const hasChildren = Boolean(item.children?.length);
                            const parentActive = isPathActive(item.to) || item.children?.some((child) => isPathActive(child.to));

                            return (
                                <li key={item.label} className={parentActive ? 'mobile-menu__item--active' : ''}>
                                    <div className="mobile-menu__row">
                                        <Link
                                            to={item.to}
                                            className="mobile-menu__link"
                                            onClick={handleCloseMenu}
                                        >
                                            <span>{item.label}</span>
                                        </Link>

                                        {hasChildren ? (
                                            <button
                                                type="button"
                                                className={`mobile-menu__toggle ${isExpanded ? 'expanded' : ''}`}
                                                aria-expanded={isExpanded}
                                                aria-label={`Toggle ${item.label} submenu`}
                                                onClick={() => toggleSubmenu(item.key)}
                                            >
                                                <i className="fa fa-angle-down"></i>
                                            </button>
                                        ) : null}
                                    </div>

                                    {hasChildren ? (
                                        <ul className={`mobile-menu__submenu ${isExpanded ? 'mobile-menu__submenu--open' : ''}`}>
                                            {item.children.map((child) => (
                                                <li key={child.to} className={isPathActive(child.to) ? 'mobile-menu__item--active' : ''}>
                                                    <Link
                                                        to={child.to}
                                                        className="mobile-menu__link mobile-menu__link--child"
                                                        onClick={handleCloseMenu}
                                                    >
                                                        <span>{child.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                            );
                        })}
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
