import Head from 'next/head'
// import components
import ServiceBanner from '@/components/ServiceBanner'
import ServiceBody from '@/components/ServiceBody'
import PolicyCTA from '@/components/PolicyCTA'
import Agency from '@/components/Agency'
import Portfolio from '@/components/Portfolio'
import Unique from '@/components/Unique'
import Next from '@/components/Next'
import Contact from '../components/Contact'
//
import img1 from '/public/images/resource/news-7.jpg'
import img2 from '../public/images/resource/featured-image-17.jpg'


export default function Home() {


    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
                <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                <link rel="profile" href="http://gmpg.org/xfn/11" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <meta name="ahrefs-site-verification" content="477dd6bba6df5cbe29b3e72784e78d88841329f22877beb016f1dde2e4967124" />
                <title>Amazon Publishing Service by Amazon Book Submission</title>
                <meta name="description" content="Publish your book or e-book on  Amazon today with a professional publishing plan from Amazon Book Submission and reach millions of readers worldwide!" />
                <meta name="keywords" content="amazon publishing service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Amazon Publishing Service by Amazon Book Submission" />
                <meta property="og:description" content="Publish your book or e-book on  Amazon today with a professional publishing plan from Amazon Book Submission and reach millions of readers worldwide!" />
                <link rel="canonical" href="" />
                <meta property="og:site_name" content="Book Writing" />
                <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="13 minutes" />
                <link rel="icon" href="/favicon.png" />
            </Head>


            <main>

                <div className='page-wrapper'>

                    <ServiceBanner
                        title={<> EASILY DELIVER YOUR BOOK TO READERS <br />
                            <span>ON AMAZON AND BEYOND</span> </>}
                        text={<> Amazon Publishing is a revolutionary way to publish your book. With our help, you can get your book onto the shelves of major retailers and even on the bestseller list. Now, publishing your own book doesn't have to be a complicated process. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> AMAZON BOOK PUBLISHING SERVICE! </>}
                        text1={<> Amazon Book Submission is a fast-growing publishing platform that helps authors get their books published. The platform provides a range of services from editing to marketing and promotion. </>}
                        subtext1={<> Amazon Book Submission is an innovative service for authors to publish their own books on Amazon's website. With this service, authors will be able to take advantage of Amazon's digital distribution platform, as well as get the help of Amazon experts when it comes to editing, marketing and promotion. </>}
                        img2={img2}
                        subtitle1={<> MAXIMIZING YOUR AMAZON RETAIL LISTING </>}
                        text2={<> Amazon Book Submission is a company that helps you to optimize your Amazon retail listing. This service can help you to create the best possible product pages and listings. They also provide detailed reports of how well your product is performing on the platform. </>}
                        title2={<> SELL EBOOKS ON AMAZON KINDLE </>}
                        subtext3={<> Amazon Book Submission also offers self-publishing services for authors who want to publish their own books on Amazon's Kindle store. We provide a range of services including editorial, design, marketing and distribution. </>}
                        text3={<> By publishing on Amazon's Kindle store, you can reach millions of people. Your eBook will be mobile-optimized and made available for purchase on Kindle and many other eReaders via the Kindle reader app. </>}
                    />

                    <PolicyCTA />

                    <Agency />

                    <Portfolio />

                    <Unique />

                    <Next />

                    <Contact />

                </div>

            </main>
        </>
    )
}
