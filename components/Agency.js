import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//
import img1 from '../public/images/resource/featured-image-1.png'
import img2 from '../public/images/resource/featured-image-2.png'
import check from '../public/images/icons/tick.png'


const Agency = () => {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image-block wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <Image className="myLazy" src={img1} data-src="images/resource/featured-image-1.jpg" alt="" />
                                </div>
                                <div className="image-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <Image lass="myLazy" src={img2} data-src="images/resource/featured-image-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="sec-title">
                                    <h2 className='font65'>BOOK MARKETING AGENCY <br />& AUTHOR PROMOTION SERVICES<span
                                        className="dot">.</span></h2>
                                    <div className="lower-text">Amazon Book Submission is a professional book marketing agency
                                        that helps authors write and promote their books, help them in book editing and
                                        proofreading, design book covers, get more reviews and build their platform.</div>
                                </div>
                                <div className="text">
                                    <p>We provide services like Amazon Author Central, Amazon Book Promotion Services and
                                        Author Platform Building Services. We also help authors increase their visibility by
                                        sharing their content on social media and other platforms.</p>
                                </div>
                                <div className="text clearfix">
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Book Writing</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Book Publishing</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Book Marketing</span>
                                        </li>
                                    </ul>
                                    <div className="since"><span className="txt">Since <br />2008</span></div>
                                </div>
                                <div className="link-box">
                                    <Link className="theme-btn btn-style-one" href="/about-us">
                                        <i className="btn-curve"></i>
                                        <span className="btn-title">Discover More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Agency
