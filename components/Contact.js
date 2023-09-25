import React from 'react'
import { useState } from "react";
import Router from 'next/router'


const Contact = () => {

    const [score, setScore] = useState('Send message');

    const handleSubmit = async (event) => {

        event.preventDefault()


        const data = {
            name: e.target.first.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Wating For Send Data');


        fetch('api/email/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
        })


        const { pathname } = Router
        if (pathname == pathname) {
            Router.push('/thank-you')
        }

    }


    return (
        <>
            <section className="get-quote-three">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>Still Stuck? Ask Directly<span className="dot">.</span></h2>
                    </div>
                    <div className="form-box">
                        <div className="default-form">
                            <form className="form_submission" id="contact-form" onSubmit={handleSubmit}>
                                <div className="row clearfix">
                                    <div className="form-group col-lg-12 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <input type="text" required name="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <input type="email" required name="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                        <div className="field-inner">
                                            <input type="tel" maxLength={15} minLength={11} required name="phone" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div className="field-inner">
                                            <textarea required name="message" placeholder="Write Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <button type="submit"
                                            className="theme-btn btn-style-one">
                                            <i className="btn-curve"></i>
                                            <span className="btn-title">{score}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
