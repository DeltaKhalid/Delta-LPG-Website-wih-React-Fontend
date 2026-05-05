import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mobileMenuLogo from '../assets/images/resources/delta_header_logo_r__170_91.png';

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

const MobileMenu = ({ isOpen, onClose }) => {
    const location = useLocation();
    const [expandedMenus, setExpandedMenus] = useState({});

    // Close menu on route change
    useEffect(() => {
        onClose();
    }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const toggleSubmenu = useCallback((key) => {
        setExpandedMenus(prev => ({ ...prev, [key]: !prev[key] }));
    }, []);

    const isPathActive = (path) => location.pathname === path;

    if (!isOpen) return null;

    return (
        <div className="mob-overlay" onClick={onClose}>
            <div className="mob-panel" onClick={(e) => e.stopPropagation()}>

                {/* Close button */}
                <button className="mob-close-btn" onClick={onClose} aria-label="Close menu">
                    <i className="fa fa-times"></i>
                </button>

                {/* Logo */}
                <div className="mob-logo">
                    <Link to="/" onClick={onClose}>
                        <img src={mobileMenuLogo} width="170" height="90" alt="Delta Logo" />
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="mob-nav">
                    <ul className="mob-nav-list">
                        {menuItems.map((item) => {
                            const isExpanded = Boolean(expandedMenus[item.key]);
                            const hasChildren = Boolean(item.children?.length);
                            const isActive = isPathActive(item.to) || item.children?.some((c) => isPathActive(c.to));

                            return (
                                <li key={item.label} className={`mob-nav-item${isActive ? ' mob-nav-item--active' : ''}`}>
                                    <div className="mob-nav-row">
                                        <Link
                                            to={item.to}
                                            className="mob-nav-link"
                                            onClick={onClose}
                                        >
                                            {item.label}
                                        </Link>
                                        {hasChildren && (
                                            <button
                                                type="button"
                                                className={`mob-nav-toggle${isExpanded ? ' expanded' : ''}`}
                                                onClick={() => toggleSubmenu(item.key)}
                                                aria-expanded={isExpanded}
                                                aria-label={`Toggle ${item.label} submenu`}
                                            >
                                                <i className="fa fa-angle-down"></i>
                                            </button>
                                        )}
                                    </div>
                                    {hasChildren && isExpanded && (
                                        <ul className="mob-subnav-list">
                                            {item.children.map((child) => (
                                                <li key={child.to} className={isPathActive(child.to) ? 'mob-nav-item--active' : ''}>
                                                    <Link
                                                        to={child.to}
                                                        className="mob-nav-link mob-nav-link--child"
                                                        onClick={onClose}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Contact info */}
                <div className="mob-contact">
                    <a href="mailto:info@deltalpg.com" className="mob-contact-item">
                        <span className="mob-contact-icon"><i className="fa fa-envelope"></i></span>
                        info@deltalpg.com
                    </a>
                    <a href="tel:+880255011901" className="mob-contact-item">
                        <span className="mob-contact-icon"><i className="fa fa-phone-alt"></i></span>
                        +880 255 011 901
                    </a>
                </div>

                {/* Social links */}
                <div className="mob-social">
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
