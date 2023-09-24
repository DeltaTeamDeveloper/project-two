import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt } from 'react-icons/fa'
import check from '../public/images/icons/tick.png'


const PrivacyBody = () => {
    return (
        <>
            <div className="sidebar-page-container privcy">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-details">
                                <div className="text-content">
                                    <h3>Privacy Policy</h3>
                                    <p>Privacy policy helps you and us both in keeping your information confidential. Our
                                        privacy policy will help in understanding the process we follow to maintain your
                                        privacy during and after the work process.</p>
                                    <h4>USER INFORMATION</h4>
                                    <p>We may collect the following information for your identification and serene
                                        collaboration.</p>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Name, business name and job title.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Contact information including phone numbers, email address or website.</span>
                                        </li>
                                    </ul>
                                    <p>We require this information to understand your needs and provide you with a better
                                        service, and in particular for the following reasons:</p>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>We may use the information to improve our products and services.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>We may also use your information to contact you to provide feedback on our
                                                services.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>We may use the information to customize the website according to your interests.</span>
                                        </li>
                                    </ul>
                                    <h4>Security</h4>
                                    <p>We are committed to ensuring that your information is secure. In order to prevent
                                        unauthorized access or disclosure, we have put in place suitable physical,
                                        electronic and managerial procedures to safeguard and secure the information we
                                        collect online.</p>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Information of clients at Amazon Book Submission is kept extremely secure during
                                                transmission by the use of the Secure Sockets Layer (SSL) Software which
                                                encrypts information that client puts in.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Amazon Book Submission follows generally accepted industry standards to protect
                                                the personal information that is being submitted by the client during
                                                transmission and once we receive it. However, since no method of transmission
                                                over the Internet, or method of electronic storage, is 100% secure, we despite
                                                using commercially acceptable means to protect your personal information cannot
                                                guarantee its absolute security.</span>
                                        </li>
                                    </ul>
                                    <h4>3RD PARTY SHARING</h4>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>We do not divulge any Personal information to the third parties.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>In no circumstances do we provide or sell personal information of our clients to
                                                the third parties.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Amazon Book Submission utilizes services of credit card processing companies to
                                                bill you for services. These companies never share, store, save or use exclusive
                                                information for any other purposes.</span>
                                        </li>
                                    </ul>
                                    <h4>COOKIES AND THEIR USE</h4>
                                    <ul>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Cookies, alphanumeric identifiers, facilitate our systems to recognize the
                                                clients' browsers and storage of items in their Shopping Carts during visits.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>To prevent the browser from accept new cookies, disable cookies and notify the
                                                user when a new cookie is received, Help portion of the toolbar on most browsers
                                                becomes most instrumental.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Normally clients do not restrict cookies as they allow you to take full
                                                advantage of the top features at our site. Our study suggests that the clients
                                                leave cookies to be accepted.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Amazon Book Submission keeps track of your IP address to help diagnose problems
                                                with our server and to administer our website. Your IP address is also used to
                                                gather broad demographic information about you, such as your location and your
                                                Internet service provider.</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Client's collective information on how our users are utilizing the site may be
                                                gathered. This information might include details vis-à-vis traffic patterns
                                                through the site and search queries. No IP address/log file information is tied
                                                to Personally Identifiable Information (PII).</span>
                                        </li>
                                        <li>
                                            <Image src={check} alt='check' className='img-fluid' />
                                            <span>Information regarding browser types, access times, URLs through which people
                                                visit our site and URLs viewed by visitors while on our site is not accessible
                                                third parties, except in combined form.</span>
                                        </li>
                                    </ul>
                                    <p>In order to ensure the privacy of our valued customer we never store any sort of
                                        information related to our clients neither we do take any cards information from
                                        client.</p>

                                    <h4>Consumer Data Safety Measures </h4>
                                    <p>We respect your right of privacy. We therefore do not share your name and contact
                                        details with any third party. Besides, we keep information provided by you as
                                        confidential. The information you provide are used only to understand your
                                        requirements and to improve our services to suit your needs rather effectively. We
                                        ensure to follow the standards set by PCI and consumer data protection.</p>

                                    <p>It is hereby declared that our company does not authorize its representatives to
                                        collect any confidential information from our customers i.e. credit card information
                                        etc. Accordingly we advise our customers not to share any confidential and sensitive
                                        nature information with our employees. If you do so; you shall be doing at your own
                                        risk and our company shall not be liable for any misuse.</p>

                                    <p>Your ordered work may be forwarded to any of our production or service centers
                                        located globally, for the quality delivery. However, they are also bound by an NDA
                                        to keep customer’s information as highly confidential.</p>

                                    <h4>Pseudonym Policy </h4>
                                    <p>We hold a policy of using the pseudonym to ensure the following:</p>

                                    <p>With a view to avoid undue confusion and hassle at our customers end when they are
                                        assigned a new account manager, we use pseudonyms; it helps our customers remain
                                        connected with a single point of contact and remember their name comfortably.</p>

                                    <p>Moreover; as our staff comprises of people from different regions and cultures, hence
                                        the use of pseudonym helps us present a uniform culture of the organization</p>


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

export default PrivacyBody
