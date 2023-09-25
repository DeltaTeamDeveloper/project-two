import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt } from 'react-icons/fa'


const ServiceBody = (props) => {
    return (
        <>
            <div class="sidebar-page-container privcy">
                <div class="auto-container">
                    <div class="row clearfix">

                        <div class="content-side col-lg-8 col-md-12 col-sm-12">
                            <div class="service-details">
                                <div class="main-image image">
                                    <Image width="770" height="424" src={props.img1}
                                        class="attachment-linoor_service_details_770X424 size-linoor_service_details_770X424 wp-post-image"
                                        alt="Amazon" loading="lazy" />
                                </div>
                                <div class="text-content">
                                    <h3>{props.title1}</h3>
                                    <p>{props.text1}</p>
                                    <p>{props.subtext1}</p>
                                    <div class="featured">
                                        <div class="row clearfix">
                                            <div class="image-col col-md-6 col-sm-12">
                                                <div class="image">
                                                    <Image src={props.img2} alt="Amazon" />
                                                </div>
                                            </div>
                                            <div class="text-col col-md-6 col-sm-12">
                                                <div class="inner">
                                                    <h4>{props.subtitle1}</h4>
                                                    <p>{props.text2}</p>
                                                    <p>{props.subtext2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>{props.title2}</h3>
                                    <p>{props.subtext3}</p>
                                    <h4>{props.subtitle2}</h4>
                                    <p>{props.text3}</p>
                                    <h4>{props.subtitle3}</h4>
                                    <p>{props.text4}</p>
                                    <h4>{props.subtitle4}</h4>
                                    <p>{props.text5}</p>
                                    <h4>{props.subtitle5}</h4>
                                    <p>{props.text6}</p>
                                    <h4>{props.subtitle6}</h4>
                                    <p>{props.text7}</p>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar blog-sidebar">

                                <div className="sidebar-widget services">
                                    <div className="widget-inner">
                                        <div className="sidebar-title">
                                            <h4>All Services</h4>
                                        </div>
                                        <div className="menu-service-menu-container">
                                            <ul id="menu-service-menu" className="list-unstyled m-0">
                                                <li id="menu-item-526" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-526">
                                                    <Link href="/book-writing-service">E-BOOK WRITING & PUBLISHING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-527" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-527">
                                                    <Link href="/book-editing-proofreading-service">BOOK EDITING & PROOFREADING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-528" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-528">
                                                    <Link href="/audio-book-service">AUDIO BOOK SERVICE</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-528" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-528">
                                                    <Link href="/book-cover-designing">BOOK COVER DESIGN</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-529" className="menu-item menu-item-type-post_type menu-item-object-service current-menu-item menu-item-529">
                                                    <Link href="/book-illustrations-designing" aria-current="page">BOOK ILLUSTRATIONS</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-530" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-530">
                                                    <Link href="/book-publishing-service">BOOK PUBLISHING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-531" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-531">
                                                    <Link href="/book-printing-service">BOOK PRINTING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-532" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-532">
                                                    <Link href="/book-marketing-service">BOOK MARKETING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-533" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-533">
                                                    <Link href="/author-website-development">AUTHOR WEBSITE</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-534" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-534">
                                                    <Link href="/amazon-publishing-service">AMAZON-PUBLISHING</Link>
                                                    <FaAngleRight />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-widget call-up">
                                    <div className="widget-inner">
                                        <div className="sidebar-title">
                                            <h4>Need Publishing Help?</h4>
                                        </div>
                                        <div className="text">Prefer speaking with a human to filling out a form? call corporate
                                            office and we will connect you with a team member who can help.</div>
                                        <div className="phone">
                                            <Link href="tel:tel:+18184754830">
                                                <FaPhoneAlt className="icon flaticon-call" />
                                                (818) 475-4830
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceBody
