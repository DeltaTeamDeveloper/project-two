import React from 'react'


const ServiceBanner = (props) => {
    return (
        <>
            <section className="page-banner services">
                <div className="image-layer"></div>
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="banner-inner">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <h1>{props.title}</h1>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceBanner
