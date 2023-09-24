import React from 'react'
import Link from 'next/link'


const PolicyCTA = () => {
    return (
        <>
            <section className="call-to-section-two alternate">
                <div className="auto-container">
                    <div className="inner clearfix">
                        <h2>WHY CHOOSE Amazon Book Submission FOR <br />YOUR BOOK WRITING &amp; PUBLISHING?</h2>
                        <div className="link-box">
                            <Link className="theme-btn btn-style-two" href="/contact-us">
                                <i className="btn-curve"></i>
                                <span className="btn-title">Contact with us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PolicyCTA
