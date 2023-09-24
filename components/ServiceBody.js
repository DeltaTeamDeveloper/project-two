import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt } from 'react-icons/fa'
import img1 from '/public/images/resource/news-7.jpg'
import img2 from '../public/images/resource/featured-image-17.jpg'


const ServiceBody = () => {
    return (
        <>
            <div class="sidebar-page-container privcy">
                <div class="auto-container">
                    <div class="row clearfix">

                        <div class="content-side col-lg-8 col-md-12 col-sm-12">
                            <div class="service-details">
                                <div class="main-image image">
                                    <Image width="770" height="424" src={img1}
                                        class="attachment-linoor_service_details_770X424 size-linoor_service_details_770X424 wp-post-image"
                                        alt="Amazon" loading="lazy" />
                                </div>
                                <div class="text-content">
                                    <h3>We can Write, Publish and Announce Your Book to the World!</h3>
                                    <p>Our team of professionals love working with authors, publishers and self-publishers
                                        alike to bring their vision to life. We have had a decade of success with authors
                                        and publishers in the US who have trusted us with their most important projects. Our
                                        expertise is in producing high quality works that are designed to succeed in today's
                                        competitive publishing market.</p>
                                    <div class="featured">
                                        <div class="row clearfix">
                                            <div class="image-col col-md-6 col-sm-12">
                                                <div class="image">
                                                    <Image src={img2} alt="Amazon" />
                                                </div>
                                            </div>
                                            <div class="text-col col-md-6 col-sm-12">
                                                <div class="inner">
                                                    <h4>Book Writing & Publishing Services</h4>
                                                    <p>As professional team, we create content that has never been seen
                                                        before – not just because it's technically brilliant but because it
                                                        tells your story in a unique way. We can help you bring your book
                                                        from idea to finished product by helping you describe what you want
                                                        it to be like, editing & proofreading your manuscript, formatting
                                                        for print or eBook, design & layout, book cover design and more.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>It's Time to Share Your Incredible Story!</h3>
                                    <h4>Expert Writers Produce Professional High-Quality Ebooks</h4>
                                    <p>With the invention of ebooks and the digital age, consumers are able to access
                                        information on their terms. Nowadays, it's easier than ever to find professional
                                        high-quality ebooks. The only drawback is that it's difficult to find an expert
                                        writer who can create a book in a timely manner without sacrificing quality. This is
                                        where Amazon Book Submission comes in. Amazon Book Submission is a company that's
                                        dedicated to creating high quality ebooks, which are then sold on Amazon. Our agency
                                        is perfect for people who want their book to be professionally written and formatted
                                        by an expert author while they can take the time they need to edit the book. This
                                        ensures that their nascent business or idea will get published in a timely manner
                                        without compromising their quality. Amazon Book Submission is perfect for people who
                                        want to share their expertise with the world. With over a million titles available
                                        in Amazon, it's easy to find an audience that will appreciate and admire your work.
                                    </p>
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
                                                    <Link href="#">E-BOOK WRITING & PUBLISHING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-527" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-527">
                                                    <Link href="#">BOOK EDITING & PROOFREADING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-528" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-528">
                                                    <Link href="#">BOOK COVER DESIGN</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-529" className="menu-item menu-item-type-post_type menu-item-object-service current-menu-item menu-item-529">
                                                    <Link href="#" aria-current="page">BOOK ILLUSTRATIONS</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-530" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-530">
                                                    <Link href="#">BOOK PUBLISHING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-531" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-531">
                                                    <Link href="#">BOOK PRINTING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-532" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-532">
                                                    <Link href="#">BOOK MARKETING</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-533" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-533">
                                                    <Link href="#">AUTHOR WEBSITE</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li id="menu-item-534" className="menu-item menu-item-type-post_type menu-item-object-service menu-item-534">
                                                    <Link href="#">AMAZON-PUBLISHING</Link>
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
