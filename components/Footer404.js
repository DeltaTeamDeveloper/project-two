import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
//
import logo from '../public/logo.png'


const Footer404 = () => {
    return (
        <>
            <footer className="main-footer foot404">
                <div className="auto-container">
                    <div className="widgets-section">
                        <Row className="clearfix">
                            <Col lg={4} className="column">
                                <div className="footer-widget logo-widget">
                                    <div className="widget-content">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image id="fLogo" src={logo} alt="" />
                                            </Link>
                                        </div>
                                        <div className="text">We write books that influence the
                                            literary sphere and your worth as an author.
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} className="column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-content">
                                        <h6>Explore</h6>
                                        <div className="row clearfix">
                                            <div className="col-lg-8 col-md-6 col-sm-12">
                                                <ul>
                                                    <li>
                                                        <Link href="book-writing-service">Book Writing & Publishing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="ghost-writing-service">Ghost Book Writing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="audio-book-service">Audio Book Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="book-editing-proofreading-service">Book Editing & Proofreading</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="book-cover-designing">Book Cover Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="book-illustrations-designing">Book Illustrations</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="amazon-publishing-service">Amazon-Publishing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="book-marketing-service">Book Marketing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <ul>
                                                    <li>
                                                        <Link href="/about-us">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact-us">Contact Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-portfolio">Portfolio</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/client-testimonials">Testimonials</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/privacy-policy">Privacy Policy</Link></li>
                                                    <li>
                                                        <Link href="/terms-and-conditions">Terms of Use</Link></li>
                                                    <li>
                                                        <Link href="/author-website-development">Author Website</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} className="column">
                                <div className="footer-widget info-widget">
                                    <div className="widget-content">
                                        <h6>Contact</h6>
                                        <ul className="contact-info">
                                            <li className="address">
                                                <FaMapMarkerAlt className="icon" />
                                                11400 West Olympic Blvd. Suite 200, Los Angeles, CA, 90064
                                            </li>
                                            <li>
                                                <FaPhoneAlt className="icon" />
                                                <Link href="tel:tel:+18184754830">(818) 475-4830</Link>
                                            </li>
                                            <li>
                                                <FaEnvelope className="icon" />
                                                <Link href="mailto:info@amazonbooksubmission.com">info@amazonbooksubmission.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner clearfix">
                            <div className="copyright">Amazon Book Submission | &copy; Copyright
                                2022</div>
                            <p className="amazon-footer-disclaimer">Amazon Book Submission Is
                                Run By Certified Amazon Professionals. We aren't A Part Or
                                An Entity Of Amazon.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer404
