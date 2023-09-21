import React from 'react'
import styles from '@/styles/Unique.module.css'


const Unique = () => {
    return (
        <>
            <section className={`${styles.parallaxSection} parallax-section jarallax`}>
                <div className={styles.overlay}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h2 className='mb-4 pb-2'>What Makes Us<span> Unique</span></h2>
                        <p className='mb-4 pb-2'>
                            <span>Everything is yours and within your control:</span> Our
                            clients hold their own publication rights, have total control
                            over their accounts, and receive 100% of the money. We will take
                            you through every step of the procedure.
                        </p>
                        <p>
                            <span>Books are published to be sold:</span> Every project
                            starts with a plan for getting people to find your book — after
                            all, you can't market a book that no one can find. Your book is
                            then created, rather than the other way around.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Unique
