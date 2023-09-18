import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Header.module.css'
//
import logo from '../public/logo.png'


const Header = () => {

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
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-2"></span><span className="txt">Menu</span></div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link href="javascript:;">Services
                                                <div className="dropdown-btn">
                                                    <span className="fa fa-angle-right"></span>
                                                </div>
                                            </Link>
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
                                    <a className="link" href="tel:tel:+18184754830">
                                        <span className="icon"></span>
                                        <span className="sub-text">Call Anytime</span>
                                        <span className="number">(818) 475-4830</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
