import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Banner.module.css'


const Banner404 = (props) => {
    return (
        <>
            <section className="page-banner privacy">
                <div className="image-layer"></div>
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className='content-box'>
                    <Container>
                        <Row>
                            <Col md={12} className={styles[props.alignclass]}>
                                <div className="content-box homeBox">
                                    <div className="content">
                                        <div>
                                            <Row className='px-md-5'>
                                                <Col lg={12}>
                                                    <h1 className="header-heading text-center">404</h1>
                                                    <div className="link-box text-center pt-3">
                                                        <Link className="theme-btn btn-style-one" href="/">
                                                            <i className="btn-curve"></i>
                                                            <span className="btn-title">Back To Home</span>
                                                        </Link>
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
            </section>
        </>
    )
}

export default Banner404
