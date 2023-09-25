import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
//
import logo from '../public/logo.png'
import close from '../public/images/icons/close-1-1.png'
import { FaBars, FaAngleRight, FaAngleDown } from 'react-icons/fa';


const Header = () => {

    // ======== Header fixed

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ===== mbl menu

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu1 = () => {
        setMegaMenu1((prev) => !prev);
    }

    // ===== Cursor movement

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [cursorActive, setCursorActive] = useState(false);
    const [closeCursor, setCloseCursor] = useState(false);

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        function handleMouseMove(e) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setMouseX(e.pageX);
            setMouseY(e.pageY - scrollTop);
        }

        function handleMouseEnter() {
            setCursorActive(true);
            setCloseCursor(false);
        }

        function handleMouseLeave() {
            setCursorActive(false);
            setCloseCursor(false);
        }

        function handleCustomCursorEnter() {
            setCloseCursor(true);
        }

        function handleCustomCursorLeave() {
            setCloseCursor(false);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('button, a').forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        const customCursorOverlay = document.querySelector('.custom-cursor__overlay');
        if (customCursorOverlay) {
            customCursorOverlay.addEventListener('mouseenter', handleCustomCursorEnter);
            customCursorOverlay.addEventListener('mouseleave', handleCustomCursorLeave);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('button, a').forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });

            if (customCursorOverlay) {
                customCursorOverlay.removeEventListener('mouseenter', handleCustomCursorEnter);
                customCursorOverlay.removeEventListener('mouseleave', handleCustomCursorLeave);
            }
        };
    }, []);

    useEffect(() => {
        setPosX((prevX) => prevX + (mouseX - prevX) / 9);
        setPosY((prevY) => prevY + (mouseY - prevY) / 9);

        const follower = document.querySelector('.cursor-follower');
        const cursor = document.querySelector('.cursor');
        follower.style.left = `${posX - 22}px`;
        follower.style.top = `${posY - 22}px`;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    }, [mouseX, mouseY, posX, posY]);

    return (
        <>
            <header className="main-header header-style-one">
                <div className={`header-upper ${isScrolled ? 'fixed-header' : ''}`}>
                    <div className="inner-container clearfix">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/" title="Amazon Book Submission">
                                    <Image src={logo} id="thm-logo" alt="Amazon Book Submission" title="Amazon Book Submission" />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer clearfix">
                            <div className="mobile-nav-toggler" onClick={handleMenu}>
                                <FaBars className="icon flaticon-menu-2" />
                                <span className="txt">Menu</span>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link href="#">Services</Link>
                                            <ul>
                                                <li>
                                                    <Link href="/book-writing-service">Book Writing &amp; Publishing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-editing-proofreading-service">Book Editing &amp; Proofreading</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ghost-writing-service">Ghost Book Writing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/audio-book-service">Audio Book Service</Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-cover-designing"> Book Cover Design </Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-illustrations-designing">Book Illustrations</Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-publishing-service">Book Publishing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-printing-service">Book Printing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/book-marketing-service">Book Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/author-website-development">Author Website</Link>
                                                </li>
                                                <li>
                                                    <Link href="/amazon-publishing-service">Amazon Publishing</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/our-portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link href="/client-testimonials">Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">About Us</Link>
                                        </li>

                                        <li>
                                            <Link href="/contact-us">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="other-links clearfix">
                            <div className="link-box">
                                <div className="call-us">
                                    <Link className="link" href="tel:tel:+18184754830">
                                        <span className="icon"></span>
                                        <span className="sub-text">Call Anytime</span>
                                        <span className="number">(818) 475-4830</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={isActive ? "side-menu__block active" : "side-menu__block"}>
                <div className={`side-menu__block-overlay custom-cursor__overlay ${closeCursor ? 'close-cursor' : ''}`}>
                    <div className={`cursor ${cursorActive ? 'active' : ''}`}></div>
                    <div className={`cursor-follower ${cursorActive ? 'active' : ''}`}></div>
                </div>
                <div className="side-menu__block-inner ">
                    <div className="side-menu__top justify-content-end" onClick={handleMenu}>
                        <Link href="/" className="side-menu__toggler side-menu__close-btn">
                            <Image src={close} className='img-fluid' alt="" />
                        </Link>
                    </div>

                    <nav className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="current" onClick={handleMenu}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="dropdown">
                                    <Link href="#" onClick={handleMegaMenu1}>Services
                                        <div className="dropdown-btn">
                                            <FaAngleRight />
                                        </div>
                                    </Link>
                                    <ul className={megamenu1 ? "megaMenu openMenu" : "megaMenu"}>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-writing-service">Book Writing &amp; Publishing</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-editing-proofreading-service">Book Editing &amp; Proofreading</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/ghost-writing-service">Ghost Book Writing</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/audio-book-service">Audio Book Service</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-cover-designing">Book Cover Design</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-illustrations-designing">Book Illustrations</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-publishing-service">Book Publishing</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-printing-service">Book Printing</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/book-marketing-service">Book Marketing</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/author-website-development">Author Website</Link>
                                        </li>
                                        <li onClick={handleMenu}>
                                            <Link href="/amazon-publishing-service">Amazon Publishing</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li onClick={handleMenu}>
                                    <Link href="/our-portfolio">Portfolio</Link>
                                </li>
                                <li onClick={handleMenu}>
                                    <Link href="/client-testimonials">Testimonials</Link>
                                </li>
                                <li onClick={handleMenu}>
                                    <Link href="/about-us">About Us</Link>
                                </li>

                                <li onClick={handleMenu}>
                                    <Link href="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="side-menu__sep"></div>
                    <div className="side-menu__content">
                        <p>Our Location: 30 N Gould St, STE R, Sheridan, WY 82801</p>
                        <p>
                            <Link href="mailto:info@amazonbooksubmission.com">info@amazonbooksubmission.com</Link> <br />
                            <Link href="tel:tel:+18184754830">(818) 475-4830</Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
