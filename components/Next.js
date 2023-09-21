import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
//
import img1 from '../public/images/resource/featured-image-6.jpg'
import check from '../public/images/icons/tick.png'


const Next = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <section class="agency-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div class="inner">
                                <div class="sec-title">
                                    <h2>Become The Next <br />Best-Selling Author<span
                                        class="dot">.</span></h2>
                                </div>

                                <div className="default-tabs tabs-box">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <li
                                            data-tab="#tab-1"
                                            className={`tab-btn ${activeTab === 1 ? 'active-btn' : ''}`}
                                            onClick={() => handleTabClick(1)}
                                        >
                                            <span>Our Mission</span>
                                        </li>
                                        <li
                                            data-tab="#tab-2"
                                            className={`tab-btn ${activeTab === 2 ? 'active-btn' : ''}`}
                                            onClick={() => handleTabClick(2)}
                                        >
                                            <span>Our Vision</span>
                                        </li>
                                        <li
                                            data-tab="#tab-3"
                                            className={`tab-btn ${activeTab === 3 ? 'active-btn' : ''}`}
                                            onClick={() => handleTabClick(3)}
                                        >
                                            <span>Our History</span>
                                        </li>
                                    </ul>

                                    <div className="tabs-content">
                                        <div className={`tab ${activeTab === 1 ? 'active-tab' : ''}`} id="tab-1">
                                            <div className="content">
                                                <div className="text">
                                                    At Amazon Book Submission, our mission is to help you publish your book or help you with the publishing process. We help you with both creative and business publishing.
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab ${activeTab === 2 ? 'active-tab' : ''}`} id="tab-2">
                                            <div className="content">
                                                <div className="text">
                                                    Our vision is to be the best Amazon Book Submission in the world. We are proud of our team of talented writers and editors who have helped us bring out bestselling books.
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab ${activeTab === 3 ? 'active-tab' : ''}`} id="tab-3">
                                            <div className="content">
                                                <div className="text">
                                                    Our history is as old as the publishing industry itself. We are one of the best solutions for authors looking to get their work published and make money on it.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div class="inner">
                                <div class="text">Amazon Book Submission is a leading
                                    independent book publishing agency in USA. We have been
                                    providing innovative, customized solutions to publishers
                                    and authors for over a decade.</div>
                                <div class="featured-block-two clearfix">
                                    <div class="image">
                                        <Image src={img1} alt="Feature Image" className='img-fluid' />
                                    </div>
                                    <div class="text">
                                        <ul>
                                            <li>
                                                <Image src={check} alt='check' className='img-fluid' />
                                                <span>Award-Winning Team.</span>
                                            </li>
                                            <li>
                                                <Image src={check} alt='check' className='img-fluid' />
                                                <span>Extensive Portfolio.</span>
                                            </li>
                                            <li>
                                                <Image src={check} alt='check' className='img-fluid' />
                                                <span>Always deliver quality work.</span>
                                            </li>
                                            <li>
                                                <Image src={check} alt='check' className='img-fluid' />
                                                <span>Most affordable prices.</span>
                                            </li>
                                            <li>
                                                <Image src={check} alt='check' className='img-fluid' />
                                                <span>One-Stop-Solutions.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Next
