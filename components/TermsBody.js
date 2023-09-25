import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt } from 'react-icons/fa'
import check from '../public/images/icons/tick.png'


const TermsBody = () => {
    return (
        <>
            <div className="sidebar-page-container privcy">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-details">
                                <div className="text-content">
                                    <h3>Terms & Conditions</h3>
                                    <p>The following terms and conditions apply to projects undertaken by
                                        <Link className='d-block' href="/">www.amazonpublishingagency.com</Link>
                                    </p>
                                    <h4>COPYRIGHT</h4>
                                    <p>You will hold full copyright to the content that we will develop for you and deliver
                                        as per the agreed terms. We will hold no copyright whatsoever on the content and you
                                        are free to publish and use it as per your wish.</p>
                                    <h4>PAYMENT</h4>
                                    <p>We charge 100% advance payment for all services mentioned on the website. All
                                        transaction charges and tax (as applicable) are to be borne by the client.</p>
                                    <h4>REVISIONS</h4>
                                    <p>We offer unlimited number of revisions on delivered work, as long as the requests are
                                        made within 7 days of delivering the work, and in special cases, as long as the
                                        requests are made within 14 days of delivering of work. All revision requests
                                        pertaining to customers order will be completed as per the urgency of the order with
                                        24 hours as standard minimum turnaround time.</p>
                                    <p>Revision turnaround time as per urgency is as follows:</p>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>For orders up to 24 hours of urgency; Revision turnaround time would be 24 hours.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>For orders between 24-48 hours of urgency; Revision turnaround time would be 48
                                                hours.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>For orders of 48 hours and above; Revision turnaround time would be 72 hours.</span>
                                        </li>
                                    </ul>
                                    <h4>PROJECT REQUIREMENTS</h4>
                                    <p>Any project requirements will be discussed with the clients before the start of a
                                        project. Service level disputes will be addressed based on the agreed terms and
                                        requirements at the beginning of a project, these terms and conditions, as well as
                                        reasonable business practices.</p>
                                    <h4>REFUND POLICY</h4>
                                    <p>You may claim a full refund of your amount before we have started working on your
                                        project. However, once the work has started on a project the refund will be
                                        processed after deducting any applicable transaction charges from the amount. Refund
                                        requests will not be accepted if you sign up using a limited time or discounted
                                        promotion.</p>
                                    <p>A refund request can be submitted if you are not satisfied with any product or
                                        service provided by Amazon Book Submission within 5 days of your order completion.
                                        Certain percentage based refund would be granted if we are unable to provide
                                        required service through our unlimited revision policy. If no refund request is
                                        received within five days after your order has been delivered, your satisfaction
                                        over the delivered order shall be assumed by both the parties.</p>
                                    <h4>TERM OF USE OF THIS WEBSITE</h4>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>The information provided on www.amazonpublishingagency.com includes, but is not
                                                limited to, the services provided by the company and does not render any advice,
                                                certifications, guarantees or warranties.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>The company or any of its affiliates or associates or employees shall not be in
                                                any way responsible for any loss or damage that may arise to any person from any
                                                inadvertent error in the information contained in this website.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>The company and its affiliates and associates shall not be liable, at any time,
                                                for any failure of performance, error, omission, interruption, deletion, defect,
                                                delay in operation or transmission, computer virus, communications line failure,
                                                theft or destruction or unauthorized access to, alteration of, or use of
                                                information contained on the website.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>You agree to defend, indemnify, and hold the company and its subsidiaries,
                                                affiliates, officers, agents, and employees, harmless from and against any
                                                claims, liabilities, damages, losses, and expenses, arising out of or in any way
                                                connected with (i) your access to or use of the website and the services
                                                therein; (ii) your violation of these Terms of Use; (iii) your violation of any
                                                third party right, including without limitation any intellectual property right,
                                                publicity, confidentiality, property or privacy right.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>This Agreement or your use of this Site does not constitute any joint venture,
                                                partnership, employment or agency relationship between you and the company.</span>
                                        </li>
                                    </ul>

                                    <p>The representatives may use the pseudo names depending on which region they are
                                        interacting in order to facilitate and do a better communication with our customers
                                        because we deal in the global market.</p>

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

export default TermsBody
