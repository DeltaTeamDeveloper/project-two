import React, { useState } from 'react';
import Image from 'next/image';
//
import folio1 from '../public/images/gallery/01.png'
import folio2 from '../public/images/gallery/02.png'
import folio3 from '../public/images/gallery/03.png'
import folio4 from '../public/images/gallery/04.png'
import folio5 from '../public/images/gallery/05.png'
import folio6 from '../public/images/gallery/06.png'
import folio7 from '../public/images/gallery/07.png'
import folio8 from '../public/images/gallery/08.png'
import folio9 from '../public/images/gallery/09.png'
import folio10 from '../public/images/gallery/10.png'
import folio11 from '../public/images/gallery/11.png'
import folio12 from '../public/images/gallery/12.png'


const Portfolio = () => {

    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (filter) => {
        setActiveTab(filter);
    };

    const galleryData = [
        {
            id: 1,
            filter: ['all'],
            category: ['web-design'],
            imgSrc: folio1,
            author: 'Aryam Ebrahim',
            title: 'Choose Your Favourite Read',
        },
        {
            id: 2,
            filter: ['all'],
            category: ['photography', 'web-design'],
            imgSrc: folio2,
            author: 'Elisa Marie',
            title: 'What Happened to That Little Girl?',
        },
        {
            id: 3,
            filter: ['all'],
            category: ['branding', 'web-design'],
            imgSrc: folio3,
            author: 'Wellington Chingwaro',
            title: 'The Zimbabwe Dream Team',
        },
        {
            id: 4,
            filter: ['all'],
            category: ['branding', 'illustration'],
            imgSrc: folio4,
            author: 'Mairah Shawanda',
            title: '52 Reminders and Tips on How to Manage Stress',
        },
        {
            id: 5,
            filter: ['all'],
            category: ['branding', 'illustration', 'photography', 'web-design'],
            imgSrc: folio5,
            author: 'John Saunders',
            title: "Go Away, I'm Dead",
        },
        {
            id: 6,
            filter: ['all'],
            category: ['illustration', 'photography'],
            imgSrc: folio6,
            author: 'Veronica Lagat',
            title: 'Proud of My Identity',
        },
        {
            id: 7,
            filter: ['all'],
            category: ['web-design'],
            imgSrc: folio7,
            author: 'EEEFY',
            title: 'The Depths of Life',
        },
        {
            id: 8,
            filter: ['all'],
            category: ['photography', 'web-design'],
            imgSrc: folio8,
            author: 'Kevin John Cheek',
            title: 'Slade: The Legend',
        },
        {
            id: 9,
            filter: ['all'],
            category: ['branding', 'web-design'],
            imgSrc: folio9,
            author: 'Dennis Mcnutt',
            title: 'Pieces of a Treasured Life',
        },
        {
            id: 10,
            filter: ['all'],
            category: ['branding', 'illustration'],
            imgSrc: folio10,
            author: 'Rajaa Matouq Barefah',
            title: 'Smart Ways to Learn Multiplication Tables',
        },
        {
            id: 11,
            filter: ['all'],
            category: ['branding', 'illustration', 'photography', 'web-design'],
            imgSrc: folio11,
            author: 'Shashi Patel',
            title: 'Common Indian Man',
        },
        {
            id: 12,
            filter: ['all'],
            category: ['illustration', 'photography'],
            imgSrc: folio12,
            author: 'Laila Bhimani',
            title: 'Born in Fort Portal',
        },
    ];

    // Filter the gallery items based on the active tab
    const filteredGalleryData = activeTab === 'all'
        ? galleryData
        : galleryData.filter((item) => item.category.includes(activeTab));



    return (
        <>
            <section className="gallery-section">
                <div className="auto-container">
                    <div className="mixitup-gallery">
                        <div className="upper-row clearfix">
                            <div className="sec-title">
                                <h2>
                                    Our Portfolio<span className="dot">.</span>
                                </h2>
                            </div>
                            <div className="filters clearfix">
                                <ul className="filter-tabs filter-btns clearfix">
                                    <li
                                        className={`filter ${activeTab === 'all' ? 'active' : ''}`}
                                        data-role="button"
                                        onClick={() => handleTabClick('all')}
                                    >
                                        All<sup>[12]</sup>
                                    </li>
                                    <li
                                        className={`filter ${activeTab === 'branding' ? 'active' : ''}`}
                                        data-role="button"
                                        onClick={() => handleTabClick('branding')}
                                    >
                                        Ghost Writing<sup>[6]</sup>
                                    </li>
                                    <li
                                        className={`filter ${activeTab === 'illustration' ? 'active' : ''}`}
                                        data-role="button"
                                        onClick={() => handleTabClick('illustration')}
                                    >
                                        Publishing<sup>[6]</sup>
                                    </li>
                                    <li
                                        className={`filter ${activeTab === 'photography' ? 'active' : ''}`}
                                        data-role="button"
                                        onClick={() => handleTabClick('photography')}
                                    >
                                        Illustration<sup>[6]</sup>
                                    </li>
                                    <li
                                        className={`filter ${activeTab === 'web-design' ? 'active' : ''}`}
                                        data-role="button"
                                        onClick={() => handleTabClick('web-design')}
                                    >
                                        Marketing<sup>[8]</sup>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-list row">
                            {filteredGalleryData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`gallery-item mix all ${item.category} col-lg-4 col-md-6`}
                                >
                                    <div className="inner-box">
                                        <figure className='image'>
                                            <Image
                                                className="myLazy"
                                                src={item.imgSrc}
                                                alt="img"
                                            />
                                        </figure>
                                        <a href={item.imgSrc} className="lightbox-image overlay-box" data-fancybox="gallery"></a>
                                        <div className="cap-box">
                                            <div className="cap-inner">
                                                <div className="cat"><span>{item.author}</span></div>
                                                <div className="title">
                                                    <h5>{item.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
