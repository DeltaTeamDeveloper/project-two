import React from 'react'
import { useState } from 'react';
import Router from 'next/router'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import styles from '@/styles/Banner.module.css'


const Banner = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [score, setScore] = useState('Send message');

    const handleSubmit = async (event) => {

        event.preventDefault()


        const data = {
            first: event.target.first.value,
            email: event.target.email.value,
            phone: event.target.phone.value,

        }



        const JSONdata = JSON.stringify(data)

        setScore('Wating For Send Data');

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {

            if (res.status === 200) {
                console.log(res);
            }
        })


        const { pathname } = Router
        if (pathname == pathname) {
            Router.push('/thank-you')
        }

    }



    return (
        <>
            <div className={`${styles[props.bannershome]} bannergllobal`}>
                <div className={`${styles.homeBanner} image-layer`}></div>
                <div className="left-top-line"></div>
                <div className="right-bottom-curve"></div>
                <div className="right-top-curve"></div>
                <div className='content-box'>
                    <Container>
                        <Row>
                            <Col md={12} className={styles[props.alignclass]}>
                                <div className="content-box homeBox">
                                    <div className="content">
                                        <div className="inner">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className="sub-title">Welcome To Amazon Book Submission</div>
                                                    <h1 className="header-heading">Can't Wait For Your Manuscript<br />To Get Published?</h1>
                                                    <span className='span-text'>We have the competence, experience and passion necessary to publish any book and help you reach your publishing goals with your e-books, textbooks or public-domain books.</span>
                                                    <div className="link-box">
                                                        <Link className="theme-btn btn-style-one" href="/about-us">
                                                            <i className="btn-curve"></i>
                                                            <span className="btn-title">Discover More</span>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col lg={4} className='px-lg-0 mt-4 mt-lg-0'>
                                                    <div className="form-box">
                                                        <h2>Let's Get Started</h2>
                                                        <div className="default-form">
                                                            <form className="form_submission" id="contact-form" onSubmit={handleSubmit}>
                                                                <div className="row clearfix">
                                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="field-inner">
                                                                            <input type="text" required name="cn" placeholder="Your Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                                        <div className="field-inner">
                                                                            <input type="email" required name="em" placeholder="Email Address" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                                        <div className="field-inner">
                                                                            <input type="tel" maxLength={15} minLength={11} required name="pn" placeholder="Phone Number" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="field-inner">
                                                                            <textarea required name="msg" placeholder="I am looking for ...." ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                                        <button type="submit" className="theme-btn btn-style-one">
                                                                            <i className="btn-curve"></i>
                                                                            <span className="btn-title">{score}</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Modal className='modopp'
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    centered
                    animation={false}

                >
                    <span onClick={handleClose} className={styles.crossclose}>x</span>
                    <Modal.Body className='modalprocess'>
                        <video controls className={`${styles.bgVideo1}`} autoPlay muted loop src="/images/process-combine.mp4" type="video/mp4"></video>
                    </Modal.Body>

                </Modal>



            </div>
        </>
    )
}

export default Banner
